'use client';

import { useEffect } from 'react';

/**
 * WebMCP — experimentálna registrácia nástrojov pre AI agentov v prehliadači.
 *
 * WebMCP (návrh Chrome/Edge, W3C) umožňuje webu deklarovať nástroje, ktoré môže
 * agentický prehliadač volať priamo — namiesto klikania po DOM-e. API je v štádiu
 * early preview a jeho tvar sa môže meniť, preto:
 *  - všetko je za feature detection (bežné prehliadače: čistý no-op),
 *  - podporujeme obe navrhované registrácie (provideContext aj registerTool),
 *  - nástroje sú vystavené aj na window.__starboWebMcp pre ladenie a demo.
 *
 * Výkon: komponent nič nerenderuje; dáta slovníka sa naťahujú lazy importom
 * až pri zavolaní nástroja, takže bežný návštevník nestiahne nič navyše.
 */

const SITE = 'https://starbomedia.sk';

// Časová pasca kontaktného API vyžaduje ts staršie ako 3 s — čas načítania modulu to spĺňa.
const LOADED_AT = Date.now();

type ToolResult = { content: { type: 'text'; text: string }[] };
type Tool = {
    name: string;
    description: string;
    inputSchema: Record<string, unknown>;
    execute: (args: Record<string, unknown>) => Promise<ToolResult>;
};

const text = (t: string): ToolResult => ({ content: [{ type: 'text', text: t }] });

const fold = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();

const SERVICES = [
    { name: 'Reklama na internete (prehľad služieb)', url: `${SITE}/reklama-na-internete`, desc: 'Výkonnostný marketing meraný na tržbách.' },
    { name: 'Google reklama', url: `${SITE}/google-reklama`, desc: 'Search, Shopping, Performance Max, Demand Gen.' },
    { name: 'Facebook a Instagram reklama (Meta Ads)', url: `${SITE}/facebook-reklama`, desc: 'Výkonnostné kampane s Conversion API a Advantage+.' },
    { name: 'Správa sociálnych sietí a tvorba obsahu', url: `${SITE}/sprava-socialnych-sieti`, desc: 'Obsah na kľúč — stratégia, natáčanie, Reels/TikTok, publikovanie.' },
    { name: 'YouTube reklama', url: `${SITE}/youtube-reklama`, desc: 'Videokampane: in-stream, bumper, Shorts.' },
    { name: 'SEO optimalizácia', url: `${SITE}/seo`, desc: 'Technické SEO, obsah, autorita; pripravené na AI vyhľadávanie.' },
    { name: 'Cenové porovnávače', url: `${SITE}/cenove-porovnavace`, desc: 'Heureka a produktové feedy pre e-shopy.' },
    { name: 'Webová analytika', url: `${SITE}/analyza-webu`, desc: 'GA4, GTM, server-side meranie, Consent Mode v2.' },
    { name: 'AI Studio', url: `${SITE}/ai-studio`, desc: 'AI služby: produktová fotografia, video, voice boti, SEO obsah.' },
];

const TOOLS: Tool[] = [
    {
        name: 'starbomedia_zoznam_sluzieb',
        description:
            'Vráti zoznam marketingových služieb agentúry Starbomedia s URL a popisom. / Lists Starbomedia digital-marketing services with URLs and descriptions.',
        inputSchema: { type: 'object', properties: {} },
        execute: async () =>
            text(SERVICES.map((s) => `- ${s.name} — ${s.desc} (${s.url})`).join('\n')),
    },
    {
        name: 'starbomedia_vyhladaj_pojem',
        description:
            'Vyhľadá pojem v slovníku online marketingu Starbomedia (PPC, Google Ads, Meta Ads, metriky, SEO, AI, analytika) a vráti definíciu v slovenčine. / Looks up a term in the Starbomedia Slovak digital-marketing glossary and returns its definition.',
        inputSchema: {
            type: 'object',
            properties: {
                pojem: { type: 'string', description: 'Hľadaný pojem, napr. "ROAS", "PNO", "konverzia", "AEO".' },
            },
            required: ['pojem'],
        },
        execute: async (args) => {
            const query = fold(String(args.pojem ?? ''));
            if (!query) return text('Zadajte hľadaný pojem (parameter "pojem").');
            // Lazy import — dáta slovníka sa načítajú až pri prvom volaní nástroja.
            const { GLOSSARY_TERMS } = await import('../data/glossary');
            const exact = GLOSSARY_TERMS.find(
                (t) => fold(t.term) === query || t.slug === query || (t.fullName && fold(t.fullName) === query),
            );
            const match =
                exact ??
                GLOSSARY_TERMS.find((t) => fold(`${t.term} ${t.fullName ?? ''}`).includes(query));
            if (!match) {
                const tips = GLOSSARY_TERMS.filter((t) => fold(t.short).includes(query)).slice(0, 5);
                return text(
                    tips.length
                        ? `Presný pojem sa nenašiel. Príbuzné pojmy: ${tips.map((t) => t.term).join(', ')}. Celý slovník: ${SITE}/slovnik-pojmov`
                        : `Pojem sa v slovníku nenašiel. Celý slovník: ${SITE}/slovnik-pojmov`,
                );
            }
            const url = match.page
                ? `${SITE}/slovnik-pojmov/${match.slug}`
                : `${SITE}/slovnik-pojmov#${match.slug}`;
            const fullName = match.fullName ? ` — ${match.fullName}` : '';
            return text(`${match.term}${fullName}: ${match.short}\nViac: ${url}`);
        },
    },
    {
        name: 'starbomedia_odoslat_dopyt',
        description:
            'Odošle nezáväzný dopyt (kontaktný formulár) marketingovej agentúre Starbomedia. Použiť len s výslovným súhlasom používateľa. / Submits a non-binding inquiry to the Starbomedia agency. Use only with explicit user consent.',
        inputSchema: {
            type: 'object',
            properties: {
                meno: { type: 'string', description: 'Meno odosielateľa (min. 2 znaky).' },
                email: { type: 'string', description: 'Platný e-mail pre odpoveď.' },
                predmet: { type: 'string', description: 'Voliteľný predmet dopytu.' },
                sprava: { type: 'string', description: 'Text dopytu (min. 10 znakov).' },
            },
            required: ['meno', 'email', 'sprava'],
        },
        execute: async (args) => {
            try {
                const res = await fetch('/api/kontakt', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        meno: args.meno,
                        email: args.email,
                        predmet: args.predmet ?? 'Dopyt cez AI agenta (WebMCP)',
                        sprava: args.sprava,
                        web: '',
                        ts: LOADED_AT,
                        turnstileToken: '',
                    }),
                });
                const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
                if (res.ok && data.ok) {
                    return text('Dopyt bol odoslaný. Starbomedia odpovedá spravidla do 24 hodín na uvedený e-mail.');
                }
                return text(
                    `Dopyt sa nepodarilo odoslať (${data.error ?? `HTTP ${res.status}`}). ` +
                    'Kontakt: marketing@starbomedia.sk, +421 940 782 070, prípadne formulár na https://starbomedia.sk/kontakt',
                );
            } catch {
                return text('Dopyt sa nepodarilo odoslať. Kontakt: marketing@starbomedia.sk, +421 940 782 070.');
            }
        },
    },
];

declare global {
    interface Window {
        __starboWebMcp?: { tools: Tool[]; registered: boolean };
    }
}

function registerTools(): boolean {
    if (typeof navigator === 'undefined') return false;
    const mc = (navigator as unknown as { modelContext?: Record<string, unknown> }).modelContext;
    if (!mc) return false;
    try {
        if (typeof mc.provideContext === 'function') {
            (mc.provideContext as (ctx: { tools: Tool[] }) => void)({ tools: TOOLS });
            return true;
        }
        if (typeof mc.registerTool === 'function') {
            TOOLS.forEach((t) => (mc.registerTool as (tool: Tool) => void)(t));
            return true;
        }
    } catch (e) {
        console.warn('WebMCP: registrácia nástrojov zlyhala', e);
    }
    return false;
}

export default function WebMcpTools() {
    useEffect(() => {
        // Guard proti dvojitej registrácii (React StrictMode, klientske navigácie).
        if (window.__starboWebMcp) return;
        window.__starboWebMcp = { tools: TOOLS, registered: registerTools() };
    }, []);

    return null;
}

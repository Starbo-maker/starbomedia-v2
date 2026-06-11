import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

/**
 * Kontaktný formulár → e-mail cez Resend.
 *
 * Env premenné (Vercel → Settings → Environment Variables):
 *  - RESEND_API_KEY          (povinné) API kľúč z resend.com
 *  - TURNSTILE_SECRET_KEY    (odporúčané) secret z Cloudflare Turnstile; bez neho sa overenie preskočí
 *  - CONTACT_TO              (voliteľné) kam chodia dopyty, default marketing@starbomedia.sk
 *  - RESEND_FROM             (voliteľné) odosielateľ; po overení domény v Resend napr.
 *                            "Starbomedia web <web@starbomedia.sk>", default test sender Resendu
 *
 * Anti-spam vrstvy: honeypot pole `web` + časová pasca `ts` (obe vracajú falošný úspech,
 * aby bot nedostal signál) a Cloudflare Turnstile token overovaný server-side.
 */

const CONTACT_TO = process.env.CONTACT_TO || 'marketing@starbomedia.sk';
const RESEND_FROM = process.env.RESEND_FROM || 'Starbomedia web <onboarding@resend.dev>';
const MIN_FORM_MS = 3000;

const fakeSuccess = () => NextResponse.json({ ok: true });

function str(v: unknown, max: number): string {
    return typeof v === 'string' ? v.trim().slice(0, max) : '';
}

async function verifyTurnstile(token: string, ip: string | null): Promise<boolean> {
    const secret = process.env.TURNSTILE_SECRET_KEY;
    if (!secret) return true; // Turnstile zatiaľ nenakonfigurovaný — ostatné vrstvy ostávajú aktívne
    if (!token) return false;
    try {
        const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ secret, response: token, remoteip: ip || undefined }),
        });
        const data = (await res.json()) as { success?: boolean };
        return data.success === true;
    } catch {
        return false;
    }
}

export async function POST(req: NextRequest) {
    let body: Record<string, unknown>;
    try {
        body = await req.json();
    } catch {
        return NextResponse.json({ ok: false, error: 'Neplatná požiadavka.' }, { status: 400 });
    }

    // 1) honeypot — pole, ktoré človek nevidí; vyplnené = bot
    if (str(body.web, 200)) return fakeSuccess();

    // 2) časová pasca — odoslané skôr než MIN_FORM_MS od načítania = bot
    const ts = Number(body.ts);
    if (!Number.isFinite(ts) || Date.now() - ts < MIN_FORM_MS) return fakeSuccess();

    // 3) validácia polí
    const meno = str(body.meno, 100);
    const email = str(body.email, 200);
    const predmet = str(body.predmet, 150);
    const sprava = str(body.sprava, 5000);
    if (meno.length < 2 || sprava.length < 10 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
        return NextResponse.json(
            { ok: false, error: 'Vyplňte prosím meno, platný e-mail a správu (aspoň 10 znakov).' },
            { status: 400 },
        );
    }

    // 4) Cloudflare Turnstile
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || null;
    if (!(await verifyTurnstile(str(body.turnstileToken, 4096), ip))) {
        return NextResponse.json(
            { ok: false, error: 'Overenie proti spamu zlyhalo. Skúste to prosím znova.' },
            { status: 400 },
        );
    }

    // 5) odoslanie cez Resend
    if (!process.env.RESEND_API_KEY) {
        return NextResponse.json(
            { ok: false, error: 'Formulár momentálne nie je dostupný. Napíšte nám na marketing@starbomedia.sk.' },
            { status: 503 },
        );
    }
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
        from: RESEND_FROM,
        to: [CONTACT_TO],
        replyTo: email,
        subject: `Dopyt z webu: ${predmet || meno}`,
        text: [
            `Meno: ${meno}`,
            `E-mail: ${email}`,
            predmet ? `Predmet: ${predmet}` : null,
            '',
            sprava,
            '',
            '—',
            `Odoslané z kontaktného formulára starbomedia.sk${ip ? ` (IP: ${ip})` : ''}`,
        ]
            .filter((l) => l !== null)
            .join('\n'),
    });

    if (error) {
        console.error('Resend error:', error);
        return NextResponse.json(
            { ok: false, error: 'Správu sa nepodarilo odoslať. Napíšte nám na marketing@starbomedia.sk.' },
            { status: 502 },
        );
    }
    return NextResponse.json({ ok: true });
}

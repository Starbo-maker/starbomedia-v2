'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

// Cloudflare Turnstile site key — public, nastavuje sa vo Verceli.
// Keď nie je nastavený, widget sa nezobrazí a server-side overenie sa preskočí
// (honeypot + časová pasca ostávajú aktívne).
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

declare global {
    interface Window {
        turnstile?: { reset: (container?: string | HTMLElement) => void };
    }
}

const inputStyle: React.CSSProperties = {
    padding: '0.8rem',
    borderRadius: '8px',
    background: '#f8fafc',
    border: '1px solid var(--border)',
    color: 'var(--foreground)',
};

const labelStyle: React.CSSProperties = { fontSize: '0.9rem', color: 'var(--text-secondary)' };
const fieldStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: '0.5rem' };

export default function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState('');
    const [loadedAt, setLoadedAt] = useState(0);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        setLoadedAt(Date.now());
    }, []);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (status === 'sending') return;
        setStatus('sending');
        setErrorMsg('');

        const fd = new FormData(e.currentTarget);
        try {
            const res = await fetch('/api/kontakt', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    meno: fd.get('meno'),
                    email: fd.get('email'),
                    predmet: fd.get('predmet'),
                    sprava: fd.get('sprava'),
                    web: fd.get('web'),
                    ts: loadedAt,
                    turnstileToken: fd.get('cf-turnstile-response') || '',
                }),
            });
            const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
            if (res.ok && data.ok) {
                setStatus('success');
            } else {
                setStatus('error');
                setErrorMsg(data.error || 'Správu sa nepodarilo odoslať. Skúste to znova alebo nám napíšte priamo.');
                window.turnstile?.reset();
            }
        } catch {
            setStatus('error');
            setErrorMsg('Správu sa nepodarilo odoslať. Skúste to znova alebo nám napíšte priamo.');
            window.turnstile?.reset();
        }
    }

    if (status === 'success') {
        return (
            <div role="status" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1rem', padding: '2rem 1rem' }}>
                <CheckCircle size={48} color="#10b981" />
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>Správa odoslaná</h3>
                <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
                    Ďakujeme za dopyt. Ozveme sa vám spravidla do 24 hodín.
                </p>
            </div>
        );
    }

    return (
        <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={fieldStyle}>
                    <label htmlFor="meno" style={labelStyle}>Meno</label>
                    <input id="meno" name="meno" type="text" required minLength={2} maxLength={100} placeholder="Ján Novák" style={inputStyle} />
                </div>
                <div style={fieldStyle}>
                    <label htmlFor="email" style={labelStyle}>Email</label>
                    <input id="email" name="email" type="email" required maxLength={200} placeholder="jan@firma.sk" style={inputStyle} />
                </div>
            </div>

            <div style={fieldStyle}>
                <label htmlFor="predmet" style={labelStyle}>Predmet</label>
                <input id="predmet" name="predmet" type="text" maxLength={150} placeholder="Mám záujem o audit..." style={inputStyle} />
            </div>

            <div style={fieldStyle}>
                <label htmlFor="sprava" style={labelStyle}>Správa</label>
                <textarea id="sprava" name="sprava" rows={5} required minLength={10} maxLength={5000} placeholder="Dobrý deň, potreboval by som..." style={{ ...inputStyle, resize: 'vertical' }} />
            </div>

            {/* Honeypot — pre ľudí neviditeľné, boty ho vyplnia */}
            <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}>
                <label htmlFor="web">Webová stránka (nevypĺňajte)</label>
                <input id="web" name="web" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            {TURNSTILE_SITE_KEY && (
                <>
                    <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="lazyOnload" />
                    <div className="cf-turnstile" data-sitekey={TURNSTILE_SITE_KEY} data-theme="light" data-language="sk" />
                </>
            )}

            {status === 'error' && (
                <div role="alert" style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px', padding: '0.9rem 1rem', color: '#b91c1c', fontSize: '0.92rem' }}>
                    <AlertCircle size={18} style={{ flexShrink: 0, marginTop: '0.1rem' }} />
                    <span>
                        {errorMsg}{' '}
                        <a href="mailto:marketing@starbomedia.sk" style={{ fontWeight: 600, textDecoration: 'underline' }}>marketing@starbomedia.sk</a>
                    </span>
                </div>
            )}

            <button type="submit" className="btn btn-primary" disabled={status === 'sending'} style={{ marginTop: '1rem', opacity: status === 'sending' ? 0.7 : 1 }}>
                {status === 'sending' ? 'Odosielam…' : 'Odoslať správu'} <Send size={18} style={{ marginLeft: '0.5rem' }} />
            </button>
        </form>
    );
}

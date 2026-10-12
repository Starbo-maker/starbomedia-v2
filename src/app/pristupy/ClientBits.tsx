'use client';

import { useEffect, useRef, useState } from 'react';
import { Copy, Check } from 'lucide-react';

/** Slučka bez zvuku – načíta a hrá sa až keď je video na obrazovke (6 videí na stránke). */
export function LoopVideo({ name, label }: { name: string; label: string }) {
    const ref = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        const v = ref.current;
        if (!v) return;
        const io = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) {
                // autoplay spustí video aj keď sa ešte načítava (samotné play() hneď po zmene src môže zlyhať)
                v.autoplay = true;
                if (!v.src) v.src = `/pristupy/${name}.mp4`;
                v.play().catch(() => {});
            } else {
                v.autoplay = false;
                v.pause();
            }
        }, { threshold: 0.25 });
        io.observe(v);
        return () => io.disconnect();
    }, [name]);
    return (
        <video
            ref={ref}
            poster={`/pristupy/${name}.webp`}
            width={1920}
            height={1080}
            muted
            loop
            playsInline
            preload="none"
            aria-label={label}
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '14px', border: '1px solid #e2e8f0', background: '#f8fafc' }}
        />
    );
}

/** Hodnota s tlačidlom na skopírovanie (e-mail, ID). */
export function CopyValue({ value }: { value: string }) {
    const [done, setDone] = useState(false);
    const copy = async () => {
        try {
            await navigator.clipboard.writeText(value);
            setDone(true);
            setTimeout(() => setDone(false), 1800);
        } catch {
            /* prehliadač kopírovanie nepovolil – hodnota je viditeľná a dá sa označiť */
        }
    };
    return (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <code style={{ fontFamily: 'inherit', fontWeight: 700, fontSize: '1.05rem', color: '#0f172a', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '0.3rem 0.6rem', userSelect: 'all' }}>
                {value}
            </code>
            <button
                type="button"
                onClick={copy}
                aria-label={`Skopírovať ${value}`}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', border: '1px solid #e2e8f0', background: done ? '#ecfdf5' : '#fff', color: done ? '#047857' : '#5B2C7F', borderRadius: '8px', padding: '0.35rem 0.65rem', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}
            >
                {done ? <Check size={15} /> : <Copy size={15} />} {done ? 'Skopírované' : 'Kopírovať'}
            </button>
        </span>
    );
}

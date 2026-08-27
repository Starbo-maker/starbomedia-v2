import Link from 'next/link';
import Image from 'next/image';
import { Camera, CheckCircle, Zap, Image as ImageIcon, Sparkles } from 'lucide-react';
import styles from '../../ai-studio.module.css';

const IMG = '/ai-studio/produktova-fotografia';

function BeforeAfterFigure({
    po,
    pred,
    altPo,
    altPred,
    aspectRatio = '4 / 3',
}: {
    po: string;
    pred: string;
    altPo: string;
    altPred: string;
    aspectRatio?: string;
}) {
    return (
        <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', aspectRatio }}>
            <Image src={`${IMG}/${po}`} alt={altPo} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 500px" />
            <span style={{ position: 'absolute', top: '12px', right: '12px', background: 'var(--ai-gradient, linear-gradient(135deg, #6366f1, #ec4899))', color: 'white', fontSize: '0.75rem', fontWeight: 700, padding: '0.3rem 0.8rem', borderRadius: '20px', letterSpacing: '0.05em' }}>
                PO
            </span>
            <div style={{ position: 'absolute', left: '12px', bottom: '12px', width: '28%', minWidth: '90px', borderRadius: '10px', overflow: 'hidden', border: '3px solid white', boxShadow: '0 4px 12px rgba(0,0,0,0.25)', background: 'white' }}>
                <div style={{ position: 'relative', aspectRatio: '1 / 1' }}>
                    <Image src={`${IMG}/${pred}`} alt={altPred} fill style={{ objectFit: 'contain', background: 'white' }} sizes="150px" />
                </div>
                <span style={{ position: 'absolute', top: '6px', left: '6px', background: '#0f172a', color: 'white', fontSize: '0.65rem', fontWeight: 700, padding: '0.15rem 0.5rem', borderRadius: '12px', letterSpacing: '0.05em' }}>
                    PRED
                </span>
            </div>
        </div>
    );
}

export const metadata = {
    title: 'AI produktová fotografia | Starbomedia',
    description: 'Z jednej fotky produktu vytvoríme desiatky reklamných scén – lifestyle zábery, výmena pozadia a 100 % vernosť značky aj etikety. 1 200 vizuálov za 2 až 4 dni.',
};

export default function AiProductPhotoPage() {
    return (
        <div className={styles.aiStudioWrapper}>
            <header className={styles.hero}>
                <div className={styles.heroBackground} />
                <div className={`container ${styles.heroGrid}`}>
                    <div className={styles.heroContent}>
                        <div className={styles.badge}>AI foto štúdio</div>
                        <h1 className={styles.title} style={{ fontSize: '3.5rem' }}>AI produktová fotografia</h1>
                        <p className={styles.subtitle}>
                            Z jedinej fotky produktu vytvoríme desiatky profesionálnych scén – lifestyle zábery,
                            hero shoty aj social kreatívy v hotových reklamných formátoch. Bez drahého fotenia
                            a týždňov čakania.
                        </p>
                        <div style={{ marginTop: '2rem' }}>
                            <Link href="/kontakt" className="btn btn-primary" style={{ background: 'var(--ai-gradient)' }}>
                                Chcem produktové vizuály
                            </Link>
                        </div>
                    </div>

                    <div className={styles.heroVisual}>
                        <div className={styles.orbContainer}>
                            <div className={styles.orb} style={{ background: 'conic-gradient(from 180deg at 50% 50%, #6366f1 0deg, #ec4899 180deg, #6366f1 360deg)' }} />
                            <div className={styles.orbCore} />

                            <div className={`${styles.floatingCard} ${styles.fc1}`}>
                                <Camera size={20} color="#6366f1" /> Produkt v reálnom použití
                            </div>
                            <div className={`${styles.floatingCard} ${styles.fc2}`}>
                                <Sparkles size={20} color="#ec4899" /> 100 % vernosť produktu
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className="container" style={{ paddingBottom: '8rem' }}>
                <div className={styles.demoContainer}>
                    <div className={styles.grid}>
                        <div style={{ padding: '2rem' }}>
                            <ImageIcon size={48} color="#6366f1" style={{ marginBottom: '1.5rem' }} />
                            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Scény šité na váš produkt</h2>
                            <p style={{ color: '#64748b', lineHeight: '1.6', marginBottom: '2rem' }}>
                                Z jednej fotky vášho produktu pripravíme celú sadu vizuálov – rôzne scény, uhly aj varianty,
                                všetko v jednotnom štýle naprieč celým katalógom. Hotové vizuály nasadíte na produktový detail
                                v e-shope aj do inzercie – od feedu po stories.
                            </p>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 500 }}>
                                    <CheckCircle size={20} color="#10b981" /> Odstránenie a výmena pozadia
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 500 }}>
                                    <CheckCircle size={20} color="#10b981" /> Lifestyle scény s modelom aj bez neho
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 500 }}>
                                    <CheckCircle size={20} color="#10b981" /> 100 % vernosť produktu – značka a etiketa sa nezmenia
                                </li>
                            </ul>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <BeforeAfterFigure
                                po="stol-po-lifestyle.jpg"
                                pred="stol-pred.jpg"
                                altPo="AI lifestyle scéna – masážny stôl Fabulo UNO v presvetlenom interiéri"
                                altPred="Pôvodná produktová fotka masážneho stola Fabulo UNO"
                                aspectRatio="16 / 10"
                            />
                            <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '0.8rem', textAlign: 'center' }}>
                                Z e-shopového packshotu lifestyle scéna – produkt sa nezmenil ani o milimeter.
                            </p>
                        </div>
                    </div>
                </div>

                <section style={{ marginTop: '6rem' }}>
                    <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
                        <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>Ukážky pred / po</h2>
                        <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                            Reálne výstupy z našej produkcie. Malá fotka vľavo dole je vždy pôvodný podklad
                            z e-shopu – veľký vizuál je hotová AI scéna.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: '2rem' }}>
                        <div>
                            <BeforeAfterFigure
                                po="stol-po-swap.jpg"
                                pred="stol-pred.jpg"
                                altPo="Masážny stôl Fabulo UNO s vymeneným pozadím – masérska miestnosť"
                                altPred="Pôvodná produktová fotka masážneho stola"
                            />
                            <p style={{ fontWeight: 600, marginTop: '0.8rem' }}>Výmena pozadia</p>
                            <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Packshot vsadený do reálneho prostredia – tvar, farba aj detaily produktu zostávajú verné originálu.</p>
                        </div>
                        <div>
                            <BeforeAfterFigure
                                po="obuv-po.jpg"
                                pred="obuv-pred.jpg"
                                altPo="Bežec zaväzujúci si bežeckú obuv Hoka na lesnom chodníku – AI scéna"
                                altPred="Pôvodná produktová fotka bežeckej obuvi Hoka"
                            />
                            <p style={{ fontWeight: 600, marginTop: '0.8rem' }}>Produkt v použití</p>
                            <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Z bočného packshotu scéna s modelom v pohybe – vrátane verného loga a farieb obuvi.</p>
                        </div>
                        <div>
                            <BeforeAfterFigure
                                po="olej-po.jpg"
                                pred="olej-pred.jpg"
                                altPo="Masážny olej Verana vo wellness scéne s eukalyptom a sviečkou – AI scéna"
                                altPred="Pôvodná produktová fotka masážneho oleja Verana"
                            />
                            <p style={{ fontWeight: 600, marginTop: '0.8rem' }}>Verná etiketa</p>
                            <p style={{ color: '#64748b', fontSize: '0.9rem' }}>Aj text a logo na obale zostávajú čitateľné a nezmenené – kritické pre kozmetiku a doplnky.</p>
                        </div>
                    </div>

                    <div className={styles.demoContainer} style={{ marginTop: '4rem', maxWidth: 'none' }}>
                        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                            <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>Tri scény z jednej fotky</h3>
                            <p style={{ color: '#64748b' }}>
                                Tenisky Bugatti pre e-shop Robel.sk – z jediného packshotu tri rôzne lifestyle scény pripravené do reklám.
                            </p>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%), 1fr))', gap: '1.5rem', alignItems: 'stretch' }}>
                            <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', background: 'white', border: '1px solid #e2e8f0' }}>
                                <div style={{ position: 'relative', height: '100%', minHeight: '260px' }}>
                                    <Image src={`${IMG}/bugatti-pred.jpg`} alt="Pôvodná produktová fotka tenisiek Bugatti z e-shopu Robel.sk" fill style={{ objectFit: 'contain', background: 'white', padding: '1rem' }} sizes="(max-width: 768px) 100vw, 300px" />
                                </div>
                                <span style={{ position: 'absolute', top: '12px', left: '12px', background: '#0f172a', color: 'white', fontSize: '0.75rem', fontWeight: 700, padding: '0.3rem 0.8rem', borderRadius: '20px', letterSpacing: '0.05em' }}>PRED</span>
                            </div>
                            {[
                                { src: 'bugatti-po-1.jpg', alt: 'Tenisky Bugatti v chôdzi na dláždenej ulici – AI scéna 1' },
                                { src: 'bugatti-po-2.jpg', alt: 'Tenisky Bugatti na schodoch pred kaviarňou – AI scéna 2' },
                                { src: 'bugatti-po-3.jpg', alt: 'Tenisky Bugatti na drevenej terase – AI scéna 3' },
                            ].map((v, i) => (
                                <div key={v.src} style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', aspectRatio: '3 / 4' }}>
                                    <Image src={`${IMG}/${v.src}`} alt={v.alt} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 300px" />
                                    <span style={{ position: 'absolute', top: '12px', right: '12px', background: 'var(--ai-gradient, linear-gradient(135deg, #6366f1, #ec4899))', color: 'white', fontSize: '0.75rem', fontWeight: 700, padding: '0.3rem 0.8rem', borderRadius: '20px', letterSpacing: '0.05em' }}>
                                        PO {i + 1}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className={styles.grid} style={{ marginTop: '5rem' }}>
                    <div className={styles.card}>
                        <Zap className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>1 200 vizuálov za 2 až 4 dni</h3>
                        <p className={styles.cardDesc}>Namiesto 4 až 6 týždňov klasického fotenia. Z každého produktu dostanete 4 až 8 obrázkov vo formátoch 1:1 a 9:16.</p>
                    </div>
                    <div className={styles.card}>
                        <Camera className={styles.cardIcon} />
                        <h3 className={styles.cardTitle}>Konzistencia</h3>
                        <p className={styles.cardDesc}>Jednotný vizuálny štýl naprieč celým katalógom – ideálne pre e-shopy s veľkým počtom produktov.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

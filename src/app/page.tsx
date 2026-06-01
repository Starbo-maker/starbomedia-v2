import Link from 'next/link';
import { Search, BarChart2, Share2, Globe, TrendingUp, Monitor, Zap, Mic, Video, Layers, ArrowRight, ShieldCheck, PieChart } from 'lucide-react';
import styles from './home.module.css';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(139, 92, 246, 0.1)',
              color: '#8b5cf6',
              padding: '0.4rem 1rem',
              borderRadius: '50px',
              fontSize: '0.9rem',
              fontWeight: 600,
              marginBottom: '2rem'
            }}>
              <Zap size={16} fill="#8b5cf6" />
              Marketing bez balastu. Len výsledky.
            </div>

            <h1 className={styles.heroTitle}>
              Marketing, ktorý <br />
              <span className={styles.gradientText}>platí vaše účty.</span>
            </h1>

            <p className={styles.heroSubtitle}>
              Sme digitálna agentúra novej generácie. Spájame kreatívu s tvrdými dátami a AI technológiou.
              Nehľadáme lajky, hľadáme vašich zákazníkov.
            </p>

            <div className={styles.buttonGroup}>
              <Link href="/kontakt" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>
                Mám záujem o audit
              </Link>
              <Link href="/ai-studio" className="btn" style={{ background: 'white', border: '1px solid #e2e8f0', color: '#0f172a', padding: '1rem 2rem' }}>
                Objaviť AI Studio
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Social Proof / Marquee */}
        <div className={styles.marqueeSection}>
          <div className="container" style={{ textAlign: 'center', fontSize: '0.9rem', color: '#64748b', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Technológie, ktoré ovládame
          </div>
          <div className={styles.marqueeContainer}>
            {['Google Ads', 'Meta Ads', 'GA4', 'Looker Studio', 'Merchant Center', 'Mergado', 'Heureka', 'TikTok Ads'].map((tech) => (
              <span key={tech} style={{ fontWeight: 700, fontSize: '1.2rem', color: '#64748b' }}>{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services BENTO GRID */}
      <section id="sluzby" className={styles.bentoSection}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Komplexný ekosystém pre váš rast</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', color: '#64748b' }}>
              Od prvého kliknutia až po opakovaný nákup. Pokrývame celú cestu zákazníka.
            </p>
          </div>

          <div className={styles.bentoGrid}>
            {/* Google Ads - Dominant Card */}
            <div className={`${styles.bentoCard} ${styles.span8}`}>
              <div>
                <div className={styles.cardIcon}><Search size={28} /></div>
                <h3 className={styles.cardTitle}>Google Ads & Performance</h3>
                <p className={styles.cardDesc}>
                  Maximalizujte návratnosť s kampaňami, ktoré cielia na ľudí pripravených nakupovať.
                  Search, Shopping, PMax - ladíme PNO na stotiny percenta.
                </p>
              </div>
              <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem' }}>
                <div><div style={{ fontWeight: 800, fontSize: '1.5rem', color: '#8b5cf6' }}>10 M€+</div><div style={{ fontSize: '0.8rem' }}>Ročný spend</div></div>
                <div><div style={{ fontWeight: 800, fontSize: '1.5rem', color: '#10b981' }}>od 2012</div><div style={{ fontSize: '0.8rem' }}>Skúsenosti</div></div>
              </div>
              <Link href="/google-reklama" style={{ position: 'absolute', bottom: '2rem', right: '2rem', background: '#f8fafc', padding: '0.8rem', borderRadius: '50%' }}>
                <ArrowRight size={20} />
              </Link>
            </div>

            {/* Social Media */}
            <div className={`${styles.bentoCard} ${styles.span4}`}>
              <div className={styles.cardIcon} style={{ color: '#ec4899' }}><Share2 size={28} /></div>
              <h3 className={styles.cardTitle}>Social Media</h3>
              <p className={styles.cardDesc}>Facebook & Instagram reklama, ktorá zastaví scrollovanie. Kreatíva, ktorá predáva emócie.</p>
              <Link href="/facebook-reklama" style={{ marginTop: 'auto', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600, color: '#ec4899' }}>
                Zistiť viac <ArrowRight size={16} />
              </Link>
            </div>

            {/* SEO */}
            <div className={`${styles.bentoCard} ${styles.span4}`}>
              <div className={styles.cardIcon} style={{ color: '#10b981' }}><TrendingUp size={28} /></div>
              <h3 className={styles.cardTitle}>SEO Optimalizácia</h3>
              <p className={styles.cardDesc}>Dostaňte sa na prvé miesta organicky. Technické SEO, linkbuilding a content stratégia.</p>
            </div>

            {/* Web Analytics */}
            <div className={`${styles.bentoCard} ${styles.span4}`}>
              <div className={styles.cardIcon} style={{ color: '#f59e0b' }}><BarChart2 size={28} /></div>
              <h3 className={styles.cardTitle}>Dáta & Analytika</h3>
              <p className={styles.cardDesc}>Meranie, ktoré dáva zmysel. GTM, GA4, Looker Studio dashboardy.</p>
            </div>

            {/* Export */}
            <div className={`${styles.bentoCard} ${styles.span4}`}>
              <div className={styles.cardIcon} style={{ color: '#3b82f6' }}><Globe size={28} /></div>
              <h3 className={styles.cardTitle}>Export do zahraničia</h3>
              <p className={styles.cardDesc}>Expandujte do CZ, HU, RO. Lokalizácia kampaní a podpora.</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/reklama-na-internete" className="btn" style={{ background: 'white', border: '1px solid #e2e8f0', color: '#0f172a', padding: '0.9rem 2.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Pozrieť všetky služby <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* AI STUDIO HIGHLIGHT - Dark Mode Section */}
      <section className="container">
        <div className={styles.aiSection}>
          <div className={styles.aiGlow}></div>
          <div className="container" style={{ position: 'relative', zIndex: 2, padding: '0 2rem' }}>
            <div style={{ display: 'inline-block', border: '1px solid rgba(249, 115, 22, 0.5)', padding: '0.5rem 1rem', borderRadius: '50px', color: '#f97316', background: 'rgba(249, 115, 22, 0.1)', marginBottom: '1.5rem', fontWeight: 600 }}>
              NOVINKA: STARBO AI STUDIO
            </div>
            <h2 style={{ fontSize: '3rem', color: 'white', marginBottom: '1.5rem' }}>Budúcnosť marketingu je automatizovaná</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto 3rem', color: '#cbd5e1', fontSize: '1.1rem' }}>
              Nestrácajte čas manuálnou prácou. Využite silu umelej inteligencie na tvorbu obsahu, videí a interakciu so zákazníkmi.
            </p>

            <div className={styles.aiGrid}>
              <Link href="/ai-studio/ai-influencer" className={styles.aiCard}>
                <div style={{ background: 'rgba(99, 102, 241, 0.2)', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <Mic color="#818cf8" />
                </div>
                <h3 style={{ fontSize: '1.2rem', color: 'white', marginBottom: '0.5rem' }}>AI Influenceri</h3>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Virtuálne osobnosti, ktoré propagujú vašu značku 24/7 bez nárokov na honorár.</p>
              </Link>

              <Link href="/ai-studio/product-to-video" className={styles.aiCard}>
                <div style={{ background: 'rgba(249, 115, 22, 0.2)', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <Video color="#fb923c" />
                </div>
                <h3 style={{ fontSize: '1.2rem', color: 'white', marginBottom: '0.5rem' }}>Product-to-Video</h3>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Z jednej fotky produktu vytvoríme profesionálne promo video do 24 hodín.</p>
              </Link>

              <Link href="/ai-studio/vibecode-weby" className={styles.aiCard}>
                <div style={{ background: 'rgba(236, 72, 153, 0.2)', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <Monitor color="#f472b6" />
                </div>
                <h3 style={{ fontSize: '1.2rem', color: 'white', marginBottom: '0.5rem' }}>VibeCode Weby</h3>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Webstránky generované AI, ktoré sa samé optimalizujú pre konverzie.</p>
              </Link>
            </div>

            <div style={{ marginTop: '3rem' }}>
              <Link href="/ai-studio" className="btn" style={{ background: 'linear-gradient(135deg, #6366f1 0%, #f97316 100%)', color: 'white', padding: '1rem 3rem', border: 'none' }}>
                Vstúpiť do AI Studia
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Stats */}
      <section className="container">
        <div className={styles.statsContainer}>
          <div>
            <span className={styles.statNumber}>84+</span>
            <span className={styles.statLabel}>Spokojných klientov</span>
          </div>
          <div>
            <span className={styles.statNumber}>10 M€+</span>
            <span className={styles.statLabel}>Ročný ad spend</span>
          </div>
          <div>
            <span className={styles.statNumber}>269+</span>
            <span className={styles.statLabel}>Spravovaných kampaní</span>
          </div>
          <div>
            <span className={styles.statNumber}>13</span>
            <span className={styles.statLabel}>Trhov v CEE</span>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Máte web, ale chýbajú<br />vám zákazníci?
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#64748b', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Nečakajte na zázrak. Objednajte si nezáväzný audit a my vám ukážeme, kde leží potenciál pre rast vášho biznisu.
          </p>
          <Link href="/kontakt" className="btn btn-primary" style={{ padding: '1.2rem 4rem', fontSize: '1.2rem', boxShadow: '0 10px 30px rgba(249, 115, 22, 0.3)' }}>
            Získať Audit Zdarma
          </Link>
        </div>
      </section>
    </>
  );
}

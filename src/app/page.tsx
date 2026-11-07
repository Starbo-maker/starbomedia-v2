import Link from 'next/link';
import { Search, BarChart2, Share2, Globe, TrendingUp, Zap, Video, FileText, Image as ImageIcon, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import styles from './home.module.css';
import GoogleReviews from '../components/GoogleReviews';
import { REVIEW_AGGREGATE } from '../data/reviews';

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
              <Link href="/kontakt" className="btn btn-primary btn-lg">
                Mám záujem o audit
              </Link>
              <Link href="/ai-studio" className="btn btn-secondary" style={{ padding: '1rem 2rem' }}>
                Objaviť AI Studio
              </Link>
            </div>

            <ul className={styles.trustRow}>
              <li>
                <a href={REVIEW_AGGREGATE.profileUrl} target="_blank" rel="noopener noreferrer">
                  <Star size={16} fill="#f59e0b" color="#f59e0b" aria-hidden="true" />
                  <strong>{REVIEW_AGGREGATE.rating.toFixed(1).replace('.', ',')}</strong> na Google ({REVIEW_AGGREGATE.count} recenzií)
                </a>
              </li>
              <li><strong>84+</strong> klientov</li>
              <li><ShieldCheck size={16} color="#8b5cf6" aria-hidden="true" /> Google Partner</li>
            </ul>
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
            <h2 style={{ fontSize: 'var(--fs-h2)', marginBottom: '1rem' }}>Komplexný ekosystém pre váš rast</h2>
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
                  Search, Shopping a PMax nastavené podľa marže a PNO, nie podľa počtu preklikov.
                </p>
              </div>
              <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem' }}>
                <div><div style={{ fontWeight: 800, fontSize: '1.5rem', color: '#8b5cf6' }}>10 M€+</div><div style={{ fontSize: '0.8rem' }}>Ročný spend</div></div>
                <div><div style={{ fontWeight: 800, fontSize: '1.5rem', color: '#059669' }}>od 2012</div><div style={{ fontSize: '0.8rem' }}>Skúsenosti</div></div>
              </div>
              <Link href="/google-reklama" aria-label="Google Ads – zistiť viac" style={{ position: 'absolute', bottom: '2rem', right: '2rem', background: '#f8fafc', padding: '0.8rem', borderRadius: '50%' }}>
                <ArrowRight size={20} />
              </Link>
            </div>

            {/* Social Media */}
            <div className={`${styles.bentoCard} ${styles.span4}`}>
              <div className={styles.cardIcon} style={{ color: '#db2777' }}><Share2 size={28} /></div>
              <h3 className={styles.cardTitle}>Social Media</h3>
              <p className={styles.cardDesc}>Facebook & Instagram reklama, ktorá zastaví scrollovanie. Kreatíva, ktorá predáva emócie.</p>
              <Link href="/facebook-reklama" className={styles.cardLink} style={{ color: '#db2777' }}>
                Zistiť viac <ArrowRight size={16} />
              </Link>
            </div>

            {/* SEO */}
            <div className={`${styles.bentoCard} ${styles.span4}`}>
              <div className={styles.cardIcon} style={{ color: '#059669' }}><TrendingUp size={28} /></div>
              <h3 className={styles.cardTitle}>SEO Optimalizácia</h3>
              <p className={styles.cardDesc}>Technické SEO, obsah a odkazy, aby vás našli v Google aj v AI vyhľadávaní.</p>
              <Link href="/seo" className={styles.cardLink} style={{ color: '#047857' }}>
                Zistiť viac <ArrowRight size={16} />
              </Link>
            </div>

            {/* Web Analytics */}
            <div className={`${styles.bentoCard} ${styles.span4}`}>
              <div className={styles.cardIcon} style={{ color: '#f59e0b' }}><BarChart2 size={28} /></div>
              <h3 className={styles.cardTitle}>Dáta & Analytika</h3>
              <p className={styles.cardDesc}>Meranie, ktoré dáva zmysel. GTM, GA4, Looker Studio dashboardy.</p>
              <Link href="/analyza-webu" className={styles.cardLink} style={{ color: '#b45309' }}>
                Zistiť viac <ArrowRight size={16} />
              </Link>
            </div>

            {/* Export */}
            <div className={`${styles.bentoCard} ${styles.span4}`}>
              <div className={styles.cardIcon} style={{ color: '#2563eb' }}><Globe size={28} /></div>
              <h3 className={styles.cardTitle}>Export do zahraničia</h3>
              <p className={styles.cardDesc}>Expandujte do CZ, HU, RO. Lokalizácia kampaní a podpora.</p>
              <Link href="/expanzia-eshopu-do-zahranicia-ppc-cee-2026" className={styles.cardLink} style={{ color: '#2563eb' }}>
                Ako na expanziu <ArrowRight size={16} />
              </Link>
            </div>

            {/* Sociálne siete a obsah — nová služba */}
            <div className={`${styles.bentoCard} ${styles.span12}`} style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem', flex: '1 1 420px' }}>
                <div className={styles.cardIcon} style={{ color: '#a21caf', flexShrink: 0 }}><Video size={28} /></div>
                <div>
                  <span style={{ display: 'inline-block', background: '#fdf4ff', color: '#a21caf', border: '1px solid #f5d0fe', borderRadius: '50px', padding: '0.15rem 0.7rem', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.5rem' }}>NOVÁ SLUŽBA</span>
                  <h3 className={styles.cardTitle}>Sociálne siete a tvorba obsahu</h3>
                  <p className={styles.cardDesc} style={{ marginBottom: 0 }}>
                    Správa profilov na kľúč — stratégia, natáčanie priamo u vás, Reels a TikTok videá,
                    publikovanie aj mesačné vyhodnotenie.
                  </p>
                </div>
              </div>
              <Link href="/sprava-socialnych-sieti" className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', whiteSpace: 'nowrap' }}>
                Zistiť viac <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/reklama-na-internete" className="btn btn-secondary" style={{ padding: '0.9rem 2.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Pozrieť všetky služby <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* AI STUDIO HIGHLIGHT - Dark Mode Section */}
      <section className="container">
        <div className={styles.aiSection}>
          <div className={styles.aiGlow}></div>
          <div className={styles.aiInner}>
            <div style={{ display: 'inline-block', border: '1px solid rgba(249, 115, 22, 0.5)', padding: '0.5rem 1rem', borderRadius: '50px', color: '#f97316', background: 'rgba(249, 115, 22, 0.1)', marginBottom: '1.5rem', fontWeight: 600 }}>
              NOVINKA: STARBO AI STUDIO
            </div>
            <h2 style={{ fontSize: 'var(--fs-h2-lg)', color: 'white', marginBottom: '1.5rem' }}>AI, ktorá robí reálnu prácu</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto 3rem', color: '#cbd5e1', fontSize: '1.1rem' }}>
              Vlastné AI nástroje, ktoré reálne používame v práci pre klientov – od produktových vizuálov cez SEO články po reporty kampaní.
            </p>

            <div className={styles.aiGrid}>
              <Link href="/ai-studio/produktova-fotografia" className={styles.aiCard}>
                <div style={{ background: 'rgba(99, 102, 241, 0.2)', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <ImageIcon color="#818cf8" />
                </div>
                <h3 style={{ fontSize: '1.2rem', color: 'white', marginBottom: '0.5rem' }}>AI produktová fotografia</h3>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Z jednej fotky produktu desiatky reklamných scén. Značka aj etiketa ostávajú verné.</p>
              </Link>

              <Link href="/ai-studio/seo-clanky" className={styles.aiCard}>
                <div style={{ background: 'rgba(249, 115, 22, 0.2)', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <FileText color="#fb923c" />
                </div>
                <h3 style={{ fontSize: '1.2rem', color: 'white', marginBottom: '0.5rem' }}>AI tvorba SEO článkov</h3>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Vlastný 8-krokový proces od výskumu kľúčových slov po hotový článok s overenými faktami.</p>
              </Link>

              <Link href="/ai-studio/report-vizualizacia" className={styles.aiCard}>
                <div style={{ background: 'rgba(236, 72, 153, 0.2)', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <BarChart2 color="#f472b6" />
                </div>
                <h3 style={{ fontSize: '1.2rem', color: 'white', marginBottom: '0.5rem' }}>Automatizované reporty</h3>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Každý pondelok report kampaní naprieč trhmi s upozornením na výkyvy, priamo do Slacku.</p>
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

      {/* Google Reviews teaser */}
      <GoogleReviews limit={3} ctaHref="/referencie-2" ctaLabel="Pozrieť všetky recenzie" />

      {/* Final CTA */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2 style={{ fontSize: 'var(--fs-h2-lg)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Máte web, ale chýbajú<br />vám zákazníci?
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#64748b', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Nečakajte na zázrak. Objednajte si nezáväzný audit a my vám ukážeme, kde leží potenciál pre rast vášho biznisu.
          </p>
          <Link href="/kontakt" className={`btn btn-primary btn-lg ${styles.ctaButton}`} style={{ boxShadow: '0 10px 30px rgba(249, 115, 22, 0.3)' }}>
            Chcem nezáväzný audit
          </Link>
        </div>
      </section>
    </>
  );
}

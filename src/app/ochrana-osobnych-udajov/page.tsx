import styles from '../service.module.css';

export const metadata = {
    title: 'Ochrana osobných údajov | Starbomedia',
    description: 'Informácie o spracúvaní osobných údajov v súlade s GDPR.',
};

export default function PrivacyPage() {
    return (
        <>
            <header className={styles.header} style={{ padding: '6rem 0 3rem' }}>
                <div className={`container ${styles.headerContent}`}>
                    <h1 className={styles.title} style={{ fontSize: '2.5rem' }}>Ochrana osobných údajov</h1>
                </div>
            </header>

            <div className={`container ${styles.content}`}>
                <section className={styles.section} style={{ padding: '0 0 5rem' }}>
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>

                        <p className={styles.text}>
                            Ochrana Vašich osobných údajov je pre nás dôležitá a preto ich spracúvame v súlade s platnou legislatívou. Nižšie uvádzame informácie o tom, ktoré osobné údaje získavame, za akým účelom sú využívané a ďalšie užitočné informácie týkajúce sa ich spracúvania.
                        </p>

                        <h2 style={{ fontSize: '1.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>1. Všeobecné informácie</h2>

                        <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Totožnosť a kontaktné údaje Prevádzkovateľa</h3>
                        <p className={styles.text}>
                            Za ochranu osobných údajov je zodpovedná spoločnosť:<br /><br />
                            <strong>Starbo Media s.r.o.</strong><br />
                            Dlhá nad Váhom 446<br />
                            927 05 Dlhá nad Váhom<br />
                            IČO: 52 324 591<br />
                            DIČ: 2120971655<br />
                            IČ DPH: SK2120971655<br />
                            Zapísaný v obchodnom registri OS Trnava, vložka 44137/T<br />
                            (ďalej len „Prevádzkovateľ“), ktorá je prevádzkovateľom webstránky www.starbomedia.sk
                        </p>

                        <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', marginTop: '1.5rem' }}>Kontaktné údaje zodpovednej osoby Prevádzkovateľa</h3>
                        <p className={styles.text}>
                            E-mail: marketing@starbomedia.sk<br />
                            Adresa: Orechová 26, 92701 Šaľa.
                        </p>

                        <h2 style={{ fontSize: '1.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>2. Za akým účelom, aké osobné údaje spracúvame a na akom právnom základe a ako dlho?</h2>
                        <p className={styles.text}>
                            Vaše osobné údaje v pozícii Prevádzkovateľa spracúvame na rôzne účely, na základe rôzneho právneho základu a po rôznu dobu. Poskytnutie bežných osobných údajov (napr. meno, fakturačné a kontaktné údaje) je v niektorých prípadoch potrebné na uzavretie a plnenie zmluvy o poskytovaní marketingových služieb. Bez týchto údajov s Vami nevieme uzatvoriť zmluvný vzťah ani poskytnúť dohodnuté služby. Poskytnutie údajov nad rámec zmluvných alebo zákonných povinností je dobrovoľné.
                        </p>

                        <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '12px', marginTop: '2rem' }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>ÚDAJE OBCHODNÝCH PARTNEROV</h3>
                            <p className={styles.text} style={{ fontSize: '0.95rem' }}>
                                <strong>Účel:</strong> obchodná spolupráca s obchodnými partnermi Prevádzkovateľa, Vaše údaje potrebujeme k uzavretiu a plneniu zmluvy, realizácii obchodnej spolupráce, spracovaniu platby, zodpovedaniu Vašich otázok, prípadne výkonu ostatných súvisiacich činností.<br />
                                <strong>Údaje:</strong> bežné osobné údaje, t.j. meno, priezvisko, telefónne číslo, e-mail a platobné údaje.<br />
                                <strong>Právny základ:</strong> predzmluvný a zmluvný vzťah (čl. 6 ods. 1 písm. b) GDPR).<br />
                                <strong>Doba spracúvania:</strong> 10 rokov po ukončení zmluvného vzťahu.
                            </p>
                        </div>

                        <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '12px', marginTop: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>ÚDAJE KLIENTOV</h3>
                            <p className={styles.text} style={{ fontSize: '0.95rem' }}>
                                <strong>Účel:</strong> poskytovanie marketingových služieb klientom agentúry (správa reklamných kampaní, SEO, tvorba obsahu a súvisiace služby).<br />
                                <strong>Údaje:</strong> bežné osobné údaje, t.j. meno, priezvisko, fakturačné údaje, telefónne číslo a e-mail.<br />
                                <strong>Právny základ:</strong> predzmluvný a zmluvný vzťah (čl. 6 ods. 1 písm. b) GDPR).<br />
                                <strong>Doba spracúvania:</strong> 10 rokov po ukončení zmluvného vzťahu.
                            </p>
                        </div>

                        <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '12px', marginTop: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>PRIAMY MARKETING</h3>
                            <p className={styles.text} style={{ fontSize: '0.95rem' }}>
                                <strong>Účel:</strong> propagácia služieb agentúry a webu www.starbomedia.sk (napr. newsletter a ponuky).<br />
                                <strong>Údaje:</strong> bežné osobné údaje, t.j. meno, priezvisko, adresu, telefónne číslo, e-mail.<br />
                                <strong>Právny základ:</strong> oprávnený záujem (čl. 6 ods. 1 písm. f) GDPR).<br />
                                <strong>Doba spracúvania:</strong> 10 rokov po ukončení zmluvného vzťahu.<br />
                                <em>Poučenie: Každý klient môže voči priamemu marketingu namietať.</em>
                            </p>
                        </div>

                        <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '12px', marginTop: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>ÚDAJE Z KONTAKTNÉHO FORMULÁRA</h3>
                            <p className={styles.text} style={{ fontSize: '0.95rem' }}>
                                <strong>Účel:</strong> spracovanie a zodpovedanie dopytu zaslaného cez kontaktný formulár na webe.<br />
                                <strong>Údaje:</strong> meno, e-mail a obsah správy.<br />
                                <strong>Právny základ:</strong> predzmluvné vzťahy, resp. oprávnený záujem (čl. 6 ods. 1 písm. b) a f) GDPR).<br />
                                <strong>Doba spracúvania:</strong> najviac 1 rok od poslednej komunikácie, ak nevznikne zmluvný vzťah.
                            </p>
                        </div>

                        <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '12px', marginTop: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>COOKIES</h3>
                            <p className={styles.text} style={{ fontSize: '0.95rem' }}>
                                <strong>Účel:</strong> sledovanie a vyhodnocovanie správania návštevníka.<br />
                                <strong>Právny základ:</strong> súhlas (čl. 6 ods. 1 písm. a) GDPR) a nastavenie prehliadača.<br />
                                <strong>Doba spracúvania:</strong> 1 rok po zrušení registrácie / podľa expirácie cookies.
                            </p>
                        </div>

                        <h3 style={{ fontSize: '1.3rem', marginTop: '2rem', marginBottom: '1rem' }}>Neštrukturované dáta</h3>
                        <p className={styles.text}>
                            Spracúvame aj bežné údaje v podobe neštruktúrovaných dát umiestnených v e-mailovej schránke a v technických zariadeniach. Doba spracovania je 1 rok.
                        </p>

                        <h2 style={{ fontSize: '1.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>3. Viac informácií o využívaní Cookies</h2>
                        <p className={styles.text}>
                            Súbory cookies sú malé textové súbory, ktoré môžu byť do internetového prehliadača odosielané pri návšteve webových stránok a ukladané do Vášho zariadenia. Cookies obvykle obsahujú názov webovej stránky, z ktorej pochádzajú, ich platnosť a hodnotu.
                        </p>

                        <h3 style={{ fontSize: '1.3rem', marginTop: '1.5rem', marginBottom: '1rem' }}>Prečo používame cookies?</h3>
                        <p className={styles.text}>
                            Cookies nám umožňujú pamätať si vaše preferencie a úkony. Používame ich s cieľom optimálne vytvárať a neustále skvalitňovať naše služby.
                        </p>

                        <ul style={{ listStyle: 'disc', paddingLeft: '2rem', margin: '1rem 0' }} className={styles.text}>
                            <li><strong>Základné:</strong> Umožňujú používanie základných funkcií (napr. prihlásenie). Ak ich zakážete, nemôžeme garantovať plnú funkčnosť.</li>
                            <li><strong>Prevádzkové:</strong> Slúžia na analýzu správania návštevníka a zlepšovanie funkčnosti a vzhľadu.</li>
                            <li><strong>Reklamné:</strong> Slúžia na optimalizáciu reklamy a remarketing. Tento druh cookies môžete kedykoľvek zablokovať.</li>
                            <li><strong>Cookies tretích strán:</strong> Google Analytics, Google Ads, Facebook, Instagram.</li>
                        </ul>

                        <div style={{ overflowX: 'auto', marginTop: '2rem' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                                <thead>
                                    <tr style={{ background: '#f1f5f9' }}>
                                        <th style={{ padding: '1rem', textAlign: 'left', border: '1px solid #e2e8f0' }}>Názov</th>
                                        <th style={{ padding: '1rem', textAlign: 'left', border: '1px solid #e2e8f0' }}>Účel</th>
                                        <th style={{ padding: '1rem', textAlign: 'left', border: '1px solid #e2e8f0' }}>Max. doba</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style={{ padding: '1rem', border: '1px solid #e2e8f0' }}>Google Analytics</td>
                                        <td style={{ padding: '1rem', border: '1px solid #e2e8f0' }}>Štatistiky návštevnosti</td>
                                        <td style={{ padding: '1rem', border: '1px solid #e2e8f0' }}>podľa nastavenia</td>
                                    </tr>
                                    <tr style={{ background: '#f8fafc' }}>
                                        <td style={{ padding: '1rem', border: '1px solid #e2e8f0' }}>Google Ads</td>
                                        <td style={{ padding: '1rem', border: '1px solid #e2e8f0' }}>Remarketing (retargeting)</td>
                                        <td style={{ padding: '1rem', border: '1px solid #e2e8f0' }}>540 dní</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '1rem', border: '1px solid #e2e8f0' }}>Facebook Pixel</td>
                                        <td style={{ padding: '1rem', border: '1px solid #e2e8f0' }}>Remarketing (retargeting)</td>
                                        <td style={{ padding: '1rem', border: '1px solid #e2e8f0' }}>180 dní</td>
                                    </tr>
                                    <tr style={{ background: '#f8fafc' }}>
                                        <td style={{ padding: '1rem', border: '1px solid #e2e8f0' }}>Instagram</td>
                                        <td style={{ padding: '1rem', border: '1px solid #e2e8f0' }}>Remarketing (retargeting)</td>
                                        <td style={{ padding: '1rem', border: '1px solid #e2e8f0' }}>180 dní</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 style={{ fontSize: '1.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>4. Kto ďalší spracúva Vaše údaje?</h2>
                        <p className={styles.text}>
                            Ak je to nevyhnutné na plnenie zmluvy, Vaše údaje poskytujeme aj tretím stranám:
                        </p>
                        <ul style={{ listStyle: 'disc', paddingLeft: '2rem', margin: '1rem 0' }} className={styles.text}>
                            <li>Poskytovateľom hostingu, e-mailových a IT služieb</li>
                            <li>Odborným externým konzultantom (IT, právo, účtovníctvo)</li>
                            <li>Účtovníckej spoločnosti (fakturácia)</li>
                            <li>Marketingovým a analytickým platformám (Google, Meta...)</li>
                        </ul>

                        <h2 style={{ fontSize: '1.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>5. Vaše práva</h2>
                        <p className={styles.text}>
                            Ako dotknutá osoba máte v zmysle GDPR nasledujúce práva:
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem', display: 'grid', gap: '1rem' }} className={styles.text}>
                            <li style={{ padding: '1rem', background: '#f8fafc', borderRadius: '8px' }}><strong>a) Právo na opravu:</strong> Opravíme nesprávne údaje bez zbytočného odkladu.</li>
                            <li style={{ padding: '1rem', background: '#f8fafc', borderRadius: '8px' }}><strong>b) Právo na výmaz:</strong> ("Právo na zabudnutie"), ak už údaje nie sú potrebné alebo ak odvoláte súhlas.</li>
                            <li style={{ padding: '1rem', background: '#f8fafc', borderRadius: '8px' }}><strong>c) Právo na prenosnosť:</strong> Získanie údajov v štruktúrovanom formáte.</li>
                            <li style={{ padding: '1rem', background: '#f8fafc', borderRadius: '8px' }}><strong>d) Právo namietať:</strong> Voči priamemu marketingu môžete kedykoľvek namietať.</li>
                            <li style={{ padding: '1rem', background: '#f8fafc', borderRadius: '8px' }}><strong>e) Odvolanie súhlasu:</strong> Kedykoľvek bez udania dôvodu.</li>
                            <li style={{ padding: '1rem', background: '#f8fafc', borderRadius: '8px' }}><strong>f) Právo na prístup:</strong> Máte právo vedieť, či a aké údaje o vás spracúvame.</li>
                        </ul>

                        <h2 style={{ fontSize: '1.8rem', marginTop: '3rem', marginBottom: '1.5rem' }}>6. Kontakt</h2>
                        <p className={styles.text}>
                            V prípade akýchkoľvek otázok ohľadom ochrany osobných údajov nás kontaktujte na: <strong>marketing@starbomedia.sk</strong>
                        </p>
                        <p className={styles.text} style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#64748b' }}>
                            Verzia platná a účinná od: 01.06.2026
                        </p>

                    </div>
                </section>
            </div>
        </>
    );
}

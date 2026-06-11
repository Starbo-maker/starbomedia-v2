import type { GlossaryTerm } from './index';

// Metriky a KPI — pojmy s vlastnou stránkou majú reálnu hľadanosť na SK trhu
// (DataForSEO, jún 2026: roas 590, cpm 480, cpa 390, ctr 320, konverzia 320, cpc 260, pno 170/mes.).

export const metrikyTerms: GlossaryTerm[] = [
    {
        slug: 'ctr',
        term: 'CTR',
        fullName: 'Click-Through Rate (miera prekliku)',
        category: 'metriky',
        short: 'Miera prekliku — percento ľudí, ktorí po zobrazení reklamy alebo odkazu naň aj klikli. Počíta sa ako počet kliknutí vydelený počtom zobrazení × 100.',
        page: {
            quick: 'CTR (Click-Through Rate, miera prekliku) je percento ľudí, ktorí po zobrazení reklamy, odkazu alebo výsledku vyhľadávania naň aj klikli. Vypočíta sa ako počet kliknutí vydelený počtom zobrazení, vynásobený stomi. CTR ukazuje, ako dobre kreatíva a text oslovujú publikum, ktorému sa zobrazujú.',
            formula: 'CTR = (počet kliknutí ÷ počet zobrazení) × 100 %',
            sections: [
                {
                    heading: 'Príklad výpočtu',
                    paragraphs: [
                        'Reklama sa zobrazila 10 000-krát a kliklo na ňu 350 ľudí. CTR = 350 ÷ 10 000 × 100 = 3,5 %.',
                        'CTR sa meria všade, kde existuje zobrazenie a kliknutie: v Google Ads, Meta Ads, e-mailoch aj v organických výsledkoch vyhľadávania (tam ho nájdete v Google Search Console).',
                    ],
                },
                {
                    heading: 'Aký CTR je dobrý?',
                    paragraphs: [
                        'Univerzálna „správna" hodnota neexistuje — CTR sa zásadne líši podľa platformy, formátu a odvetvia. Orientačne: reklamy vo vyhľadávaní mávajú CTR v jednotkách percent, bannerové (display) reklamy často hlboko pod 1 %. Brandové kampane na vlastnú značku mávajú CTR výrazne vyšší než akvizičné kampane na všeobecné výrazy.',
                        'Dôležitejší než absolútna hodnota je trend a porovnanie v rámci vlastného účtu: ak CTR klesá, kreatíva sa môže opozerať (ad fatigue) alebo cielite na príliš široké publikum. Vysoký CTR pri nízkom konverznom pomere zas signalizuje, že reklama síce láka, ale stránka nedoručuje, čo reklama sľúbila.',
                        'V Google Ads je CTR aj zložkou skóre kvality — vyšší očakávaný CTR znižuje cenu za kliknutie.',
                    ],
                },
            ],
        },
        related: ['cpc', 'impresie', 'konverzny-pomer', 'skore-kvality'],
        links: [
            { label: 'Google reklama (PPC) — naša služba', href: '/google-reklama' },
        ],
    },
    {
        slug: 'cpc',
        term: 'CPC',
        fullName: 'Cost Per Click (cena za kliknutie)',
        category: 'metriky',
        short: 'Cena za kliknutie — suma, ktorú inzerent zaplatí za jedno kliknutie na reklamu. Základný platobný model PPC reklamy.',
        page: {
            quick: 'CPC (Cost Per Click) je cena, ktorú inzerent zaplatí za jedno kliknutie na svoju reklamu. Je to základný platobný model PPC systémov ako Google Ads či Sklik. Vypočíta sa ako celkové náklady na reklamu vydelené počtom kliknutí.',
            formula: 'CPC = celkové náklady ÷ počet kliknutí',
            sections: [
                {
                    heading: 'Príklad výpočtu',
                    paragraphs: [
                        'Kampaň minula 200 € a priniesla 500 kliknutí. Priemerný CPC = 200 ÷ 500 = 0,40 €.',
                        'Skutočná cena za kliknutie vzniká v aukcii — neplatíte svoju maximálnu ponuku, ale spravidla len toľko, koľko je potrebné na prekonanie inzerenta pod vami. Výšku CPC ovplyvňuje konkurencia na kľúčové slovo, kvalita reklamy (skóre kvality) a cielenie.',
                    ],
                },
                {
                    heading: 'Ako s CPC pracovať',
                    paragraphs: [
                        'Nízky CPC nie je cieľ sám osebe. Lacné kliknutia z nerelevantného publika sú drahšie než drahé kliknutia, ktoré konvertujú. CPC preto vždy vyhodnocujte spolu s konverzným pomerom a metrikami ako CPA, ROAS či PNO.',
                        'CPC sa výrazne líši podľa odvetvia — konkurenčné segmenty ako poistenie či právne služby mávajú násobne vyššie ceny za kliknutie než e-commerce s dlhým chvostom produktových vyhľadávaní.',
                    ],
                },
            ],
        },
        related: ['ppc', 'ctr', 'cpa', 'skore-kvality'],
        links: [
            { label: 'Google reklama — naša služba', href: '/google-reklama' },
        ],
    },
    {
        slug: 'cpm',
        term: 'CPM',
        fullName: 'Cost Per Mille (cena za tisíc zobrazení)',
        category: 'metriky',
        short: 'Cena za tisíc zobrazení reklamy. Platobný model typický pre kampane na budovanie povedomia, display a sociálne siete.',
        page: {
            quick: 'CPM (Cost Per Mille) je cena za tisíc zobrazení reklamy. Je to štandardný nákupný model pre kampane zamerané na zásah a povedomie o značke — typicky na sociálnych sieťach, v display a video reklame, kde sa neplatí za kliknutie, ale za zobrazenie.',
            formula: 'CPM = (celkové náklady ÷ počet zobrazení) × 1 000',
            sections: [
                {
                    heading: 'Príklad výpočtu',
                    paragraphs: [
                        'Kampaň minula 150 € a reklama sa zobrazila 60 000-krát. CPM = 150 ÷ 60 000 × 1 000 = 2,50 €.',
                        'Na Meta (Facebook a Instagram) sa cez CPM v skutočnosti nakupujú takmer všetky kampane bez ohľadu na optimalizačný cieľ — systém účtuje za zobrazenia a CPM tak priamo ukazuje, aká drahá je aukcia pre vaše publikum.',
                    ],
                },
                {
                    heading: 'Čo CPM ovplyvňuje',
                    paragraphs: [
                        'Výšku CPM určuje konkurencia v aukcii o dané publikum, kvalita a relevancia kreatívy, obdobie (pred Vianocami CPM rastú naprieč trhom) aj umiestnenie reklamy. Úzke publiká bývajú drahšie než široké.',
                        'CPM je nákladová metrika, nie výkonnostná — hovorí, koľko stojí pozornosť, nie čo priniesla. Vyhodnocujte ju spolu s frekvenciou, CTR a konverznými metrikami.',
                    ],
                },
            ],
        },
        related: ['impresie', 'frekvencia', 'dosah', 'cpc'],
        links: [
            { label: 'Facebook reklama — naša služba', href: '/facebook-reklama' },
        ],
    },
    {
        slug: 'cpa',
        term: 'CPA',
        fullName: 'Cost Per Action / Acquisition (cena za akvizíciu)',
        category: 'metriky',
        short: 'Cena za konverziu — koľko v priemere stojí jedna želaná akcia (nákup, objednávka, registrácia). Náklady vydelené počtom konverzií.',
        page: {
            quick: 'CPA (Cost Per Action, cena za akvizíciu) vyjadruje, koľko v priemere zaplatíte za jednu konverziu — nákup, objednávku, registráciu či iný cieľ. Vypočíta sa ako celkové náklady na reklamu vydelené počtom konverzií a patrí medzi najdôležitejšie výkonnostné metriky.',
            formula: 'CPA = celkové náklady ÷ počet konverzií',
            sections: [
                {
                    heading: 'Príklad výpočtu',
                    paragraphs: [
                        'Kampaň minula 600 € a priniesla 30 objednávok. CPA = 600 ÷ 30 = 20 € za objednávku.',
                        'V Google Ads aj Meta Ads možno na CPA priamo optimalizovať — stratégia cieľové CPA (tCPA) necháva systém automaticky upravovať ponuky tak, aby sa priemerná cena za konverziu držala pri zadanej hodnote.',
                    ],
                },
                {
                    heading: 'Ako určiť únosné CPA',
                    paragraphs: [
                        'Maximálne únosné CPA vychádza z marže a hodnoty zákazníka: ak na objednávke zarobíte v priemere 35 € hrubej marže, CPA 20 € je ziskové, CPA 40 € nie — pokiaľ sa zákazník nevracia. Pri opakovaných nákupoch dáva zmysel počítať s celoživotnou hodnotou zákazníka (LTV), nie len s prvou objednávkou.',
                        'Pre e-shopy s rôznorodým sortimentom býva praktickejšie riadiť kampane cez ROAS alebo PNO, ktoré zohľadňujú hodnotu objednávok, nie len ich počet.',
                    ],
                },
            ],
        },
        related: ['konverzia', 'roas', 'pno', 'ltv', 'cpl'],
        links: [
            { label: 'Google reklama — naša služba', href: '/google-reklama' },
        ],
    },
    {
        slug: 'cpl',
        term: 'CPL',
        fullName: 'Cost Per Lead (cena za lead)',
        category: 'metriky',
        short: 'Cena za získanie jedného kontaktu (leadu) — dopytu, registrácie či vyplneného formulára. Kľúčová metrika pre služby a B2B.',
        page: {
            quick: 'CPL (Cost Per Lead) je cena za získanie jedného leadu — kontaktu na potenciálneho zákazníka, typicky cez vyplnený formulár, dopyt alebo registráciu. Je to hlavná výkonnostná metrika pre firmy poskytujúce služby a B2B, kde sa obchod neuzatvára priamo na webe.',
            formula: 'CPL = celkové náklady ÷ počet leadov',
            sections: [
                {
                    heading: 'Príklad výpočtu',
                    paragraphs: [
                        'Kampaň minula 400 € a priniesla 25 vyplnených dopytových formulárov. CPL = 400 ÷ 25 = 16 € za lead.',
                    ],
                },
                {
                    heading: 'Na čo si dať pozor',
                    paragraphs: [
                        'Lacný lead nemusí byť dobrý lead. Pri optimalizácii na CPL vždy sledujte aj kvalitu — koľko leadov obchod reálne uzavrie. Ak kampaň A prináša leady po 10 € s 5 % úspešnosťou uzavretia a kampaň B po 25 € s 30 % úspešnosťou, lacnejšia kampaň je v skutočnosti drahšia.',
                        'Preto odporúčame prepájať reklamné systémy s CRM a vyhodnocovať cenu za získaného zákazníka (CAC), nie len cenu za kontakt.',
                    ],
                },
            ],
        },
        related: ['cpa', 'cac', 'konverzia', 'lead-ads'],
        links: [
            { label: 'Reklama na internete — naša služba', href: '/reklama-na-internete' },
        ],
    },
    {
        slug: 'cpv',
        term: 'CPV',
        fullName: 'Cost Per View (cena za videnie)',
        category: 'metriky',
        short: 'Cena za jedno videnie videoreklamy. Na YouTube sa videnie započíta po 30 sekundách sledovania (alebo po dopozeraní kratšieho videa), prípadne po interakcii.',
        page: {
            quick: 'CPV (Cost Per View) je cena za jedno započítané videnie videoreklamy. Na YouTube sa videnie ráta, keď divák pozerá aspoň 30 sekúnd, dopozerá kratšie video alebo s reklamou interaguje. Platíte teda len za ľudí, ktorí reklame venovali skutočnú pozornosť.',
            formula: 'CPV = celkové náklady ÷ počet započítaných videní',
            sections: [
                {
                    heading: 'Príklad výpočtu',
                    paragraphs: [
                        'Videokampaň minula 90 € a získala 4 500 započítaných videní. CPV = 90 ÷ 4 500 = 0,02 €.',
                        'Preskočiteľné in-stream reklamy na YouTube fungujú práve na CPV modeli — ak divák reklamu preskočí pred 30. sekundou, neplatíte nič. Bumper reklamy (6 sekúnd, nepreskočiteľné) sa naopak nakupujú cez CPM.',
                    ],
                },
                {
                    heading: 'Ako CPV vyhodnocovať',
                    paragraphs: [
                        'CPV porovnávajte spolu s mierou pozretia (view rate) — percentom ľudí, ktorí reklamu nepreskočili. Nízky CPV so slabou mierou pozretia môže znamenať, že systém nachádza lacné, ale nezaujaté publikum.',
                        'Pri videokampaniach s výkonnostným cieľom sledujte aj konverzie a asistencie — video často funguje ako prvý kontakt so značkou, ktorý sa prejaví v neskorších vyhľadávaniach.',
                    ],
                },
            ],
        },
        related: ['cpm', 'youtube-reklama', 'bumper-reklama', 'in-stream-reklama'],
        links: [
            { label: 'YouTube reklama — naša služba', href: '/youtube-reklama' },
        ],
    },
    {
        slug: 'roas',
        term: 'ROAS',
        fullName: 'Return on Ad Spend (návratnosť reklamných výdavkov)',
        category: 'metriky',
        short: 'Návratnosť reklamných výdavkov — koľko eur tržieb prinieslo jedno euro investované do reklamy. ROAS 500 % znamená 5 € tržieb na 1 € nákladov.',
        page: {
            quick: 'ROAS (Return on Ad Spend) vyjadruje, koľko tržieb prinieslo každé euro investované do reklamy. Vypočíta sa ako tržby z reklamy vydelené nákladmi na reklamu. ROAS 500 % (alebo 5 : 1) znamená, že 1 € vložené do reklamy prinieslo 5 € tržieb.',
            formula: 'ROAS = (tržby z reklamy ÷ náklady na reklamu) × 100 %',
            sections: [
                {
                    heading: 'Príklad výpočtu',
                    paragraphs: [
                        'Kampaň minula 1 000 € a priniesla objednávky za 6 000 €. ROAS = 6 000 ÷ 1 000 × 100 = 600 %.',
                        'ROAS je prevrátená hodnota PNO (podielu nákladov na obrate): ROAS 600 % zodpovedá PNO 16,7 %. Na Slovensku a v Česku sa v e-commerce historicky pracuje skôr s PNO, globálne nástroje používajú ROAS — je užitočné vedieť plynule prepínať medzi oboma.',
                    ],
                },
                {
                    heading: 'Aký ROAS je dostatočný?',
                    paragraphs: [
                        'Závisí od marže. E-shop s 20 % maržou potrebuje na pokrytie nákladov na reklamu ROAS aspoň 500 %, pri 50 % marži stačí 200 %. Cieľový ROAS preto nikdy nepreberajte od iných — vypočítajte si ho z vlastnej ekonomiky.',
                        'ROAS má aj slabinu: počíta s tržbami, nie so ziskom. Kampaň môže mať krásny ROAS a pritom predávať prevažne nízkomaržové produkty. Preto sa čoraz častejšie dopĺňa metrikou POAS (Profit on Ad Spend), ktorá meria zisk namiesto tržieb — podrobne sme ju rozobrali v článku nižšie.',
                    ],
                },
            ],
        },
        related: ['pno', 'poas', 'roi', 'cpa'],
        links: [
            { label: 'Prečo ROAS nestačí — POAS vám odhalí skutočný zisk', href: '/preco-roas-nestaci-poas-vam-odhali-skutocny-zisk-z-reklamy' },
            { label: 'Google reklama — naša služba', href: '/google-reklama' },
        ],
    },
    {
        slug: 'roi',
        term: 'ROI',
        fullName: 'Return on Investment (návratnosť investície)',
        category: 'metriky',
        short: 'Návratnosť investície — pomer čistého zisku k vynaloženým nákladom. Na rozdiel od ROAS počíta so ziskom, nie s tržbami.',
        page: {
            quick: 'ROI (Return on Investment) je návratnosť investície — pomer čistého zisku k vynaloženým nákladom, vyjadrený v percentách. ROI 100 % znamená, že investícia sa vrátila dvojnásobne: zarobili ste toľko, koľko ste vložili. V marketingu sa ROI často zamieňa s ROAS, počítajú však niečo iné.',
            formula: 'ROI = ((zisk − náklady) ÷ náklady) × 100 %',
            sections: [
                {
                    heading: 'Príklad výpočtu',
                    paragraphs: [
                        'Do kampane ste vložili 1 000 €. Objednávky z nej priniesli hrubú maržu 1 800 €. ROI = (1 800 − 1 000) ÷ 1 000 × 100 = 80 %.',
                    ],
                },
                {
                    heading: 'ROI vs. ROAS — v čom je rozdiel',
                    paragraphs: [
                        'ROAS porovnáva tržby s nákladmi na reklamu, ROI porovnáva zisk so všetkými nákladmi. Kampaň s ROAS 300 % môže byť pri nízkej marži stratová — ROI to odhalí, ROAS nie.',
                        'V praxi sa ROAS používa na operatívne riadenie kampaní (je okamžite dostupný v reklamných systémoch), zatiaľ čo ROI na biznisové vyhodnotenie, či sa marketing ako celok oplatí. Medzikrokom je POAS, ktorý do reklamných dát vnáša maržu.',
                    ],
                },
            ],
        },
        related: ['roas', 'poas', 'pno', 'ltv'],
        links: [
            { label: 'Prečo ROAS nestačí — POAS vám odhalí skutočný zisk', href: '/preco-roas-nestaci-poas-vam-odhali-skutocny-zisk-z-reklamy' },
        ],
    },
    {
        slug: 'pno',
        term: 'PNO',
        fullName: 'Podiel nákladov na obrate',
        category: 'metriky',
        short: 'Podiel nákladov na obrate — percento tržieb, ktoré pohltili náklady na reklamu. PNO 10 % znamená, že z každých 100 € tržieb išlo 10 € na reklamu. Obrátená hodnota ROAS.',
        page: {
            quick: 'PNO (podiel nákladov na obrate) vyjadruje, aké percento tržieb pohltili náklady na reklamu. PNO 10 % znamená, že na 100 € tržieb ste do reklamy investovali 10 €. Je to metrika typická pre slovenský a český e-commerce — matematicky ide o prevrátenú hodnotu ROAS.',
            formula: 'PNO = (náklady na reklamu ÷ tržby z reklamy) × 100 %',
            sections: [
                {
                    heading: 'Príklad výpočtu',
                    paragraphs: [
                        'Kampane minuli 800 € a priniesli tržby 10 000 €. PNO = 800 ÷ 10 000 × 100 = 8 %.',
                        'Prepočet na ROAS: ROAS = 100 ÷ PNO × 100 %. Čiže PNO 8 % = ROAS 1 250 %, PNO 25 % = ROAS 400 %. Globálne nástroje (Google Ads, Meta) pracujú s ROAS, slovenské a české e-shopy aj porovnávače historicky s PNO.',
                    ],
                },
                {
                    heading: 'Ako si nastaviť cieľové PNO',
                    paragraphs: [
                        'Únosné PNO určuje marža: pri 30 % hrubej marži je PNO 30 % bod nuly — všetko nad ním je strata, pokiaľ nerátate s opakovanými nákupmi. Zdravé cieľové PNO preto býva výrazne pod úrovňou marže, aby ostal priestor na ostatné náklady a zisk.',
                        'Jedno cieľové PNO pre celý e-shop môže škodiť: brandové kampane mávajú prirodzene nízke PNO a akvizičné vyššie. Ak všetko zrežete na priemer, akvizíciu nových zákazníkov zastavíte. Odporúčame segmentovať ciele podľa úlohy kampane a marže kategórií.',
                    ],
                },
            ],
        },
        related: ['roas', 'poas', 'cpa', 'aov'],
        links: [
            { label: 'Prečo ROAS nestačí — POAS vám odhalí skutočný zisk', href: '/preco-roas-nestaci-poas-vam-odhali-skutocny-zisk-z-reklamy' },
            { label: 'Cenové porovnávače — naša služba', href: '/cenove-porovnavace' },
        ],
    },
    {
        slug: 'konverzia',
        term: 'Konverzia',
        category: 'metriky',
        short: 'Splnenie cieľa, ktorý od návštevníka očakávate — nákup, odoslanie formulára, registrácia či telefonát. Základná jednotka merania výkonu.',
        page: {
            quick: 'Konverzia je moment, keď návštevník vykoná akciu, ktorú od neho očakávate — dokončí nákup, odošle formulár, zaregistruje sa alebo zavolá. Je to základná jednotka merania výkonu webu a reklamy: kampane sa optimalizujú na konverzie a ich cenu, nie na kliknutia.',
            sections: [
                {
                    heading: 'Makro a mikro konverzie',
                    paragraphs: [
                        'Makrokonverzia je hlavný biznisový cieľ — objednávka v e-shope, odoslaný dopyt pri službách. Mikrokonverzie sú medzikroky na ceste k nej: pridanie do košíka, prihlásenie na newsletter, zobrazenie kontaktnej stránky.',
                        'Mikrokonverzie pomáhajú dvojako: ukazujú, kde sa zákazníci na ceste strácajú, a pri menších weboch dodávajú reklamným systémom dáta na učenie tam, kde makrokonverzií je primálo.',
                    ],
                },
                {
                    heading: 'Konverzný pomer a meranie',
                    paragraphs: [
                        'Konverzný pomer = konverzie ÷ návštevy × 100 %. V e-commerce sa bežne pohybuje v nižších jednotkách percent a výrazne sa líši podľa odvetvia, zdroja návštevnosti a zariadenia — mobil máva nižší konverzný pomer než desktop.',
                        'Presné meranie konverzií je základ všetkého ostatného: bez správne nastaveného merania (GA4, konverzné kódy, prípadne server-side tracking) optimalizujete kampane naslepo. Skôr než začnete riešiť výšku PNO či CPA, uistite sa, že čísla, na ktoré sa pozeráte, sú pravdivé.',
                    ],
                },
            ],
        },
        related: ['konverzny-pomer', 'cpa', 'google-analytics-4', 'google-tag-manager'],
        links: [
            { label: 'Webová analytika — naša služba', href: '/analyza-webu' },
            { label: 'E-commerce tracking 2026: bullshit vs. realita merania', href: '/ecommerce-tracking-2026-bullshit-vs-realita-merania-e-shopov' },
        ],
    },

    // ——— Hub-only metriky ———
    {
        slug: 'konverzny-pomer',
        term: 'Konverzný pomer',
        fullName: 'Conversion Rate (CR)',
        category: 'metriky',
        short: 'Percento návštevníkov, ktorí vykonali konverziu. Počíta sa ako konverzie ÷ návštevy × 100. E-shopy sa bežne pohybujú v nižších jednotkách percent, hodnota sa líši podľa odvetvia aj zariadenia.',
        related: ['konverzia', 'ab-testovanie'],
    },
    {
        slug: 'impresie',
        term: 'Impresie',
        fullName: 'Impressions (zobrazenia)',
        category: 'metriky',
        short: 'Počet zobrazení reklamy alebo obsahu. Jedna osoba môže vygenerovať viac impresií — na rozdiel od dosahu, ktorý počíta unikátnych ľudí.',
        related: ['dosah', 'frekvencia', 'cpm'],
    },
    {
        slug: 'dosah',
        term: 'Dosah',
        fullName: 'Reach',
        category: 'metriky',
        short: 'Počet unikátnych ľudí, ktorí videli reklamu alebo obsah aspoň raz. Dosah × frekvencia ≈ impresie.',
        related: ['impresie', 'frekvencia'],
    },
    {
        slug: 'frekvencia',
        term: 'Frekvencia',
        fullName: 'Frequency',
        category: 'metriky',
        short: 'Priemerný počet zobrazení reklamy na jedného človeka. Príliš vysoká frekvencia vedie k únave z reklamy (ad fatigue) — publikum kreatívu „opozerá" a výkon klesá.',
        related: ['dosah', 'impresie', 'cpm'],
    },
    {
        slug: 'aov',
        term: 'AOV',
        fullName: 'Average Order Value (priemerná hodnota objednávky)',
        category: 'metriky',
        short: 'Priemerná hodnota objednávky — tržby vydelené počtom objednávok. Vyšší AOV zlepšuje ekonomiku reklamy: tie isté náklady na akvizíciu sa rozpočítajú na väčší nákup.',
        related: ['ltv', 'pno', 'konverzia'],
    },
    {
        slug: 'ltv',
        term: 'LTV',
        fullName: 'Customer Lifetime Value (celoživotná hodnota zákazníka)',
        category: 'metriky',
        short: 'Celková hodnota, ktorú zákazník prinesie počas celého vzťahu s firmou — nie len pri prvom nákupe. Pri opakovaných nákupoch umožňuje akceptovať vyššie náklady na akvizíciu.',
        related: ['cac', 'aov', 'cpa'],
    },
    {
        slug: 'cac',
        term: 'CAC',
        fullName: 'Customer Acquisition Cost (náklady na získanie zákazníka)',
        category: 'metriky',
        short: 'Celkové náklady na získanie jedného nového zákazníka vrátane reklamy, nástrojov a práce. Zdravý biznis potrebuje LTV výrazne vyššie než CAC.',
        related: ['ltv', 'cpa', 'cpl'],
    },
    {
        slug: 'bounce-rate',
        term: 'Bounce rate',
        fullName: 'Miera okamžitých odchodov',
        category: 'metriky',
        short: 'Podiel návštev, ktoré web opustili bez interakcie. V GA4 ju nahradila opačná metrika engagement rate (miera zapojenia) — návšteva sa ráta ako zapojená po 10 sekundách, konverzii alebo druhom zobrazení stránky.',
        related: ['engagement', 'google-analytics-4'],
    },
    {
        slug: 'engagement',
        term: 'Engagement',
        fullName: 'Miera zapojenia',
        category: 'metriky',
        short: 'Interakcie publika s obsahom — reakcie, komentáre, zdieľania, uloženia, kliknutia. Na sociálnych sieťach signalizuje algoritmom, že obsah stojí za distribúciu.',
        related: ['bounce-rate', 'ugc'],
    },
    {
        slug: 'poas',
        term: 'POAS',
        fullName: 'Profit on Ad Spend (zisk z reklamných výdavkov)',
        category: 'metriky',
        short: 'Pomer hrubého zisku (nie tržieb) k nákladom na reklamu. Odhaľuje kampane, ktoré majú pekný ROAS, ale predávajú nízkomaržový sortiment. Podrobne v našom článku o POAS.',
        related: ['roas', 'roi', 'pno'],
        links: [
            { label: 'Prečo ROAS nestačí — POAS vám odhalí skutočný zisk', href: '/preco-roas-nestaci-poas-vam-odhali-skutocny-zisk-z-reklamy' },
        ],
    },
];

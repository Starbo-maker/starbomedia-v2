import type { GlossaryTerm } from './index';

// AI v marketingu, analytika a meranie, obsah a sociálne siete.
// Stránku majú pojmy s reálnou hľadanosťou: umelá inteligencia (33 100 + „čo je ai" 390),
// LLM (1 600), chatbot (1 900), prompt (720), AI agent (480), AEO (140),
// GA4 (5 400 „google analytics"), GTM (1 900 + 720), cookies (6 600), UGC (720), copywriting (720).

export const aiAnalytikaTerms: GlossaryTerm[] = [
    // ——— AI v marketingu ———
    {
        slug: 'umela-inteligencia',
        term: 'Umelá inteligencia (AI)',
        fullName: 'Artificial Intelligence',
        category: 'ai',
        short: 'Systémy, ktoré zvládajú úlohy vyžadujúce „ľudské" schopnosti — porozumenie jazyku, rozpoznávanie obrazu, rozhodovanie. V marketingu poháňa všetko od smart biddingu po generovanie kreatív.',
        page: {
            quick: 'Umelá inteligencia (AI) označuje počítačové systémy, ktoré zvládajú úlohy tradične vyžadujúce ľudskú inteligenciu — porozumenie jazyku, rozpoznávanie obrazu, učenie sa z dát a rozhodovanie. Súčasnú vlnu AI ťahá generatívna AI postavená na veľkých jazykových modeloch, ktorá dokáže tvoriť text, obrázky aj video.',
            sections: [
                {
                    heading: 'AI v marketingu dnes',
                    paragraphs: [
                        'Reklamné systémy stoja na AI už roky: Smart Bidding v Google Ads upravuje ponuky pre každú aukciu, algoritmy Mety rozhodujú, komu sa reklama doručí, Performance Max a Advantage+ automatizujú celé kampane. Inzerent čoraz menej „ladí nastavenia" a čoraz viac dodáva kvalitné dáta, podklady a obchodné ciele.',
                        'Generatívna AI k tomu pridala tvorbu: texty reklám, produktové fotografie, videá, voice-botov či analýzu dát. V našom AI Studiu tieto technológie zapájame do praxe pre klientov — od produktovej fotografie po viacjazyčný dabing videí.',
                    ],
                },
                {
                    heading: 'Na čo si dať pozor',
                    paragraphs: [
                        'AI výstupy vyžadujú ľudskú kontrolu — jazykové modely dokážu „halucinovať", teda sebavedomo tvrdiť nepravdy. Pri faktoch, číslach a právnych náležitostiach je kontrola nevyhnutná.',
                        'AI zároveň mení aj samotné vyhľadávanie (AI Overviews, ChatGPT ako vyhľadávač), čo posúva pravidlá SEO smerom k optimalizácii pre AI odpovede — viac v pojmoch AEO a GEO.',
                    ],
                },
            ],
        },
        related: ['llm', 'generativna-ai', 'ai-agent', 'aeo', 'prompt'],
        links: [
            { label: 'AI Studio — naše AI služby', href: '/ai-studio' },
            { label: 'AI Overviews — kompletný sprievodca', href: '/ai-overviews-kompletny-sprievodca' },
        ],
    },
    {
        slug: 'llm',
        term: 'LLM',
        fullName: 'Large Language Model (veľký jazykový model)',
        category: 'ai',
        short: 'AI model natrénovaný na obrovskom množstve textu, ktorý rozumie jazyku a generuje ho — základ nástrojov ako ChatGPT, Gemini či Claude.',
        page: {
            quick: 'LLM (Large Language Model, veľký jazykový model) je typ umelej inteligencie natrénovaný na obrovských objemoch textu. Dokáže porozumieť jazyku, odpovedať na otázky, písať a upravovať texty či kód. Na LLM stoja nástroje ako ChatGPT, Google Gemini alebo Claude.',
            sections: [
                {
                    heading: 'Ako LLM funguje',
                    paragraphs: [
                        'Model sa pri trénovaní naučí štatistické vzťahy medzi slovami a pri generovaní predpovedá najpravdepodobnejšie pokračovanie textu. Vďaka obrovskému rozsahu tréningu z toho vzniká schopnosť zmysluplne konverzovať, zhŕňať, prekladať či argumentovať.',
                        'Z princípu fungovania vyplýva aj hlavné riziko: model generuje pravdepodobný text, nie overenú pravdu. Halucinácie — vymyslené fakty podané sebavedomým tónom — sú dôvod, prečo výstupy LLM pri faktoch vždy kontrolujeme.',
                    ],
                },
                {
                    heading: 'LLM v marketingu',
                    paragraphs: [
                        'V agentúrnej praxi LLM používame na tvorbu a úpravy textov, analýzu dát a podkladov, prípravu podkladov pre kampane či automatizácie opakovaných úloh. Kľúčom k dobrým výstupom je kvalitný prompt — zadanie s dostatočným kontextom.',
                        'LLM zároveň menia vyhľadávanie: ľudia sa pýtajú ChatGPT či Gemini namiesto Googlu, a značky riešia, ako sa v AI odpovediach objavovať. Tomu sa venuje AEO a GEO optimalizácia.',
                    ],
                },
            ],
        },
        related: ['umela-inteligencia', 'prompt', 'halucinacia-ai', 'chatgpt', 'geo'],
        links: [
            { label: 'AI Studio — naše AI služby', href: '/ai-studio' },
        ],
    },
    {
        slug: 'prompt',
        term: 'Prompt',
        category: 'ai',
        short: 'Zadanie pre AI nástroj — text, ktorým modelu opisujete, čo má urobiť. Kvalita promptu priamo určuje kvalitu výstupu.',
        page: {
            quick: 'Prompt je zadanie pre AI nástroj — text (prípadne obrázok či iný vstup), ktorým modelu opisujete, čo má urobiť. Kvalita promptu priamo určuje kvalitu výstupu: ten istý model dá na vágne zadanie priemernú odpoveď a na premyslené zadanie použiteľný výsledok.',
            sections: [
                {
                    heading: 'Čo obsahuje dobrý prompt',
                    paragraphs: [
                        'Dobrý prompt spravidla obsahuje: rolu alebo kontext („si copywriter e-shopu so športovým oblečením"), konkrétnu úlohu, vstupné informácie a obmedzenia (tón, dĺžka, jazyk) a požadovaný formát výstupu (tabuľka, odrážky, počet variantov). Pri zložitejších úlohách pomáha pridať príklady želaného výstupu.',
                        'Systematickej tvorbe a ladeniu promptov sa hovorí prompt engineering — v praxi ide najmä o iteráciu: výstup skontrolovať, zadanie spresniť, zopakovať.',
                    ],
                },
                {
                    heading: 'Prompty v marketingovej praxi',
                    paragraphs: [
                        'Osvedčené prompty sa oplatí ukladať a zdieľať v tíme ako šablóny — pre produktové popisy, reklamné texty, analýzy dát či prípravu reportov. Z jednorazových pokusov sa tak stáva opakovateľný proces so stabilnou kvalitou.',
                        'Pri promptoch pracujúcich s firemnými dátami myslite na ochranu údajov — citlivé dáta klientov do verejných AI nástrojov nepatria, pokiaľ to nedovoľujú podmienky spracovania.',
                    ],
                },
            ],
        },
        related: ['llm', 'umela-inteligencia', 'halucinacia-ai'],
        links: [
            { label: 'AI Studio — naše AI služby', href: '/ai-studio' },
        ],
    },
    {
        slug: 'ai-agent',
        term: 'AI agent',
        category: 'ai',
        short: 'AI systém, ktorý úlohy nielen komentuje, ale samostatne vykonáva — plánuje kroky, používa nástroje a dotiahne zadanie do výsledku s minimom ľudských zásahov.',
        page: {
            quick: 'AI agent je systém postavený na umelej inteligencii, ktorý zadanú úlohu samostatne dotiahne do výsledku: rozloží si ju na kroky, používa nástroje (vyhľadávanie, tabuľky, e-mail, firemné systémy) a priebežne vyhodnocuje, čo robiť ďalej. Od chatbota sa líši tým, že nielen odpovedá, ale koná.',
            sections: [
                {
                    heading: 'Ako sa AI agent líši od chatbota',
                    paragraphs: [
                        'Chatbot reaguje na správy v konverzácii — odpovie a čaká. Agent dostane cieľ („priprav mesačný report výkonnosti kampaní a pošli ho klientovi") a sám vykoná postupnosť krokov: stiahne dáta, spracuje ich, vytvorí dokument, pripraví e-mail. Človek vstupuje na kontrolných bodoch.',
                        'V praxi sa oba prístupy kombinujú: agentné systémy bežia na pozadí opakovaných procesov, konverzačné rozhranie slúži na zadávanie a kontrolu.',
                    ],
                },
                {
                    heading: 'Využitie v marketingu',
                    paragraphs: [
                        'Typické nasadenia: pravidelné reporty a kontroly kampaní, monitoring anomálií v dátach, príprava podkladov pre kreatívy, spracovanie produktových feedov či prvá línia zákazníckej podpory. Agenti šetria hodiny rutinnej práce, ľudia sa posúvajú ku kontrole a stratégii.',
                        'Pri nasadzovaní agentov platí dvojnásobne: jasne vymedzené právomoci, prístup len k potrebným dátam a ľudská kontrola výstupov, ktoré idú ku klientom či verejnosti.',
                    ],
                },
            ],
        },
        related: ['umela-inteligencia', 'chatbot', 'llm'],
        links: [
            { label: 'AI Studio — naše AI služby', href: '/ai-studio' },
        ],
    },
    {
        slug: 'chatbot',
        term: 'Chatbot',
        category: 'ai',
        short: 'Program, ktorý komunikuje s ľuďmi v prirodzenom jazyku — na webe, v Messengeri či cez hlas. Moderné chatboty poháňajú jazykové modely, staršie fungovali na pevných scenároch.',
        page: {
            quick: 'Chatbot je program, ktorý komunikuje s ľuďmi v prirodzenom jazyku — textom na webe a v aplikáciách, alebo hlasom po telefóne (voice bot). Staršie chatboty fungovali na pevných scenároch a tlačidlách; moderné poháňajú veľké jazykové modely, vďaka čomu rozumejú voľne formulovaným otázkam.',
            sections: [
                {
                    heading: 'Na čo chatboty nasadiť',
                    paragraphs: [
                        'Najčastejšie využitie je zákaznícka podpora: odpovede na opakované otázky (stav objednávky, doprava, reklamácie) dostupné nonstop, s odovzdaním zložitejších prípadov človeku. Ďalej zber a kvalifikácia dopytov, rezervácie termínov, pomoc s výberom produktu či interné firemné asistenty nad vlastnou dokumentáciou.',
                        'Hlasoví AI asistenti (voice boti) zvládajú telefonickú komunikáciu — objednávky, pripomenutia termínov, prvotné vybavenie hovorov. Pre klientov ich staviame v rámci nášho AI Studia.',
                    ],
                },
                {
                    heading: 'Čo rozhoduje o úspechu',
                    paragraphs: [
                        'Dobrý chatbot má jasne vymedzené, čo vie a nevie; pri neistote sa nepúšťa do výmyslov, ale odovzdá konverzáciu človeku. Pri botoch nad firemnými dátami je štandardom prístup RAG — bot odpovedá z vašej dokumentácie, nie z všeobecných znalostí modelu, čím sa výrazne znižuje riziko halucinácií.',
                    ],
                },
            ],
        },
        related: ['ai-agent', 'llm', 'halucinacia-ai'],
        links: [
            { label: 'Voice boti — naša služba v AI Studiu', href: '/ai-studio/voice-boti' },
        ],
    },
    {
        slug: 'aeo',
        term: 'AEO',
        fullName: 'Answer Engine Optimization',
        category: 'ai',
        short: 'Optimalizácia obsahu pre „odpovedacie" systémy — AI Overviews, ChatGPT, Perplexity. Cieľom nie je len pozícia v odkazoch, ale byť zdrojom, ktorý AI odpoveď cituje.',
        page: {
            quick: 'AEO (Answer Engine Optimization) je optimalizácia obsahu pre systémy, ktoré namiesto zoznamu odkazov rovno odpovedajú — AI Overviews v Googli, ChatGPT, Perplexity či hlasoví asistenti. Cieľom je, aby tieto systémy váš obsah pochopili, dôverovali mu a citovali ho ako zdroj odpovede.',
            sections: [
                {
                    heading: 'Ako sa AEO líši od klasického SEO',
                    paragraphs: [
                        'Klasické SEO optimalizuje na pozície v zozname výsledkov; AEO na prítomnosť v odpovedi. Prakticky to znamená: obsah štruktúrovaný ako jasné otázky a stručné odpovede (40 – 60 slov hneď pod nadpisom), fakty podložené zdrojmi, štruktúrované dáta, konzistentné informácie o firme naprieč webom a budovanie autority značky, ktorú AI systémy rozpoznávajú.',
                        'AEO a SEO sa nevylučujú — stoja na rovnakom základe (kvalitný, dôveryhodný, technicky čistý obsah). Rozdiel je v dôraze na formát odpovedí a citovateľnosť.',
                    ],
                },
                {
                    heading: 'AEO vs. GEO',
                    paragraphs: [
                        'Popri AEO sa používa aj pojem GEO (Generative Engine Optimization) — optimalizácia pre generatívne vyhľadávače. Hranice medzi pojmami sú neostré a v praxi sa prekrývajú; podstatné je, že optimalizácia pre AI odpovede sa stáva samostatnou disciplínou. Rozdielom medzi GEO a SEO sme venovali samostatný článok.',
                    ],
                },
            ],
        },
        related: ['geo', 'ai-overviews', 'seo', 'strukturovane-data', 'featured-snippet'],
        links: [
            { label: 'GEO vs SEO — v čom sa líšia', href: '/geo-vs-seo' },
            { label: 'AI Overviews — kompletný sprievodca', href: '/ai-overviews-kompletny-sprievodca' },
        ],
    },
    {
        slug: 'geo',
        term: 'GEO',
        fullName: 'Generative Engine Optimization',
        category: 'ai',
        short: 'Optimalizácia pre generatívne vyhľadávače (AI Overviews, ChatGPT, Perplexity) — aby AI systémy obsah správne interpretovali a uvádzali ako zdroj. Príbuzné s AEO.',
        related: ['aeo', 'ai-overviews', 'seo'],
        links: [{ label: 'GEO vs SEO — v čom sa líšia', href: '/geo-vs-seo' }],
    },
    {
        slug: 'ai-overviews',
        term: 'AI Overviews',
        category: 'ai',
        short: 'AI prehľady v Google vyhľadávaní — odpoveď zostavená umelou inteligenciou nad klasickými výsledkami, s citáciami zdrojov. Menia rozloženie kliknutí na SERP-e.',
        related: ['serp', 'aeo', 'geo'],
        links: [{ label: 'AI Overviews — kompletný sprievodca', href: '/ai-overviews-kompletny-sprievodca' }],
    },
    {
        slug: 'generativna-ai',
        term: 'Generatívna AI',
        category: 'ai',
        short: 'AI, ktorá tvorí nový obsah — texty, obrázky, video, hudbu či kód. V marketingu sa využíva na kreatívy, produktové fotografie, videá a personalizáciu obsahu.',
        related: ['umela-inteligencia', 'llm'],
        links: [{ label: 'AI Studio — naše AI služby', href: '/ai-studio' }],
    },
    {
        slug: 'chatgpt',
        term: 'ChatGPT',
        category: 'ai',
        short: 'Najznámejší AI chatbot od OpenAI postavený na veľkých jazykových modeloch. Pre marketérov nástroj na texty a analýzy — a zároveň nový „vyhľadávač", v ktorom sa značky chcú objavovať.',
        related: ['llm', 'prompt', 'aeo'],
    },
    {
        slug: 'halucinacia-ai',
        term: 'Halucinácia AI',
        category: 'ai',
        short: 'Jav, keď AI model sebavedomo vygeneruje nepravdivú informáciu — vymyslený fakt, číslo či zdroj. Dôvod, prečo AI výstupy pri faktoch vždy vyžadujú ľudskú kontrolu.',
        related: ['llm', 'prompt'],
    },
    {
        slug: 'strojove-ucenie',
        term: 'Strojové učenie',
        fullName: 'Machine Learning',
        category: 'ai',
        short: 'Odbor AI, v ktorom sa systémy učia z dát namiesto pevného naprogramovania. Poháňa smart bidding, odporúčacie systémy aj doručovanie reklám na sociálnych sieťach.',
        related: ['umela-inteligencia', 'smart-bidding'],
    },

    // ——— Analytika a meranie ———
    {
        slug: 'google-analytics-4',
        term: 'Google Analytics 4 (GA4)',
        category: 'analytika',
        short: 'Bezplatný analytický nástroj Googlu a štandard merania webov. Meria návštevnosť, správanie aj konverzie cez udalosti (events) a prepája sa s Google Ads.',
        page: {
            quick: 'Google Analytics 4 (GA4) je bezplatný analytický nástroj Googlu — aktuálny štandard merania webov a aplikácií. Všetko meria ako udalosti (events): zobrazenia stránok, kliknutia, nákupy. Ukazuje, odkiaľ návštevníci prichádzajú, čo na webe robia a ktoré kanály prinášajú konverzie.',
            sections: [
                {
                    heading: 'Čím sa GA4 líši od starého Analytics',
                    paragraphs: [
                        'GA4 nahradilo Universal Analytics v roku 2023 a zmenilo logiku merania: namiesto návštev (sessions) je základnou jednotkou udalosť a používateľ, meranie funguje naprieč webom aj mobilnou aplikáciou a miera okamžitých odchodov ustúpila miere zapojenia (engagement rate).',
                        'GA4 je stavané pre svet s obmedzenými cookies — chýbajúce dáta dopĺňa modelovaním a kladie dôraz na ochranu súkromia (consent mode). Pre pokročilú prácu ponúka bezplatný export surových dát do BigQuery.',
                    ],
                },
                {
                    heading: 'Na čo si dať pozor',
                    paragraphs: [
                        'GA4 je len také dobré, ako jeho implementácia: bez správne nastavených konverzných udalostí, e-commerce merania a consent modu sa rozhodujete podľa skreslených čísel. Dáta v GA4 sa navyše nikdy presne nezhodnú s reklamnými systémami — každý meria a atribuuje inak, čo nie je chyba, ale vlastnosť.',
                        'Implementáciu aj audit merania robíme v rámci služby webovej analytiky — od nastavenia GTM cez konverzie až po server-side tracking.',
                    ],
                },
            ],
        },
        related: ['google-tag-manager', 'konverzia', 'atribucia', 'cookies'],
        links: [
            { label: 'Webová analytika — naša služba', href: '/analyza-webu' },
            { label: 'E-commerce tracking 2026: bullshit vs. realita merania', href: '/ecommerce-tracking-2026-bullshit-vs-realita-merania-e-shopov' },
        ],
    },
    {
        slug: 'google-tag-manager',
        term: 'Google Tag Manager (GTM)',
        category: 'analytika',
        short: 'Správca meracích kódov — umožňuje nasadzovať a spravovať analytické a marketingové značky (GA4, Google Ads, Meta Pixel) bez zásahov do kódu webu.',
        page: {
            quick: 'Google Tag Manager (GTM) je bezplatný správca značiek: do webu sa raz vloží jeho kontajner a všetky meracie kódy — GA4, konverzné kódy Google Ads, Meta Pixel a ďalšie — sa potom nasadzujú a upravujú cez webové rozhranie GTM, bez zásahov programátora do kódu stránky.',
            sections: [
                {
                    heading: 'Ako GTM funguje',
                    paragraphs: [
                        'GTM pracuje s tromi stavebnými prvkami: značky (tagy) sú kódy, ktoré sa majú spustiť; pravidlá (triggery) určujú kedy — napríklad pri odoslaní formulára či nákupe; premenné dodávajú hodnoty, napríklad sumu objednávky. Zmeny sa testujú v náhľade a publikujú verziami, ku ktorým sa dá vrátiť.',
                        'Dôležité: GTM sám nič nemeria — je to „rozvodná skriňa", ktorá meracie kódy distribuuje. Samotné dáta zbierajú nástroje ako GA4 či Meta Pixel.',
                    ],
                },
                {
                    heading: 'Server-side GTM',
                    paragraphs: [
                        'Popri klasickom (klientskom) GTM existuje serverový variant: značky nebežia v prehliadači návštevníka, ale na vlastnom serveri. Zlepšuje to kvalitu dát (menší vplyv blokovačov), rýchlosť webu aj kontrolu nad tým, aké údaje tretím stranám odchádzajú. Rozdielom medzi server-side taggingom a trackingom sme venovali samostatný článok.',
                    ],
                },
            ],
        },
        related: ['google-analytics-4', 'meta-pixel', 'server-side-tracking', 'konverzia'],
        links: [
            { label: 'Server-side tagging vs server-side tracking', href: '/server-side-tagging-vs-server-side-tracking-aky-je-skutocny-rozdiel' },
            { label: 'Webová analytika — naša služba', href: '/analyza-webu' },
        ],
    },
    {
        slug: 'cookies',
        term: 'Cookies',
        category: 'analytika',
        short: 'Malé súbory, ktoré si web ukladá v prehliadači — pamätajú si prihlásenie či košík a slúžia na meranie a reklamu. Cookies tretích strán prehliadače postupne obmedzujú.',
        page: {
            quick: 'Cookies sú malé textové súbory, ktoré si web ukladá do prehliadača návštevníka. Vďaka nim si stránka pamätá prihlásenie, obsah košíka či jazyk, a marketing ich využíva na meranie návštevnosti a cielenie reklamy. Podľa pôvodu sa delia na cookies prvej strany (first-party) a tretích strán (third-party).',
            sections: [
                {
                    heading: 'First-party vs. third-party cookies',
                    paragraphs: [
                        'First-party cookies ukladá priamo navštívený web — držia prihlásenie, košík, vlastné meranie. Third-party cookies ukladajú cudzie domény (typicky reklamné systémy) a historicky umožňovali sledovať ľudí naprieč webmi. Práve tie prehliadače blokujú: Safari a Firefox roky, Chrome ich obmedzuje a posilňuje ochranu súkromia.',
                        'Marketing sa preto presúva k first-party dátam a serverovému meraniu (Conversions API, server-side tagging) a reklamné systémy chýbajúce dáta dopĺňajú modelovaním.',
                    ],
                },
                {
                    heading: 'Súhlas a legislatíva',
                    paragraphs: [
                        'Na nie nevyhnutné cookies (analytické, marketingové) je v EÚ potrebný súhlas návštevníka — preto cookie lišty. Voľbu návštevníka treba reálne rešpektovať: na to slúži consent management platforma prepojená s meraním cez Google consent mode, ktorý reklamným systémom odovzdáva stav súhlasu.',
                        'Prakticky to znamená: bez správne nastaveného súhlasu prichádzate o dáta aj o právnu istotu. Ako sa s tým vyrovnať v meraní e-shopu, rozoberáme v článku o e-commerce trackingu.',
                    ],
                },
            ],
        },
        related: ['first-party-data', 'consent-mode', 'server-side-tracking', 'google-analytics-4'],
        links: [
            { label: 'E-commerce tracking 2026: bullshit vs. realita merania', href: '/ecommerce-tracking-2026-bullshit-vs-realita-merania-e-shopov' },
            { label: 'Webová analytika — naša služba', href: '/analyza-webu' },
        ],
    },
    {
        slug: 'first-party-data',
        term: 'First-party data',
        category: 'analytika',
        short: 'Dáta, ktoré firma zbiera priamo od svojich zákazníkov a návštevníkov — e-maily, nákupná história, správanie na webe. S útlmom third-party cookies najcennejšia marketingová surovina.',
        related: ['cookies', 'vlastne-publikum'],
    },
    {
        slug: 'consent-mode',
        term: 'Consent mode',
        category: 'analytika',
        short: 'Mechanizmus Googlu, ktorý meracím a reklamným značkám odovzdáva stav súhlasu návštevníka s cookies. Pri odmietnutí umožňuje aspoň modelované meranie konverzií.',
        related: ['cookies', 'google-analytics-4'],
    },
    {
        slug: 'server-side-tracking',
        term: 'Server-side tracking',
        category: 'analytika',
        short: 'Meranie, pri ktorom dáta odchádzajú do analytických a reklamných systémov z vlastného servera namiesto prehliadača. Odolnejšie voči blokovaniu a presnejšie pre optimalizáciu kampaní.',
        related: ['google-tag-manager', 'conversions-api', 'cookies'],
        links: [{ label: 'Server-side tagging vs server-side tracking', href: '/server-side-tagging-vs-server-side-tracking-aky-je-skutocny-rozdiel' }],
    },

    // ——— Obsah a sociálne siete ———
    {
        slug: 'ugc',
        term: 'UGC',
        fullName: 'User-Generated Content (obsah od používateľov)',
        category: 'obsah',
        short: 'Obsah, ktorý vytvárajú zákazníci a tvorcovia, nie značka — recenzie, fotky, videá „z ruky". V reklame patrí k najvýkonnejším formátom, lebo pôsobí autenticky.',
        page: {
            quick: 'UGC (User-Generated Content) je obsah, ktorý vytvárajú používatelia a zákazníci namiesto značky — recenzie, fotografie produktov, videá z rozbaľovania, príspevky na sociálnych sieťach. V reklame sa UGC štýl presadil, pretože pôsobí autenticky a dôveryhodne — ako odporúčanie, nie ako reklama.',
            sections: [
                {
                    heading: 'Prečo UGC v reklamách funguje',
                    paragraphs: [
                        'Ľudia dôverujú ľuďom viac než značkám. Video natočené „z ruky" formou osobného odporúčania zapadá do feedu sociálnych sietí prirodzenejšie než vyleštený spot — divák ho nepreskočí automaticky ako reklamu. Na platformách ako TikTok, Reels či v Shorts je natívny vzhľad obsahu priamo podmienkou výkonu.',
                        'Popri organickom UGC od skutočných zákazníkov sa preto rozvinul aj „creator content" — videá v UGC štýle vytvárané tvorcami na objednávku značky, ktoré sa nasadzujú ako reklamy. Označovanie spolupráce pritom musí zodpovedať pravidlám platforiem a reklamy.',
                    ],
                },
                {
                    heading: 'Ako UGC získavať a využiť',
                    paragraphs: [
                        'Zdroje UGC: vyžiadané recenzie s fotkou po nákupe, súťaže a hashtagy, spolupráce s mikroinfluencermi, brief pre tvorcov. Získaný obsah nasadzujte tam, kde rozhoduje dôvera — do reklám, na produktové stránky k recenziám či do e-mailingu. Na použitie obsahu zákazníkov si vždy vypýtajte súhlas.',
                    ],
                },
            ],
        },
        related: ['kreativa', 'influencer-marketing', 'engagement'],
        links: [
            { label: 'Správa sociálnych sietí a tvorba obsahu — naša služba', href: '/sprava-socialnych-sieti' },
            { label: 'Facebook reklama — naša služba', href: '/facebook-reklama' },
        ],
    },
    {
        slug: 'copywriting',
        term: 'Copywriting',
        category: 'obsah',
        short: 'Písanie textov, ktoré majú predávať alebo viesť k akcii — reklamné texty, landing pages, e-maily, produktové popisy. Dobrý copy hovorí jazykom zákazníka a rieši jeho motiváciu.',
        page: {
            quick: 'Copywriting je písanie textov s obchodným cieľom — majú čitateľa doviesť k akcii: kliknúť, objednať, odoslať dopyt. Patria sem reklamné texty, landing pages, produktové popisy, e-maily aj texty na sociálne siete. Od bežného písania sa líši tým, že úspech sa meria konverziami, nie dojmom.',
            sections: [
                {
                    heading: 'Princípy dobrého copy',
                    paragraphs: [
                        'Dobrý copywriting vychádza zo zákazníka, nie z produktu: pomenúva problém alebo túžbu jeho slovami a ukazuje úžitok namiesto vlastností („batoh, do ktorého zbalíte víkend" namiesto „objem 35 l"). Píše konkrétne, zrozumiteľne a končí jasnou výzvou na akciu.',
                        'V PPC reklame má copy aj technický rozmer: limity znakov, prácu s kľúčovými slovami v texte reklamy a súlad textu s cieľovou stránkou — všetko vplýva na CTR aj cenu za kliknutie.',
                    ],
                },
                {
                    heading: 'Copywriting a AI',
                    paragraphs: [
                        'Jazykové modely dnes zvládnu prvé verzie textov, varianty pre A/B testy či produktové popisy vo veľkom objeme. Rola copywritera sa posúva k stratégii, briefom a editácii — AI zrýchľuje produkciu, ale tón značky, fakty a právne náležitosti musí strážiť človek.',
                    ],
                },
            ],
        },
        related: ['cta', 'kreativa', 'landing-page', 'ab-testovanie'],
        links: [
            { label: 'SEO články — naša služba v AI Studiu', href: '/ai-studio/seo-clanky' },
        ],
    },
    {
        slug: 'cta',
        term: 'CTA',
        fullName: 'Call to Action (výzva na akciu)',
        category: 'obsah',
        short: 'Prvok, ktorý hovorí, čo má človek urobiť ďalej — „Kúpiť", „Nechajte si poradiť", „Stiahnuť e-book". Jasné CTA je základ každej reklamy aj landing page.',
        related: ['copywriting', 'landing-page', 'konverzny-pomer'],
    },
    {
        slug: 'influencer-marketing',
        term: 'Influencer marketing',
        category: 'obsah',
        short: 'Spolupráca značiek s tvorcami obsahu, ktorí majú dôveru svojho publika. Od veľkých mien sa ťažisko presúva k mikroinfluencerom s menším, ale angažovanejším publikom.',
        related: ['ugc', 'engagement'],
    },
    {
        slug: 'povedomie-o-znacke',
        term: 'Povedomie o značke',
        fullName: 'Brand awareness',
        category: 'obsah',
        short: 'Miera, do akej si ľudia značku vybavia a spoznajú. Buduje sa zásahovými kampaňami, obsahom a konzistentnou komunikáciou; v dlhom horizonte znižuje cenu výkonnostných kampaní.',
        related: ['dosah', 'frekvencia', 'cpm'],
    },
];

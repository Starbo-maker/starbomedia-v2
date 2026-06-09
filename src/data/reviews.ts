// Reálne Google recenzie firemného profilu „Starbo Media - reklama na internete".
// Zdroj: Google Maps profil (5,0 ★ / 26 recenzií), vytiahnuté 06/2026.
// Pozn.: `year` je odvodený z relatívneho dátumu Googlu (napr. „pred 6 mesiacmi") — približný, na úrovni roka presný.
//        Pri 3 dlhých recenziách (excerpt: true) je text zostrihnutý na ucelenú vetu kvôli dĺžke karty;
//        plné znenie je na Google profile. Drobné pravopisné opravy: Konrad „snha"→„snaha", Milan „Perfektne"→„Perfektné".

export type Review = {
    author: string;
    year: string;
    rating: number;
    text: string;
    excerpt?: boolean;
};

export const REVIEW_AGGREGATE = {
    rating: 5.0,
    count: 26,
    // Stabilný odkaz na náš Google profil cez CID (feature ID 0x...:0xed82e9202ed7cdc9 → CID 17114497858395426249).
    // Overené: presmeruje priamo na profil „Starbo Media - reklama na internete" v Mapách (vrátane recenzií).
    profileUrl: 'https://www.google.com/maps?cid=17114497858395426249',
};

export const REVIEWS: Review[] = [
    {
        author: 'Zuzana Haászová',
        year: '2026',
        rating: 5,
        text: 'So Starbo Media spolupracujeme na partnerskej úrovni už niekoľko rokov. Za ten čas sa vyprofilovali na agentúru, ktorá v sebe spája bohaté skúsenosti, odborný pohľad na vec a skvelý prehľad v aktuálnych marketingových trendoch. Ak hľadáte spoľahlivého partnera pre rast vášho biznisu, ste na správnom mieste!',
    },
    {
        author: 'Pavol Mikulička',
        year: '2026',
        rating: 5,
        text: 'Perfektná detailná spolupráca v nastavovaní a správe reklamných kampaní.',
    },
    {
        author: 'Iván Rédey',
        year: '2026',
        rating: 5,
        text: 'My favorite Slovak digital agency! I love Starbomedia because they genuinely care about you and really know their stuff. They’re always ahead of the curve with the latest technology. Unlike many others, they actually use AI instead of just talking about it, while constantly sharing the latest trends to help others learn.',
    },
    {
        author: 'Zuzana Fabrici',
        year: '2026',
        rating: 5,
        excerpt: true,
        text: 'So Starbo Media spolupracujeme už viac než 4 roky, zastrešujú pre nás viacero eshopov pre SK aj CZ trh. Dokážu veľmi rýchlo reagovať na naše požiadavky, prinášajú do spolupráce svoj obchodný pohľad a zároveň sú trendsettermi v oblasti AI.',
    },
    {
        author: 'Norbert Synčák',
        year: '2026',
        rating: 5,
        text: 'Profesionálny prístup a kvalitné služby s merateľnými výsledkami. Vrelo odporúčam 👍',
    },
    {
        author: 'LAND AGENCY s.r.o.',
        year: '2026',
        rating: 5,
        excerpt: true,
        text: 'S pánmi zo Starbo Media spolupracujeme už dlhšiu dobu a sme maximálne spokojní. Oceňujeme najmä ich ochotu, ústretovosť a profesionálny prístup. Vždy nám vedia poradiť, pomôcť a vyhovieť aj pri tých najmenších detailoch, čo si veľmi vážime.',
    },
    {
        author: 'Marek Loduha',
        year: '2026',
        rating: 5,
        text: 'Dlhodobá spolupráca, odbornosť, profesionalita. Odporúčam.',
    },
    {
        author: 'Imrich Lovas',
        year: '2026',
        rating: 5,
        text: 'Maximálna spokojnosť.',
    },
    {
        author: 'Konrad Rigo',
        year: '2025',
        rating: 5,
        text: 'Už viac ako rok spolupracujeme so Starbo Media. Šéf agentúry hneď na prvom videocalle presvedčil nás o tom, že sme na správnom mieste. Odvtedy máme dedikovaného konzultanta s ktorým sme v stálom kontakte a mesačne vyhodnocujeme spoluprácu. Podľa potreby zapájame do riešení našich požiadaviek odborníkov agentúry z rôznych oblastí. Profesionalita a snaha pochopiť náš biznis robí z tohto teamu najlepšieho digitálneho partnera.',
    },
    {
        author: 'Milan Molnár',
        year: '2025',
        rating: 5,
        text: 'Perfektné služby.',
    },
    {
        author: 'Ivan Matis',
        year: '2025',
        rating: 5,
        excerpt: true,
        text: 'So Starbo Media spolupracujeme už dlhšiu dobu a s čistým svedomím ich môžem odporučiť každému, kto hľadá profesionálnu a zároveň ľudskú marketingovú agentúru. Skvelo rozumejú performance marketingu – neponúkajú univerzálne riešenia, ale prispôsobujú kampane na mieru, sledujú dáta a neustále ich optimalizujú.',
    },
    {
        author: 'Martin Haász',
        year: '2020',
        rating: 5,
        text: 'Profesionálny prístup, vysoká odbornosť a príjemná komunikácia. Odporúčam.',
    },
    {
        author: 'Pete M',
        year: '2019',
        rating: 5,
        text: 'Profesionáli v oblasti komunikácie, stratégie a online marketingových služieb. Agentúra Starbomedia je excelentná v doručovaní výkonnosti marketingových kampaní. Ak hľadáte agentúru pre expanziu na nové trhy, určite sa im ozvite. Odporúčam!',
    },
    {
        author: 'Vladimír Karkuš',
        year: '2019',
        rating: 5,
        text: 'Peter je ukážkový príklad odborníka na online marketing. Vyzdvihujem preukázateľné výsledky, transparentnosť a profesionálny prístup. Petra odporúčam všetkými desiatimi.',
    },
    {
        author: 'Daniel Babčan',
        year: '2019',
        rating: 5,
        text: 'Som maximálne spokojný s dodanými službami. Veľmi príjemná komunikácia, návrhy nad rámec dohodnutej spolupráce a všetko podložené aj výsledkami.',
    },
];

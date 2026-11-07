// Témy pre filter na /blog. Článok ich má v posts.json (pole `topics`);
// ak chýbajú (nový článok z pipeline), odvodia sa z názvu cez TOPIC_RULES.

export const BLOG_TOPICS = [
    { id: 'google-ads', label: 'Google Ads' },
    { id: 'meta-ads', label: 'Meta Ads' },
    { id: 'seo', label: 'SEO' },
    { id: 'ai', label: 'AI' },
    { id: 'meranie', label: 'Meranie' },
    { id: 'eshopy', label: 'E-shopy' },
    { id: 'ceny', label: 'Ceny' },
    { id: 'novinky', label: 'Novinky' },
] as const;

export type BlogTopicId = (typeof BLOG_TOPICS)[number]['id'];

const TOPIC_RULES: [BlogTopicId, RegExp][] = [
    ['google-ads', /google ads|google reklam|ppc|shopping|merchant center|pmax|performance max/i],
    ['meta-ads', /meta|facebook|instagram/i],
    ['seo', /\bseo\b|\bgeo\b|search console|ai overviews|indexov/i],
    ['ai', /\bai\b|chatgpt|gemini|gpt|umelej inteligencie|nano banana/i],
    ['meranie', /tracking|meranie|konverzi|analytics|ga4|roas|poas|pno/i],
    ['eshopy', /e-shop|eshop|e-commerce|ecommerce/i],
    ['ceny', /koľko stojí|cena|ceny|agentúr/i],
    ['novinky', /novinky|trendy|update/i],
];

export function resolveTopics(title: string, topics?: string[]): BlogTopicId[] {
    const known = new Set<string>(BLOG_TOPICS.map((t) => t.id));
    if (topics?.length) return topics.filter((t): t is BlogTopicId => known.has(t));
    return TOPIC_RULES.filter(([, re]) => re.test(title)).map(([id]) => id);
}

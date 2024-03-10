export interface Game {
    id: string;
    slug: string;
    title: string;
    providerName: string;
    thumb?: { url: string } | null;
    startUrl?: string;
}
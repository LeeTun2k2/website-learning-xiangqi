export type TListArticlesData = {
    id: string;
    title: string;
    image: string;
    href: string;
}

export type TListArticlesProps = {
    title: string;
    data: FeaturedArticlesData;
}
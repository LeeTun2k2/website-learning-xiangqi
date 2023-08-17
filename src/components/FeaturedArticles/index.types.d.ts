export type TFeaturedArticlesData = {
    id: string;
    title: string;
    image: string;
    href: string;
}

export type TFeaturedArticlesProps = {
    title: string;
    data: FeaturedArticlesData;
}
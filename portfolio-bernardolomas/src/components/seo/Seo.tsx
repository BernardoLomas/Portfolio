import { Helmet } from "react-helmet-async"

type SeoProps = {
    title: string;
    description: string;
    url?: string;
};

export default function Seo({ title, description, url }: SeoProps) {
    const siteName = "Bernardo Lomas | Full Stack Developer";
    const siteUrl = "dominio";

    return (
        <Helmet>
            <title>{title}</title>

            <meta name="description" content={description} />

            <meta property="og:type" content="website"/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
            <meta property="og:site_name" content={siteName}/>
            <meta property="og:url" content={url ?? siteUrl}/>

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta
                name="twitter:description"
                content={description}
            />
        </Helmet>
    );
}
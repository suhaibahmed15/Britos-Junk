import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
}

const SITE_URL = "https://www.britosjunk.com";

export default function SEO({ title, description, path = "/" }: SEOProps) {
  const fullTitle = `${title} | Britos Junk`;
  const canonical = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Britos Junk" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Britos Junk",
          description,
          url: SITE_URL,
          telephone: "+1-555-018-2947",
          priceRange: "$$",
          areaServed: "Greater Metro Area",
        })}
      </script>
    </Helmet>
  );
}

import Head from "next/head";

export const OpenGraph = ({ metadata = {} }) => {
  const SEO = {
    title: metadata.title || "Blog sin Titulo",
    description:
      metadata.description ||
      "Tutoriales sobre Linux, Shaders glsl y mucho mas!",
    slug: metadata.slug || "",
    date: metadata.date || new Date().toISOString(),
  };

  return (
    <Head>
      <title>{SEO.title}</title>
      <meta name="robots" content="follow, index" />
      <meta content={SEO.description} name="description" />
      <meta
        property="og:url"
        content={`Mi URL de la web`}
      />
      <link rel="canonical" href={`LA URL DE MI WEB/${SEO.slug}`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Helios Project" />
      <meta property="og:description" content={SEO.description} />
      <meta property="og:title" content={SEO.title} />
      <meta property="article:published_time" content={SEO.date} />
    </Head>
  );
};

import { Helmet } from 'react-helmet-async';

export const SITE_URL = 'https://victorcg.netlify.app';

interface SeoProps {
  title: string;
  description: string;
  /** Route path, e.g. "/web-developer" */
  path: string;
}

export default function Seo({ title, description, path }: SeoProps) {
  const url = `${SITE_URL}${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}

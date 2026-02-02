import { Title, Meta, Link } from 'react-head';

type SEOProps = {
  title: string;
  description: string;
  image?: string; // para Open Graph e compartilhamento
  url?: string; // URL da página atual
  keywords?: string; // opcional, ajuda no SEO on-page
  noindex?: boolean;
  nofollow?: boolean;
};

export const SEO = ({
  title,
  description,
  image = 'https://www.consultersolucoes.com.br/og-banner.jpg',
  url = 'https://www.consultersolucoes.com.br/',
  keywords,
  noindex,
  nofollow,
}: SEOProps) => (
  <>
    {/* Título e descrição principais */}
    <Title>{title}</Title>
    <Meta name="description" content={description} />
    {keywords && <Meta name="keywords" content={keywords} />}

    {/* Canonical */}
    <Link rel="canonical" href={url} />

    {/* Open Graph (Facebook / WhatsApp / LinkedIn) */}
    <Meta property="og:type" content="website" />
    <Meta property="og:title" content={title} />
    <Meta property="og:description" content={description} />
    <Meta property="og:image" content={image} />
    <Meta property="og:url" content={url} />
    <Meta property="og:locale" content="pt_BR" />

    {/* Twitter Card (mantém compatibilidade com outras redes) */}
    <Meta name="twitter:card" content="summary_large_image" />
    <Meta name="twitter:title" content={title} />
    <Meta name="twitter:description" content={description} />
    <Meta name="twitter:image" content={image} />

    {/* Robots (SEO flags) */}
    {(noindex || nofollow) && (
      <Meta
        name="robots"
        content={`${noindex ? 'noindex' : ''}${noindex && nofollow ? ', ' : ''}${nofollow ? 'nofollow' : ''}`}
      />
    )}
  </>
);

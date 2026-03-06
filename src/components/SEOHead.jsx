import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://www.pclaptech.in';
const SITE_NAME = 'PC LAP TECH';

/**
 * SEOHead — drop-in component for per-page SEO meta tags.
 * All props have sensible defaults → homepage values.
 */
export default function SEOHead({
  title = `${SITE_NAME} – #1 Trusted Laptop Repair in Delhi NCR | Same Day Service`,
  description = 'PC LAP TECH provides fast and affordable laptop repair services in Delhi NCR, Noida, Greater Noida and Faridabad. Screen replacement, SSD upgrade, RAM upgrade, battery replacement and all laptop repairs. Call 6306372863.',
  keywords = 'laptop repair Delhi NCR, laptop repair near me, laptop screen replacement Delhi, laptop battery replacement',
  canonical,
  ogTitle,
  ogDescription,
  faqSchema = null,
  serviceSchema = null,
}) {
  const resolvedCanonical = canonical ? `${SITE_URL}${canonical}` : `${SITE_URL}/`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={resolvedCanonical} />

      {/* OG */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:url" content={resolvedCanonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />

      {/* FAQ Schema */}
      {faqSchema && (
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqSchema.map(({ q, a }) => ({
            '@type': 'Question',
            name: q,
            acceptedAnswer: { '@type': 'Answer', text: a },
          })),
        })}</script>
      )}

      {/* Service Schema */}
      {serviceSchema && (
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          ...serviceSchema,
          provider: {
            '@type': 'ComputerRepairService',
            name: SITE_NAME,
            telephone: '+916306372863',
            url: SITE_URL,
          },
        })}</script>
      )}
    </Helmet>
  );
}

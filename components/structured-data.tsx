export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VAV.RE",
    url: "https://vav.re",
    logo: "https://vav.re/logo.png",
    sameAs: ["https://twitter.com/vav_re", "https://github.com/vav-re", "https://linkedin.com/company/vav-re"],
    description: "Vector Architecture for Runtime Intelligence. Systems and execution layers for AI-native tools.",
    foundingDate: "2023",
    founders: [
      {
        "@type": "Person",
        name: "VAV.RE Founder",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "hello@vav.re",
    },
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "VAV.RE",
    url: "https://vav.re",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://vav.re/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "VAV.RE Platform",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description: "Vector Architecture for Runtime Intelligence. Systems and execution layers for AI-native tools.",
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
    </>
  )
}

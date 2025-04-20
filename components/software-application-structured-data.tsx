interface SoftwareApplicationProps {
  name: string
  operatingSystem: string
  applicationCategory: string
  offers: {
    price: number
    priceCurrency: string
  }
  aggregateRating?: {
    ratingValue: number
    reviewCount: number
  }
}

export default function SoftwareApplicationStructuredData({
  name,
  operatingSystem,
  applicationCategory,
  offers,
  aggregateRating,
}: SoftwareApplicationProps) {
  const softwareSchema: any = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: name,
    operatingSystem: operatingSystem,
    applicationCategory: applicationCategory,
    offers: {
      "@type": "Offer",
      price: offers.price,
      priceCurrency: offers.priceCurrency,
    },
  }

  if (aggregateRating) {
    softwareSchema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
    }
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
}

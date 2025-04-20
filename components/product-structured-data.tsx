interface ProductProps {
  name: string
  image: string
  description: string
  brand: string
  offers: {
    price: number
    priceCurrency: string
    availability: string
    url: string
  }
  aggregateRating?: {
    ratingValue: number
    reviewCount: number
  }
}

export default function ProductStructuredData({
  name,
  image,
  description,
  brand,
  offers,
  aggregateRating,
}: ProductProps) {
  const productSchema: any = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: name,
    image: image,
    description: description,
    brand: {
      "@type": "Brand",
      name: brand,
    },
    offers: {
      "@type": "Offer",
      price: offers.price,
      priceCurrency: offers.priceCurrency,
      availability: offers.availability,
      url: offers.url,
    },
  }

  if (aggregateRating) {
    productSchema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
    }
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
}

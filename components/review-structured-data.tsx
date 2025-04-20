interface ReviewProps {
  itemReviewed: {
    name: string
    image: string
  }
  reviewRating: {
    ratingValue: number
    bestRating: number
  }
  author: {
    name: string
  }
  reviewBody: string
  datePublished: string
}

export default function ReviewStructuredData({
  itemReviewed,
  reviewRating,
  author,
  reviewBody,
  datePublished,
}: ReviewProps) {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Thing",
      name: itemReviewed.name,
      image: itemReviewed.image,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: reviewRating.ratingValue,
      bestRating: reviewRating.bestRating,
    },
    author: {
      "@type": "Person",
      name: author.name,
    },
    reviewBody: reviewBody,
    datePublished: datePublished,
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
}

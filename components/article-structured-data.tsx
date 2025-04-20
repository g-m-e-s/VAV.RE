interface ArticleProps {
  headline: string
  description: string
  image: string
  datePublished: string
  dateModified: string
  authorName: string
  publisherName: string
  publisherLogo: string
}

export default function ArticleStructuredData({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  authorName,
  publisherName,
  publisherLogo,
}: ArticleProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: headline,
    description: description,
    image: image,
    datePublished: datePublished,
    dateModified: dateModified,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: publisherName,
      logo: {
        "@type": "ImageObject",
        url: publisherLogo,
      },
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
}

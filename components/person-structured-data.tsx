interface PersonProps {
  name: string
  jobTitle: string
  image: string
  url: string
  sameAs: string[]
  worksFor: {
    name: string
    url: string
  }
}

export default function PersonStructuredData({ name, jobTitle, image, url, sameAs, worksFor }: PersonProps) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: name,
    jobTitle: jobTitle,
    image: image,
    url: url,
    sameAs: sameAs,
    worksFor: {
      "@type": "Organization",
      name: worksFor.name,
      url: worksFor.url,
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
}

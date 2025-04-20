interface CourseProps {
  name: string
  description: string
  provider: {
    name: string
    sameAs: string
  }
}

export default function CourseStructuredData({ name, description, provider }: CourseProps) {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: name,
    description: description,
    provider: {
      "@type": "Organization",
      name: provider.name,
      sameAs: provider.sameAs,
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
}

interface JobPostingProps {
  title: string
  description: string
  datePosted: string
  validThrough: string
  employmentType: string
  hiringOrganization: {
    name: string
    sameAs: string
    logo: string
  }
  jobLocation: {
    addressLocality: string
    addressRegion: string
    addressCountry: string
  }
  baseSalary?: {
    currency: string
    value: number
    unitText: string
  }
}

export default function JobPostingStructuredData({
  title,
  description,
  datePosted,
  validThrough,
  employmentType,
  hiringOrganization,
  jobLocation,
  baseSalary,
}: JobPostingProps) {
  const jobSchema: any = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: title,
    description: description,
    datePosted: datePosted,
    validThrough: validThrough,
    employmentType: employmentType,
    hiringOrganization: {
      "@type": "Organization",
      name: hiringOrganization.name,
      sameAs: hiringOrganization.sameAs,
      logo: hiringOrganization.logo,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: jobLocation.addressLocality,
        addressRegion: jobLocation.addressRegion,
        addressCountry: jobLocation.addressCountry,
      },
    },
  }

  if (baseSalary) {
    jobSchema.baseSalary = {
      "@type": "MonetaryAmount",
      currency: baseSalary.currency,
      value: {
        "@type": "QuantitativeValue",
        value: baseSalary.value,
        unitText: baseSalary.unitText,
      },
    }
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobSchema) }} />
}

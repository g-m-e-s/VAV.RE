interface LocalBusinessProps {
  name: string
  image: string
  telephone: string
  address: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  geo: {
    latitude: number
    longitude: number
  }
  url: string
  openingHours: string[]
}

export default function LocalBusinessStructuredData({
  name,
  image,
  telephone,
  address,
  geo,
  url,
  openingHours,
}: LocalBusinessProps) {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: name,
    image: image,
    telephone: telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.streetAddress,
      addressLocality: address.addressLocality,
      addressRegion: address.addressRegion,
      postalCode: address.postalCode,
      addressCountry: address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    url: url,
    openingHoursSpecification: openingHours.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.split(" ")[0],
      opens: hours.split(" ")[1].split("-")[0],
      closes: hours.split(" ")[1].split("-")[1],
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
}

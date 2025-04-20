interface EventProps {
  name: string
  startDate: string
  endDate: string
  location: {
    name: string
    address: string
  }
  image: string
  description: string
  offers?: {
    price: number
    priceCurrency: string
    url: string
    availability: string
  }
  performer?: {
    name: string
  }
}

export default function EventStructuredData({
  name,
  startDate,
  endDate,
  location,
  image,
  description,
  offers,
  performer,
}: EventProps) {
  const eventSchema: any = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: name,
    startDate: startDate,
    endDate: endDate,
    location: {
      "@type": "Place",
      name: location.name,
      address: location.address,
    },
    image: image,
    description: description,
  }

  if (offers) {
    eventSchema.offers = {
      "@type": "Offer",
      price: offers.price,
      priceCurrency: offers.priceCurrency,
      url: offers.url,
      availability: offers.availability,
    }
  }

  if (performer) {
    eventSchema.performer = {
      "@type": "Person",
      name: performer.name,
    }
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />
}

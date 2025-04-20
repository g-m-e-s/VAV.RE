interface HowToProps {
  name: string
  description: string
  image: string
  totalTime: string
  estimatedCost: {
    currency: string
    value: number
  }
  supply: string[]
  tool: string[]
  step: Array<{
    name: string
    text: string
    image?: string
  }>
}

export default function HowToStructuredData({
  name,
  description,
  image,
  totalTime,
  estimatedCost,
  supply,
  tool,
  step,
}: HowToProps) {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: name,
    description: description,
    image: image,
    totalTime: totalTime,
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: estimatedCost.currency,
      value: estimatedCost.value,
    },
    supply: supply.map((item) => ({
      "@type": "HowToSupply",
      name: item,
    })),
    tool: tool.map((item) => ({
      "@type": "HowToTool",
      name: item,
    })),
    step: step.map((item) => ({
      "@type": "HowToStep",
      name: item.name,
      text: item.text,
      ...(item.image && { image: item.image }),
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
}

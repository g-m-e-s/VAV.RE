interface VideoProps {
  name: string
  description: string
  thumbnailUrl: string
  uploadDate: string
  contentUrl?: string
  embedUrl?: string
  duration?: string
}

export default function VideoStructuredData({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  contentUrl,
  embedUrl,
  duration,
}: VideoProps) {
  const videoSchema: any = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: name,
    description: description,
    thumbnailUrl: thumbnailUrl,
    uploadDate: uploadDate,
  }

  if (contentUrl) videoSchema.contentUrl = contentUrl
  if (embedUrl) videoSchema.embedUrl = embedUrl
  if (duration) videoSchema.duration = duration

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
}

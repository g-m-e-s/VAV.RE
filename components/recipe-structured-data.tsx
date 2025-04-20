interface RecipeProps {
  name: string
  image: string
  description: string
  prepTime: string
  cookTime: string
  totalTime: string
  recipeYield: string
  recipeIngredient: string[]
  recipeInstructions: string[]
  author: {
    name: string
  }
}

export default function RecipeStructuredData({
  name,
  image,
  description,
  prepTime,
  cookTime,
  totalTime,
  recipeYield,
  recipeIngredient,
  recipeInstructions,
  author,
}: RecipeProps) {
  const recipeSchema = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: name,
    image: image,
    description: description,
    prepTime: prepTime,
    cookTime: cookTime,
    totalTime: totalTime,
    recipeYield: recipeYield,
    recipeIngredient: recipeIngredient,
    recipeInstructions: recipeInstructions.map((instruction) => ({
      "@type": "HowToStep",
      text: instruction,
    })),
    author: {
      "@type": "Person",
      name: author.name,
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(recipeSchema) }} />
}

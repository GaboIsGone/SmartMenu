const keywords = {
  vegetariano:  ['vegetariano', 'vegano', 'sin carne', 'no carne', 'plant', 'vegetal', 'vegetarian', 'no meat', 'meat-free'],
  vegano:       ['vegano', 'vegan'],
  sin_gluten:   ['sin gluten', 'celiaco', 'celíaco', 'gluten free', 'gluten-free', 'sin trigo'],
  picante:      ['picante', 'spicy', 'hot', 'chile'],
  popular:      ['popular', 'recomendado', 'favorito', 'especial', 'mejor', 'top', 'recommended', 'favorite', 'best'],
  rapido:       ['rápido', 'rapido', 'express', 'poco tiempo', 'quick', 'fast'],
  carne:        ['carne', 'res', 'pollo', 'cerdo', 'cordero', 'proteína', 'proteina', 'meat', 'beef', 'steak'],
  mariscos:     ['mariscos', 'pescado', 'mar', 'seafood', 'marisco', 'atún', 'salmon', 'pulpo', 'fish'],
  pasta:        ['pasta', 'fideos', 'spaghetti', 'linguine', 'carbohidrato', 'carbs'],
  ensalada:     ['ensalada', 'fresco', 'ligero', 'liviano', 'verde', 'salad', 'fresh', 'light'],
  postre:       ['postre', 'dulce', 'dessert', 'sweet', 'torta', 'pastel', 'helado', 'cake'],
}

function parseQuery(query) {
  const q = query.toLowerCase()
  const detected = new Set()
  for (const [tag, words] of Object.entries(keywords)) {
    if (words.some(w => q.includes(w))) detected.add(tag)
  }
  return detected
}

function scoreItem(item, detectedTags) {
  if (!item.available) return -1
  let score = 0
  for (const tag of detectedTags) {
    if (item.tags.includes(tag)) score += 10
  }
  if (detectedTags.size === 0 && item.tags.includes('popular')) score += 5
  return score
}

export function getRecommendations(query, allItems, limit = 3) {
  const detectedTags = parseQuery(query)
  const scored = allItems
    .map(item => ({ ...item, score: scoreItem(item, detectedTags) }))
    .filter(item => item.score >= 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score
      return (b.tags.includes('popular') ? 1 : 0) - (a.tags.includes('popular') ? 1 : 0)
    })
  const results = scored.filter(i => i.score > 0)
  if (results.length === 0) {
    return allItems.filter(i => i.available && i.tags.includes('popular')).slice(0, limit)
  }
  return results.slice(0, limit)
}

export function getResponseType(query) {
  const q = query.toLowerCase()
  if (['vegetariano', 'vegano', 'sin carne', 'vegetarian', 'vegan', 'no meat'].some(w => q.includes(w))) return 'veg'
  if (['postre', 'dulce', 'dessert', 'sweet'].some(w => q.includes(w))) return 'dessert'
  if (['popular', 'recomendado', 'mejor', 'top', 'recommended', 'best'].some(w => q.includes(w))) return 'popular'
  return 'default'
}

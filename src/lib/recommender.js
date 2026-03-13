/* ============================================
   MOTOR DE RECOMENDACIONES
   Sin IA, sin costos, 100% lógica propia.
   Parsea lo que escribe el usuario y cruza
   con las etiquetas de cada plato.
   ============================================ */

// Mapa de palabras clave → etiquetas
const keywords = {
  // Restricciones / preferencias
  vegetariano:  ["vegetariano", "vegano", "sin carne", "no carne", "plant", "vegetal"],
  vegano:       ["vegano", "vegan"],
  sin_gluten:   ["sin gluten", "celiaco", "celíaco", "gluten free", "sin trigo"],
  
  // Sabores / características
  picante:      ["picante", "spicy", "hot", "chile"],
  popular:      ["popular", "recomendado", "favorito", "especial", "mejor", "top"],
  rapido:       ["rápido", "rapido", "express", "poco tiempo"],

  // Tipo de comida
  carne:        ["carne", "res", "pollo", "cerdo", "cordero", "proteína", "proteina"],
  mariscos:     ["mariscos", "pescado", "mar", "seafood", "marisco", "atún", "salmon", "pulpo"],
  pasta:        ["pasta", "fideos", "spaghetti", "linguine", "carbohidrato"],
  ensalada:     ["ensalada", "fresco", "ligero", "liviano", "verde"],
  postre:       ["postre", "dulce", "dessert", "sweet", "torta", "pastel", "helado"],
}

/**
 * Detecta etiquetas relevantes en el texto del usuario
 */
function parseQuery(query) {
  const q = query.toLowerCase()
  const detected = new Set()

  for (const [tag, words] of Object.entries(keywords)) {
    if (words.some(w => q.includes(w))) {
      detected.add(tag)
    }
  }

  return detected
}

/**
 * Calcula el score de un plato dado las etiquetas detectadas
 */
function scoreItem(item, detectedTags) {
  if (!item.available) return -1

  let score = 0
  for (const tag of detectedTags) {
    if (item.tags.includes(tag)) score += 10
  }

  // Bonus por popularidad si no hay contexto suficiente
  if (detectedTags.size === 0 && item.tags.includes("popular")) score += 5

  return score
}

/**
 * Función principal: recibe texto del usuario, devuelve platos recomendados
 * @param {string} query - Lo que escribió el usuario
 * @param {Array} allItems - Todos los platos del menú (aplanados)
 * @param {number} limit - Cuántos resultados devolver
 */
export function getRecommendations(query, allItems, limit = 3) {
  const detectedTags = parseQuery(query)

  const scored = allItems
    .map(item => ({ ...item, score: scoreItem(item, detectedTags) }))
    .filter(item => item.score >= 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score
      // Desempate: populares primero
      const aPop = a.tags.includes("popular") ? 1 : 0
      const bPop = b.tags.includes("popular") ? 1 : 0
      return bPop - aPop
    })

  // Si no hubo ningún match, devuelve los populares
  const results = scored.filter(i => i.score > 0)
  if (results.length === 0) {
    return allItems
      .filter(i => i.available && i.tags.includes("popular"))
      .slice(0, limit)
  }

  return results.slice(0, limit)
}

/**
 * Genera el mensaje de respuesta según el contexto
 */
export function buildResponse(results, query) {
  if (results.length === 0) {
    return "No encontré algo exacto, pero puedo mostrarte lo más popular del menú si quieres."
  }

  const detectedTags = parseQuery(query)

  if (detectedTags.has("vegetariano") || detectedTags.has("vegano")) {
    return `Aquí tienes ${results.length} opción${results.length > 1 ? "es" : ""} sin carne que te pueden gustar:`
  }
  if (detectedTags.has("postre")) {
    return `Para terminar bien, te recomiendo estos postres:`
  }
  if (detectedTags.has("popular")) {
    return `Los favoritos de la casa son:`
  }

  return `Basándome en lo que buscas, te sugiero:`
}

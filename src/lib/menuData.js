/* ============================================
   DATOS DEL MENÚ
   Cambia esto para cada cliente.
   Agrega o quita platos, categorías y etiquetas.
   ============================================ */

export const restaurant = {
  name: "Brasa & Oliva",
  tagline: "Cocina mediterránea con alma",
  accent: "#d4a85a", // Color principal del restaurante
}

/* ETIQUETAS DISPONIBLES para el buscador inteligente:
   picante | vegetariano | vegano | sin_gluten | popular
   rapido | carne | mariscos | pasta | ensalada | postre */

export const menu = [
  {
    category: "Entradas",
    items: [
      {
        id: 1,
        name: "Burrata con tomate",
        description: "Burrata fresca, tomates heirloom, albahaca y aceite de oliva virgen extra.",
        price: 12,
        tags: ["vegetariano", "popular", "sin_gluten"],
        emoji: "🧀",
        available: true,
      },
      {
        id: 2,
        name: "Croquetas de jamón ibérico",
        description: "Croquetas artesanales con bechamel cremosa y jamón ibérico curado 24 meses.",
        price: 9,
        tags: ["popular", "carne"],
        emoji: "🍤",
        available: true,
      },
      {
        id: 3,
        name: "Carpaccio de pulpo",
        description: "Pulpo gallego laminado, papas confitadas, pimentón ahumado y alioli.",
        price: 14,
        tags: ["mariscos", "sin_gluten"],
        emoji: "🐙",
        available: true,
      },
    ],
  },
  {
    category: "Principales",
    items: [
      {
        id: 4,
        name: "Chuletón a la brasa",
        description: "Chuletón de vaca vieja madurado 45 días, sal Maldon y chimichurri.",
        price: 28,
        tags: ["carne", "popular", "sin_gluten"],
        emoji: "🥩",
        available: true,
      },
      {
        id: 5,
        name: "Risotto de setas silvestres",
        description: "Arroz arborio con setas de temporada, parmesano y trufa negra.",
        price: 18,
        tags: ["vegetariano", "popular"],
        emoji: "🍄",
        available: true,
      },
      {
        id: 6,
        name: "Lubina a la sal",
        description: "Lubina entera al horno en costra de sal, hinojo y limón.",
        price: 24,
        tags: ["mariscos", "sin_gluten"],
        emoji: "🐟",
        available: true,
      },
      {
        id: 7,
        name: "Pasta al pesto rojo",
        description: "Linguine con pesto de tomate seco, piñones tostados y ricotta.",
        price: 15,
        tags: ["vegetariano", "pasta"],
        emoji: "🍝",
        available: false, // no disponible hoy
      },
    ],
  },
  {
    category: "Postres",
    items: [
      {
        id: 8,
        name: "Tiramisú clásico",
        description: "Receta tradicional italiana con mascarpone, café espresso y cacao.",
        price: 7,
        tags: ["postre", "popular"],
        emoji: "☕",
        available: true,
      },
      {
        id: 9,
        name: "Tarta de queso vasca",
        description: "Cheesecake cremoso estilo San Sebastián, caramelizado y sin base.",
        price: 8,
        tags: ["postre", "sin_gluten", "popular"],
        emoji: "🍰",
        available: true,
      },
    ],
  },
]

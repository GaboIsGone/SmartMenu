/* ============================================
   DATOS DEL MENÚ — v2
   
   IMÁGENES:
   - Pon tus fotos en /public/images/dishes/
   - Referencia como: image: '/images/dishes/nombre.jpg'
   - O usa URL externa: image: 'https://...'
   - Si no pones imagen, muestra el emoji solo
   ============================================ */

export const restaurant = {
  name: 'Brasa & Oliva',
  tagline: 'Cocina mediterránea con alma',
  // Imagen del hero (pon tu foto en /public/images/hero.jpg)
  // O usa una URL externa para probar
  heroImage: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80',
  // Fotos de la galería
  gallery: [
    {
      src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
      caption: 'El salón principal',
    },
    {
      src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80',
      caption: 'La brasa',
    },
    {
      src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
      caption: 'Barra de vinos',
    },
    {
      src: 'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=800&q=80',
      caption: 'Terraza exterior',
    },
    {
      src: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80',
      caption: 'Cocina abierta',
    },
    {
      src: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80',
      caption: 'Mesa para ocasiones especiales',
    },
  ],
  // Foto del chef / equipo
  aboutImage: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80',
}

export const menu = [
  {
    category: 'Entradas',
    items: [
      {
        id: 1,
        name: 'Burrata con tomate',
        description: 'Burrata fresca, tomates heirloom, albahaca y aceite de oliva virgen extra.',
        price: 12,
        tags: ['vegetariano', 'popular', 'sin_gluten'],
        emoji: '🧀',
        // image: '/images/dishes/burrata.jpg',  ← usa esto cuando tengas la foto
        image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=400&q=80',
        available: true,
      },
      {
        id: 2,
        name: 'Croquetas de jamón ibérico',
        description: 'Croquetas artesanales con bechamel cremosa y jamón ibérico curado 24 meses.',
        price: 9,
        tags: ['popular', 'carne'],
        emoji: '🍤',
        image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400&q=80',
        available: true,
      },
      {
        id: 3,
        name: 'Carpaccio de pulpo',
        description: 'Pulpo gallego laminado, papas confitadas, pimentón ahumado y alioli.',
        price: 14,
        tags: ['mariscos', 'sin_gluten'],
        emoji: '🐙',
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&q=80',
        available: true,
      },
    ],
  },
  {
    category: 'Principales',
    items: [
      {
        id: 4,
        name: 'Chuletón a la brasa',
        description: 'Chuletón de vaca vieja madurado 45 días, sal Maldon y chimichurri.',
        price: 28,
        tags: ['carne', 'popular', 'sin_gluten'],
        emoji: '🥩',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80',
        available: true,
      },
      {
        id: 5,
        name: 'Risotto de setas silvestres',
        description: 'Arroz arborio con setas de temporada, parmesano y trufa negra.',
        price: 18,
        tags: ['vegetariano', 'popular'],
        emoji: '🍄',
        image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&q=80',
        available: true,
      },
      {
        id: 6,
        name: 'Lubina a la sal',
        description: 'Lubina entera al horno en costra de sal, hinojo y limón.',
        price: 24,
        tags: ['mariscos', 'sin_gluten'],
        emoji: '🐟',
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&q=80',
        available: true,
      },
      {
        id: 7,
        name: 'Pasta al pesto rojo',
        description: 'Linguine con pesto de tomate seco, piñones tostados y ricotta.',
        price: 15,
        tags: ['vegetariano', 'pasta'],
        emoji: '🍝',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&q=80',
        available: false,
      },
    ],
  },
  {
    category: 'Postres',
    items: [
      {
        id: 8,
        name: 'Tiramisú clásico',
        description: 'Receta tradicional italiana con mascarpone, café espresso y cacao.',
        price: 7,
        tags: ['postre', 'popular'],
        emoji: '☕',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80',
        available: true,
      },
      {
        id: 9,
        name: 'Tarta de queso vasca',
        description: 'Cheesecake cremoso estilo San Sebastián, caramelizado y sin base.',
        price: 8,
        tags: ['postre', 'sin_gluten', 'popular'],
        emoji: '🍰',
        image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&q=80',
        available: true,
      },
    ],
  },
]

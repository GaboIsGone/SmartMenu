'use client'

import { createContext, useContext, useState } from 'react'

const translations = {
  es: {
    nav: {
      menu: 'Menú',
      about: 'Nosotros',
      gallery: 'Galería',
      contact: 'Contacto',
    },
    hero: {
      badge: 'Cocina mediterránea desde 1998',
      title: 'Brasa\n& Oliva',
      subtitle: 'Ingredientes honestos, fuego lento, sabores que perduran.',
      cta: 'Ver menú completo',
      ctaSecondary: 'Reservar mesa',
    },
    search: {
      title: '¿Qué te apetece hoy?',
      subtitle: 'Dinos qué buscas y te recomendamos algo',
      placeholder: 'Ej: algo ligero y sin carne...',
      button: 'Buscar',
      loading: '...',
      clear: 'Limpiar',
      quickSearches: ['Algo vegetariano', 'Lo más popular', 'Sin gluten', 'Un postre', 'Mariscos'],
      noResults: 'No encontré algo exacto, pero puedo mostrarte lo más popular.',
      responseDefault: 'Basándome en lo que buscas, te sugiero:',
      responseVeg: 'opciones sin carne que te pueden gustar:',
      responseDessert: 'Para terminar bien, te recomiendo:',
      responsePopular: 'Los favoritos de la casa son:',
    },
    menu: {
      title: 'Menú completo',
      all: 'Todo',
      unavailable: 'No disponible hoy',
      recommended: 'Recomendado',
      popular: '⭐ Popular',
    },
    about: {
      badge: 'Nuestra historia',
      title: 'Pasión por el producto, respeto por el fuego',
      p1: 'Brasa & Oliva nació en 1998 de la mano de la familia Martínez, con una sola obsesión: servir el producto más fresco de la lonja y el mercado local, sin artificios ni congelados.',
      p2: 'Nuestra cocina entiende el fuego como lenguaje. Cada corte, cada pescado, cada verdura pasa por la brasa en su momento justo — ni antes, ni después.',
      stat1: { value: '26', label: 'años de historia' },
      stat2: { value: '100%', label: 'producto local' },
      stat3: { value: '3', label: 'generaciones' },
    },
    gallery: {
      badge: 'El espacio',
      title: 'Donde el ambiente es parte del plato',
    },
    contact: {
      badge: 'Encuéntranos',
      title: 'Reserva tu mesa',
      hours: 'Horarios',
      hoursData: [
        { day: 'Lunes – Viernes', time: '13:00 – 16:00 / 20:00 – 23:30' },
        { day: 'Sábado', time: '13:00 – 17:00 / 20:00 – 00:00' },
        { day: 'Domingo', time: '13:00 – 17:00' },
      ],
      address: 'Dirección',
      addressVal: 'Calle del Olivo 14, Madrid 28001',
      phone: 'Teléfono',
      phoneVal: '+34 91 555 0123',
      email: 'Email',
      emailVal: 'hola@brasayoliva.com',
      formName: 'Nombre',
      formDate: 'Fecha',
      formGuests: 'Personas',
      formNotes: 'Notas (alergias, ocasión especial...)',
      formSubmit: 'Solicitar reserva',
      formSuccess: '¡Reserva enviada! Te contactamos en menos de 24h.',
    },
    footer: {
      tagline: 'Cocina mediterránea con alma.',
      rights: 'Todos los derechos reservados.',
      poweredBy: 'Menú digital por',
    },
    analytics: {
      open: 'Ver analytics',
      close: 'Cerrar stats',
      title: 'Analytics del menú',
      scans: 'Escaneos QR',
      searches: 'Búsquedas',
      top: 'Platos más buscados',
      note: 'Conecta Supabase para persistencia real',
    },
  },
  en: {
    nav: {
      menu: 'Menu',
      about: 'About',
      gallery: 'Gallery',
      contact: 'Contact',
    },
    hero: {
      badge: 'Mediterranean cuisine since 1998',
      title: 'Brasa\n& Oliva',
      subtitle: 'Honest ingredients, slow fire, flavors that last.',
      cta: 'See full menu',
      ctaSecondary: 'Book a table',
    },
    search: {
      title: 'What are you in the mood for?',
      subtitle: 'Tell us what you want and we\'ll recommend something',
      placeholder: 'E.g.: something light and meat-free...',
      button: 'Search',
      loading: '...',
      clear: 'Clear',
      quickSearches: ['Vegetarian', 'Most popular', 'Gluten-free', 'Dessert', 'Seafood'],
      noResults: 'No exact match, but I can show you our most popular dishes.',
      responseDefault: 'Based on what you\'re looking for:',
      responseVeg: 'meat-free options you might enjoy:',
      responseDessert: 'To finish on a high note:',
      responsePopular: 'House favorites:',
    },
    menu: {
      title: 'Full menu',
      all: 'All',
      unavailable: 'Not available today',
      recommended: 'Recommended',
      popular: '⭐ Popular',
    },
    about: {
      badge: 'Our story',
      title: 'Passion for produce, respect for fire',
      p1: 'Brasa & Oliva was born in 1998 by the Martínez family, with a single obsession: serving the freshest catch from the local market, with no shortcuts or frozen shortcuts.',
      p2: 'Our kitchen understands fire as a language. Every cut, every fish, every vegetable meets the grill at exactly the right moment — not a second too soon or too late.',
      stat1: { value: '26', label: 'years of history' },
      stat2: { value: '100%', label: 'local produce' },
      stat3: { value: '3', label: 'generations' },
    },
    gallery: {
      badge: 'The space',
      title: 'Where the atmosphere is part of the dish',
    },
    contact: {
      badge: 'Find us',
      title: 'Book your table',
      hours: 'Opening hours',
      hoursData: [
        { day: 'Monday – Friday', time: '1:00 PM – 4:00 PM / 8:00 PM – 11:30 PM' },
        { day: 'Saturday', time: '1:00 PM – 5:00 PM / 8:00 PM – midnight' },
        { day: 'Sunday', time: '1:00 PM – 5:00 PM' },
      ],
      address: 'Address',
      addressVal: '14 Calle del Olivo, Madrid 28001',
      phone: 'Phone',
      phoneVal: '+34 91 555 0123',
      email: 'Email',
      emailVal: 'hello@brasayoliva.com',
      formName: 'Name',
      formDate: 'Date',
      formGuests: 'Guests',
      formNotes: 'Notes (allergies, special occasion...)',
      formSubmit: 'Request reservation',
      formSuccess: 'Reservation sent! We\'ll contact you within 24h.',
    },
    footer: {
      tagline: 'Mediterranean cuisine with soul.',
      rights: 'All rights reserved.',
      poweredBy: 'Digital menu by',
    },
    analytics: {
      open: 'View analytics',
      close: 'Close stats',
      title: 'Menu analytics',
      scans: 'QR scans',
      searches: 'Searches',
      top: 'Most searched dishes',
      note: 'Connect Supabase for real persistence',
    },
  },
}

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es')
  const t = translations[lang]
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}

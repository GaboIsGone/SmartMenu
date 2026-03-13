/* ============================================
   PÁGINA PRINCIPAL — SmartMenu
   ============================================ */

'use client'

import { useState } from 'react'
import { menu, restaurant } from '@/lib/menuData'
import MenuItem from '@/components/MenuItem'
import SmartSearch from '@/components/SmartSearch'
import AnalyticsDashboard from '@/components/Analytics'

// Aplana todos los platos en un array para el buscador
const allItems = menu.flatMap(cat => cat.items)

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = ['all', ...menu.map(c => c.category)]

  const filteredMenu = activeCategory === 'all'
    ? menu
    : menu.filter(c => c.category === activeCategory)

  return (
    <main style={{ maxWidth: '680px', margin: '0 auto', padding: '2rem 1rem 6rem' }}>

      {/* Header del restaurante */}
      <header style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div style={{
          width: '60px',
          height: '3px',
          background: 'var(--accent)',
          margin: '0 auto 1.25rem',
          borderRadius: '99px',
        }} />
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 6vw, 2.8rem)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          color: 'var(--text-primary)',
          lineHeight: 1.1,
        }}>
          {restaurant.name}
        </h1>
        <p style={{
          color: 'var(--text-muted)',
          fontSize: '0.9rem',
          marginTop: '0.5rem',
          fontStyle: 'italic',
        }}>
          {restaurant.tagline}
        </p>
        <div style={{
          width: '60px',
          height: '3px',
          background: 'var(--accent)',
          margin: '1.25rem auto 0',
          borderRadius: '99px',
        }} />
      </header>

      {/* Buscador inteligente */}
      <SmartSearch allItems={allItems} />

      {/* Separador */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginBottom: '2rem',
      }}>
        <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', whiteSpace: 'nowrap' }}>
          MENÚ COMPLETO
        </span>
        <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
      </div>

      {/* Filtros por categoría */}
      <div style={{
        display: 'flex',
        gap: '0.5rem',
        overflowX: 'auto',
        marginBottom: '2rem',
        paddingBottom: '0.25rem',
      }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              background: activeCategory === cat ? 'var(--accent)' : 'var(--bg-card)',
              color: activeCategory === cat ? '#0f0e0c' : 'var(--text-secondary)',
              border: `1px solid ${activeCategory === cat ? 'var(--accent)' : 'var(--border)'}`,
              borderRadius: '99px',
              padding: '0.4rem 1rem',
              fontSize: '0.82rem',
              fontFamily: 'var(--font-body)',
              fontWeight: activeCategory === cat ? 500 : 400,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s',
            }}
          >
            {cat === 'all' ? 'Todo' : cat}
          </button>
        ))}
      </div>

      {/* Menú por categorías */}
      {filteredMenu.map(category => (
        <section key={category.category} style={{ marginBottom: '2.5rem' }}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.2rem',
            color: 'var(--accent)',
            marginBottom: '1rem',
            paddingBottom: '0.5rem',
            borderBottom: '1px solid var(--border)',
          }}>
            {category.category}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {category.items.map(item => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        </section>
      ))}

      {/* Footer */}
      <footer style={{ textAlign: 'center', marginTop: '3rem' }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>
          Menú digital por{' '}
          <span style={{ color: 'var(--accent)' }}>SmartMenu</span>
          {' '}— Precios en USD, IVA incluido
        </p>
      </footer>

      {/* Panel de analytics */}
      <AnalyticsDashboard />
    </main>
  )
}

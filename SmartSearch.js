/* ============================================
   COMPONENTE: SmartSearch
   El buscador inteligente con recomendaciones.
   Sin IA, sin costos — lógica propia.
   ============================================ */

'use client'

import { useState } from 'react'
import { getRecommendations, buildResponse } from '@/lib/recommender'
import MenuItem from './MenuItem'

export default function SmartSearch({ allItems }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState(null)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  function handleSearch(e) {
    e.preventDefault()
    if (!query.trim()) return

    setLoading(true)

    // Simula un pequeño delay para que no se sienta instantáneo
    setTimeout(() => {
      const recs = getRecommendations(query, allItems)
      const msg = buildResponse(recs, query)
      setResults(recs)
      setMessage(msg)
      setLoading(false)
    }, 400)
  }

  function handleReset() {
    setQuery('')
    setResults(null)
    setMessage('')
  }

  const quickSearches = [
    "Algo vegetariano",
    "Lo más popular",
    "Sin gluten",
    "Un postre",
    "Mariscos",
  ]

  return (
    <div style={{ marginBottom: '3rem' }}>
      {/* Título del buscador */}
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.4rem',
          color: 'var(--text-primary)',
          marginBottom: '0.4rem',
        }}>
          ¿Qué te apetece hoy?
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          Dinos qué buscas y te recomendamos algo
        </p>
      </div>

      {/* Input de búsqueda */}
      <form onSubmit={handleSearch} style={{ display: 'flex', gap: '0.6rem', marginBottom: '1rem' }}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Ej: algo ligero y sin carne..."
          style={{
            flex: 1,
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-sm)',
            color: 'var(--text-primary)',
            padding: '0.75rem 1rem',
            fontSize: '0.9rem',
            fontFamily: 'var(--font-body)',
            outline: 'none',
            transition: 'border-color 0.2s',
          }}
          onFocus={e => e.target.style.borderColor = 'var(--accent)'}
          onBlur={e => e.target.style.borderColor = 'var(--border)'}
        />
        <button
          type="submit"
          disabled={loading || !query.trim()}
          style={{
            background: 'var(--accent)',
            color: '#0f0e0c',
            border: 'none',
            borderRadius: 'var(--radius-sm)',
            padding: '0.75rem 1.25rem',
            fontFamily: 'var(--font-body)',
            fontWeight: 500,
            fontSize: '0.9rem',
            cursor: loading || !query.trim() ? 'not-allowed' : 'pointer',
            opacity: loading || !query.trim() ? 0.6 : 1,
            transition: 'opacity 0.2s',
            whiteSpace: 'nowrap',
          }}
        >
          {loading ? '...' : 'Buscar'}
        </button>
      </form>

      {/* Búsquedas rápidas */}
      {!results && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {quickSearches.map(q => (
            <button
              key={q}
              onClick={() => {
                setQuery(q)
                const recs = getRecommendations(q, allItems)
                setResults(recs)
                setMessage(buildResponse(recs, q))
              }}
              style={{
                background: 'transparent',
                border: '1px solid var(--border)',
                borderRadius: '99px',
                color: 'var(--text-secondary)',
                padding: '0.35rem 0.85rem',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-body)',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                e.target.style.borderColor = 'var(--accent)'
                e.target.style.color = 'var(--accent)'
              }}
              onMouseLeave={e => {
                e.target.style.borderColor = 'var(--border)'
                e.target.style.color = 'var(--text-secondary)'
              }}
            >
              {q}
            </button>
          ))}
        </div>
      )}

      {/* Resultados */}
      {results && (
        <div>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '1.25rem 0 1rem',
          }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              {message}
            </p>
            <button
              onClick={handleReset}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-muted)',
                fontSize: '0.8rem',
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                textDecoration: 'underline',
              }}
            >
              Limpiar
            </button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {results.map(item => (
              <MenuItem key={item.id} item={item} highlight={true} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

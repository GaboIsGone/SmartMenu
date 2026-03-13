'use client'
import { useState } from 'react'
import { useLang } from '@/context/LanguageContext'
import { getRecommendations, getResponseType } from '@/lib/recommender'
import MenuItem from './MenuItem'

export default function SmartSearch({ allItems }) {
  const { t } = useLang()
  const [query, setQuery] = useState('')
  const [results, setResults] = useState(null)
  const [responseType, setResponseType] = useState('default')
  const [loading, setLoading] = useState(false)

  function doSearch(q) {
    setLoading(true)
    setTimeout(() => {
      const recs = getRecommendations(q, allItems)
      setResults(recs)
      setResponseType(getResponseType(q))
      setLoading(false)
    }, 350)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!query.trim()) return
    doSearch(query)
  }

  function handleQuick(q) {
    setQuery(q)
    doSearch(q)
  }

  function handleReset() {
    setQuery('')
    setResults(null)
  }

  function getMessage() {
    if (!results) return ''
    const count = results.length
    if (responseType === 'veg') return `${count} ${t.search.responseVeg}`
    if (responseType === 'dessert') return t.search.responseDessert
    if (responseType === 'popular') return t.search.responsePopular
    return t.search.responseDefault
  }

  return (
    <div style={{ marginBottom: '3rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.5rem',
          color: 'var(--text-primary)',
          marginBottom: '0.35rem',
        }}>
          {t.search.title}
        </h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          {t.search.subtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.6rem', marginBottom: '1rem' }}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder={t.search.placeholder}
          style={{
            flex: 1,
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-sm)',
            color: 'var(--text-primary)',
            padding: '0.8rem 1rem',
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
            padding: '0.8rem 1.25rem',
            fontFamily: 'var(--font-body)',
            fontWeight: 500,
            fontSize: '0.9rem',
            cursor: loading || !query.trim() ? 'not-allowed' : 'pointer',
            opacity: loading || !query.trim() ? 0.6 : 1,
            transition: 'opacity 0.2s',
            whiteSpace: 'nowrap',
          }}
        >
          {loading ? t.search.loading : t.search.button}
        </button>
      </form>

      {!results && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {t.search.quickSearches.map(q => (
            <button key={q} onClick={() => handleQuick(q)} style={{
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
            onMouseEnter={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.color = 'var(--accent)' }}
            onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--text-secondary)' }}
            >
              {q}
            </button>
          ))}
        </div>
      )}

      {results && (
        <div>
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', margin: '1.25rem 0 1rem',
          }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              {getMessage()}
            </p>
            <button onClick={handleReset} style={{
              background: 'transparent', border: 'none',
              color: 'var(--text-muted)', fontSize: '0.8rem',
              cursor: 'pointer', fontFamily: 'var(--font-body)',
              textDecoration: 'underline',
            }}>
              {t.search.clear}
            </button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {results.map(item => <MenuItem key={item.id} item={item} highlight />)}
          </div>
        </div>
      )}
    </div>
  )
}

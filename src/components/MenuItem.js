'use client'
import { useState } from 'react'
import { useLang } from '@/context/LanguageContext'

const tagColors = {
  popular: { bg: 'var(--accent-dim)', color: 'var(--accent)', border: 'rgba(212,168,90,0.3)' },
  default: { bg: '#1f1e1a', color: 'var(--text-muted)', border: 'var(--border)' },
}

const tagLabels = {
  es: {
    vegetariano: '🌿 Vegetariano', vegano: '🌱 Vegano', sin_gluten: '🌾 Sin gluten',
    popular: '⭐ Popular', picante: '🌶 Picante', mariscos: '🐟 Mar',
    carne: '🥩 Carne', pasta: '🍝 Pasta', postre: '🍰 Postre',
  },
  en: {
    vegetariano: '🌿 Vegetarian', vegano: '🌱 Vegan', sin_gluten: '🌾 Gluten-free',
    popular: '⭐ Popular', picante: '🌶 Spicy', mariscos: '🐟 Seafood',
    carne: '🥩 Meat', pasta: '🍝 Pasta', postre: '🍰 Dessert',
  },
}

export default function MenuItem({ item, highlight = false }) {
  const { t, lang } = useLang()
  const [imgError, setImgError] = useState(false)
  const labels = tagLabels[lang]

  return (
    <div style={{
      background: highlight ? 'var(--accent-dim)' : 'var(--bg-card)',
      border: `1px solid ${highlight ? 'var(--accent)' : 'var(--border)'}`,
      borderRadius: 'var(--radius)',
      overflow: 'hidden',
      opacity: item.available ? 1 : 0.45,
      transition: 'transform 0.2s, box-shadow 0.2s',
      position: 'relative',
      display: 'flex',
      cursor: item.available ? 'default' : 'not-allowed',
    }}
    onMouseEnter={e => { if (item.available) { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3)' }}}
    onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
    >
      {/* Image */}
      {item.image && !imgError ? (
        <div style={{
          width: '110px',
          minWidth: '110px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <img
            src={item.image}
            alt={item.name}
            onError={() => setImgError(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              filter: item.available ? 'none' : 'grayscale(100%)',
            }}
          />
        </div>
      ) : (
        <div style={{
          width: '90px',
          minWidth: '90px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2.2rem',
          background: 'var(--bg)',
        }}>
          {item.emoji}
        </div>
      )}

      {/* Content */}
      <div style={{ padding: '1rem 1.1rem', flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1rem',
            fontWeight: 600,
            color: 'var(--text-primary)',
            lineHeight: 1.2,
          }}>
            {item.name}
          </h3>
          <span style={{
            color: 'var(--accent)',
            fontWeight: 500,
            fontSize: '1rem',
            whiteSpace: 'nowrap',
          }}>
            ${item.price}
          </span>
        </div>

        <p style={{
          color: 'var(--text-secondary)',
          fontSize: '0.82rem',
          marginTop: '0.3rem',
          lineHeight: 1.5,
        }}>
          {item.description}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.6rem' }}>
          {item.tags.map(tag => {
            const style = tagColors[tag === 'popular' ? 'popular' : 'default']
            return (
              <span key={tag} style={{
                fontSize: '0.68rem',
                padding: '0.18rem 0.5rem',
                borderRadius: '99px',
                background: style.bg,
                color: style.color,
                border: `1px solid ${style.border}`,
              }}>
                {labels[tag] ?? tag}
              </span>
            )
          })}
          {!item.available && (
            <span style={{
              fontSize: '0.68rem', padding: '0.18rem 0.5rem',
              borderRadius: '99px', background: '#1f1e1a',
              color: '#666', border: '1px solid var(--border)',
            }}>
              {t.menu.unavailable}
            </span>
          )}
        </div>
      </div>

      {highlight && (
        <div style={{
          position: 'absolute', top: '-1px', right: '1rem',
          background: 'var(--accent)', color: '#0f0e0c',
          fontSize: '0.62rem', fontWeight: 600,
          padding: '0.18rem 0.55rem',
          borderRadius: '0 0 6px 6px',
          letterSpacing: '0.06em', textTransform: 'uppercase',
        }}>
          {t.menu.recommended}
        </div>
      )}
    </div>
  )
}

/* ============================================
   COMPONENTE: MenuItem
   Tarjeta individual de cada plato.
   ============================================ */

'use client'

const tagLabels = {
  vegetariano: "🌿 Vegetariano",
  vegano: "🌱 Vegano",
  sin_gluten: "🌾 Sin gluten",
  popular: "⭐ Popular",
  picante: "🌶 Picante",
  mariscos: "🐟 Mar",
  carne: "🥩 Carne",
  pasta: "🍝 Pasta",
  postre: "🍰 Postre",
}

export default function MenuItem({ item, highlight = false }) {
  return (
    <div
      className="menu-item"
      style={{
        background: highlight ? 'var(--accent-dim)' : 'var(--bg-card)',
        border: `1px solid ${highlight ? 'var(--accent)' : 'var(--border)'}`,
        borderRadius: 'var(--radius)',
        padding: '1.25rem',
        opacity: item.available ? 1 : 0.45,
        transition: 'all 0.2s ease',
        position: 'relative',
        cursor: item.available ? 'default' : 'not-allowed',
      }}
    >
      {/* Emoji + nombre + precio */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
        <span style={{ fontSize: '1.8rem', lineHeight: 1 }}>{item.emoji}</span>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.05rem',
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
              marginLeft: '1rem',
              whiteSpace: 'nowrap',
            }}>
              ${item.price}
            </span>
          </div>

          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '0.85rem',
            marginTop: '0.35rem',
            lineHeight: 1.5,
          }}>
            {item.description}
          </p>

          {/* Etiquetas */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.75rem' }}>
            {item.tags.map(tag => (
              <span key={tag} style={{
                fontSize: '0.7rem',
                padding: '0.2rem 0.55rem',
                borderRadius: '99px',
                background: tag === 'popular' ? 'var(--accent-dim)' : '#1f1e1a',
                color: tag === 'popular' ? 'var(--accent)' : 'var(--text-muted)',
                border: `1px solid ${tag === 'popular' ? 'rgba(212,168,90,0.3)' : 'var(--border)'}`,
              }}>
                {tagLabels[tag] ?? tag}
              </span>
            ))}
            {!item.available && (
              <span style={{
                fontSize: '0.7rem',
                padding: '0.2rem 0.55rem',
                borderRadius: '99px',
                background: '#1f1e1a',
                color: '#666',
                border: '1px solid var(--border)',
              }}>
                No disponible hoy
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Indicador de recomendado */}
      {highlight && (
        <div style={{
          position: 'absolute',
          top: '-1px',
          right: '1rem',
          background: 'var(--accent)',
          color: '#0f0e0c',
          fontSize: '0.65rem',
          fontWeight: 600,
          padding: '0.2rem 0.6rem',
          borderRadius: '0 0 6px 6px',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
        }}>
          Recomendado
        </div>
      )}
    </div>
  )
}

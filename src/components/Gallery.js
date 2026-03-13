'use client'
import { useState } from 'react'
import { useLang } from '@/context/LanguageContext'
import { restaurant } from '@/lib/menuData'

export default function Gallery() {
  const { t } = useLang()
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="gallery" style={{
      padding: '6rem 1.5rem',
      maxWidth: '1100px',
      margin: '0 auto',
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <span style={{
          color: 'var(--accent)',
          fontSize: '0.75rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
        }}>
          — {t.gallery.badge}
        </span>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          marginTop: '0.75rem',
          letterSpacing: '-0.02em',
        }}>
          {t.gallery.title}
        </h2>
      </div>

      {/* Masonry-style grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '1rem',
      }}>
        {restaurant.gallery.map((photo, i) => (
          <div
            key={i}
            onClick={() => setLightbox(photo)}
            style={{
              position: 'relative',
              aspectRatio: i % 3 === 0 ? '4/5' : '16/10',
              overflow: 'hidden',
              borderRadius: 'var(--radius)',
              cursor: 'pointer',
              background: 'var(--bg-card)',
            }}
          >
            <img
              src={photo.src}
              alt={photo.caption}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transition: 'transform 0.4s ease, filter 0.4s ease',
              }}
              onMouseEnter={e => { e.target.style.transform = 'scale(1.06)'; e.target.style.filter = 'brightness(1.1)' }}
              onMouseLeave={e => { e.target.style.transform = 'scale(1)'; e.target.style.filter = 'brightness(1)' }}
            />
            {/* Caption overlay */}
            <div style={{
              position: 'absolute',
              bottom: 0, left: 0, right: 0,
              padding: '1.5rem 1rem 0.75rem',
              background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
              color: 'var(--text-secondary)',
              fontSize: '0.8rem',
              opacity: 0,
              transition: 'opacity 0.3s',
              pointerEvents: 'none',
            }}
            className="caption-overlay"
            >
              {photo.caption}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 500,
            background: 'rgba(0,0,0,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            cursor: 'zoom-out',
          }}
        >
          <div onClick={e => e.stopPropagation()} style={{ position: 'relative', maxWidth: '90vw', maxHeight: '90vh' }}>
            <img
              src={lightbox.src}
              alt={lightbox.caption}
              style={{
                maxWidth: '90vw',
                maxHeight: '85vh',
                objectFit: 'contain',
                borderRadius: 'var(--radius)',
                display: 'block',
              }}
            />
            <p style={{
              textAlign: 'center',
              color: 'var(--text-secondary)',
              fontSize: '0.85rem',
              marginTop: '0.75rem',
              fontStyle: 'italic',
            }}>
              {lightbox.caption}
            </p>
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: 'absolute',
                top: '-1rem',
                right: '-1rem',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                color: 'var(--text-primary)',
                fontSize: '1rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <style>{`
        div:hover .caption-overlay { opacity: 1 !important; }
      `}</style>
    </section>
  )
}

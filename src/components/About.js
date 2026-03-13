'use client'
import { useLang } from '@/context/LanguageContext'
import { restaurant } from '@/lib/menuData'

export default function About() {
  const { t } = useLang()
  const a = t.about

  return (
    <section id="about" style={{
      padding: '6rem 1.5rem',
      maxWidth: '1100px',
      margin: '0 auto',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '4rem',
        alignItems: 'center',
      }}>
        {/* Image */}
        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute',
            inset: '-12px',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius)',
            opacity: 0.5,
          }} />
          <img
            src={restaurant.aboutImage}
            alt="Nuestro equipo"
            style={{
              width: '100%',
              aspectRatio: '4/5',
              objectFit: 'cover',
              borderRadius: 'var(--radius)',
              display: 'block',
              filter: 'brightness(0.85) sepia(0.1)',
            }}
          />
          {/* Decorative accent line */}
          <div style={{
            position: 'absolute',
            bottom: '-1.5rem',
            left: '1.5rem',
            right: '-1.5rem',
            height: '3px',
            background: 'var(--accent)',
            borderRadius: '99px',
            opacity: 0.6,
          }} />
        </div>

        {/* Text */}
        <div>
          <span style={{
            display: 'inline-block',
            color: 'var(--accent)',
            fontSize: '0.75rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>
            — {a.badge}
          </span>

          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: 700,
            color: 'var(--text-primary)',
            lineHeight: 1.15,
            marginBottom: '1.5rem',
            letterSpacing: '-0.02em',
          }}>
            {a.title}
          </h2>

          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '0.95rem',
            lineHeight: 1.8,
            marginBottom: '1rem',
          }}>
            {a.p1}
          </p>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '0.95rem',
            lineHeight: 1.8,
            marginBottom: '2.5rem',
          }}>
            {a.p2}
          </p>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border)',
          }}>
            {[a.stat1, a.stat2, a.stat3].map((s, i) => (
              <div key={i}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: 'var(--accent)',
                  lineHeight: 1,
                }}>
                  {s.value}
                </div>
                <div style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.78rem',
                  marginTop: '0.3rem',
                  lineHeight: 1.4,
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

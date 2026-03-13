'use client'
import { useLang } from '@/context/LanguageContext'
import { restaurant } from '@/lib/menuData'

export default function Hero() {
  const { t } = useLang()

  return (
    <section id="hero" style={{
      position: 'relative',
      height: '100vh',
      minHeight: '600px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>
      {/* Background image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${restaurant.heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(0.35)',
        transform: 'scale(1.05)',
      }} />

      {/* Gradient overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(15,14,12,0.2) 0%, rgba(15,14,12,0.5) 60%, rgba(15,14,12,1) 100%)',
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        textAlign: 'center',
        padding: '0 1.5rem',
        maxWidth: '700px',
        animation: 'fadeUp 0.8s ease both',
      }}>
        {/* Badge */}
        <div style={{
          display: 'inline-block',
          background: 'var(--accent-dim)',
          border: '1px solid rgba(212,168,90,0.3)',
          borderRadius: '99px',
          color: 'var(--accent)',
          fontSize: '0.75rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          padding: '0.4rem 1rem',
          marginBottom: '1.5rem',
          animation: 'fadeUp 0.8s ease 0.1s both',
        }}>
          {t.hero.badge}
        </div>

        {/* Title */}
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3.5rem, 12vw, 7rem)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          lineHeight: 0.95,
          letterSpacing: '-0.03em',
          marginBottom: '1.5rem',
          whiteSpace: 'pre-line',
          animation: 'fadeUp 0.8s ease 0.2s both',
        }}>
          {t.hero.title}
        </h1>

        {/* Subtitle */}
        <p style={{
          color: 'var(--text-secondary)',
          fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
          lineHeight: 1.6,
          marginBottom: '2.5rem',
          animation: 'fadeUp 0.8s ease 0.3s both',
        }}>
          {t.hero.subtitle}
        </p>

        {/* CTAs */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          animation: 'fadeUp 0.8s ease 0.4s both',
        }}>
          <a href="#menu" style={{
            background: 'var(--accent)',
            color: '#0f0e0c',
            padding: '0.85rem 2rem',
            borderRadius: 'var(--radius-sm)',
            textDecoration: 'none',
            fontWeight: 500,
            fontSize: '0.9rem',
            letterSpacing: '0.02em',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => e.target.style.opacity = '0.85'}
          onMouseLeave={e => e.target.style.opacity = '1'}
          >
            {t.hero.cta}
          </a>
          <a href="#contact" style={{
            background: 'transparent',
            color: 'var(--text-primary)',
            padding: '0.85rem 2rem',
            borderRadius: 'var(--radius-sm)',
            textDecoration: 'none',
            fontWeight: 400,
            fontSize: '0.9rem',
            border: '1px solid var(--border)',
            transition: 'border-color 0.2s',
          }}
          onMouseEnter={e => e.target.style.borderColor = 'var(--accent)'}
          onMouseLeave={e => e.target.style.borderColor = 'var(--border)'}
          >
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
        animation: 'bounce 2s infinite',
      }}>
        <div style={{ width: '1px', height: '40px', background: 'var(--border)' }} />
        <span style={{ color: 'var(--text-muted)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>scroll</span>
      </div>
    </section>
  )
}

'use client'
import { useState, useEffect } from 'react'
import { useLang } from '@/context/LanguageContext'

export default function Navbar() {
  const { t, lang, setLang } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = [
    { label: t.nav.menu, href: '#menu' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.gallery, href: '#gallery' },
    { label: t.nav.contact, href: '#contact' },
  ]

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 200,
      padding: '0 1.5rem',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: scrolled ? 'rgba(15,14,12,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      {/* Logo */}
      <a href="#hero" style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1.15rem',
        fontWeight: 700,
        color: 'var(--accent)',
        textDecoration: 'none',
        letterSpacing: '-0.01em',
      }}>
        B&O
      </a>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
        {links.map(l => (
          <a key={l.href} href={l.href} style={{
            color: 'var(--text-secondary)',
            textDecoration: 'none',
            fontSize: '0.85rem',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.target.style.color = 'var(--accent)'}
          onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
          >
            {l.label}
          </a>
        ))}

        {/* Language switcher */}
        <button
          onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '99px',
            color: 'var(--text-secondary)',
            padding: '0.3rem 0.75rem',
            fontSize: '0.75rem',
            fontFamily: 'var(--font-body)',
            cursor: 'pointer',
            letterSpacing: '0.05em',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.target.style.borderColor = 'var(--accent)'; e.target.style.color = 'var(--accent)' }}
          onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--text-secondary)' }}
        >
          {lang === 'es' ? 'EN' : 'ES'}
        </button>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="mobile-nav-btn"
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--text-primary)',
          fontSize: '1.3rem',
          cursor: 'pointer',
          display: 'none',
        }}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          position: 'absolute',
          top: '64px',
          left: 0, right: 0,
          background: 'rgba(15,14,12,0.98)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '1rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}>
              {l.label}
            </a>
          ))}
          <button
            onClick={() => { setLang(lang === 'es' ? 'en' : 'es'); setMenuOpen(false) }}
            style={{
              background: 'none',
              border: '1px solid var(--border)',
              borderRadius: '99px',
              color: 'var(--text-secondary)',
              padding: '0.4rem 1rem',
              fontFamily: 'var(--font-body)',
              cursor: 'pointer',
              width: 'fit-content',
            }}>
            {lang === 'es' ? '🇺🇸 English' : '🇪🇸 Español'}
          </button>
        </div>
      )}
    </nav>
  )
}

'use client'

import { useState } from 'react'
import { useLang } from '@/context/LanguageContext'
import { menu } from '@/lib/menuData'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import MenuItem from '@/components/MenuItem'
import SmartSearch from '@/components/SmartSearch'
import About from '@/components/About'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Analytics from '@/components/Analytics'

const allItems = menu.flatMap(cat => cat.items)

function MenuSection() {
  const { t } = useLang()
  const [activeCategory, setActiveCategory] = useState('all')
  const categories = ['all', ...menu.map(c => c.category)]
  const filtered = activeCategory === 'all' ? menu : menu.filter(c => c.category === activeCategory)

  return (
    <section id="menu" style={{ padding: '5rem 1.5rem', maxWidth: '780px', margin: '0 auto' }}>
      {/* Section header */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <span style={{
          color: 'var(--accent)',
          fontSize: '0.75rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
        }}>
          — {t.menu.title}
        </span>
      </div>

      {/* Smart search */}
      <SmartSearch allItems={allItems} />

      {/* Divider */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        <span style={{ color: 'var(--text-muted)', fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
          {t.menu.title}
        </span>
        <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
      </div>

      {/* Category filters */}
      <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', marginBottom: '2rem', paddingBottom: '0.25rem' }}>
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
            {cat === 'all' ? t.menu.all : cat}
          </button>
        ))}
      </div>

      {/* Menu items */}
      {filtered.map(category => (
        <div key={category.category} style={{ marginBottom: '2.5rem' }}>
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
            {category.items.map(item => <MenuItem key={item.id} item={item} />)}
          </div>
        </div>
      ))}
    </section>
  )
}

function Footer() {
  const { t } = useLang()
  return (
    <footer style={{
      padding: '3rem 1.5rem',
      textAlign: 'center',
      borderTop: '1px solid var(--border)',
    }}>
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1.5rem',
        color: 'var(--accent)',
        marginBottom: '0.5rem',
      }}>
        B&O
      </div>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
        {t.footer.tagline}
      </p>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>
        © {new Date().getFullYear()} Brasa & Oliva. {t.footer.rights}
        {' '} · {t.footer.poweredBy}{' '}
        <span style={{ color: 'var(--accent)' }}>SmartMenu</span>
      </p>
    </footer>
  )
}

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MenuSection />
      <About />
      <Gallery />
      <Contact />
      <Footer />
      <Analytics />
    </main>
  )
}

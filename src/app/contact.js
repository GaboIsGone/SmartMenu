'use client'
import { useState } from 'react'
import { useLang } from '@/context/LanguageContext'

export default function Contact() {
  const { t } = useLang()
  const c = t.contact
  const [form, setForm] = useState({ name: '', date: '', guests: '2', notes: '' })
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // Aquí conectas tu backend o Supabase para enviar la reserva
    setSent(true)
  }

  const inputStyle = {
    width: '100%',
    background: 'var(--bg-card)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius-sm)',
    color: 'var(--text-primary)',
    padding: '0.8rem 1rem',
    fontSize: '0.9rem',
    fontFamily: 'var(--font-body)',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  }

  const labelStyle = {
    color: 'var(--text-muted)',
    fontSize: '0.75rem',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    display: 'block',
    marginBottom: '0.4rem',
  }

  return (
    <section id="contact" style={{
      padding: '6rem 1.5rem',
      background: 'var(--bg-card)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{
            color: 'var(--accent)',
            fontSize: '0.75rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}>
            — {c.badge}
          </span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginTop: '0.75rem',
            letterSpacing: '-0.02em',
          }}>
            {c.title}
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '4rem',
        }}>

          {/* Info column */}
          <div>
            {/* Hours */}
            <div style={{ marginBottom: '2.5rem' }}>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                color: 'var(--text-primary)',
                marginBottom: '1rem',
              }}>
                {c.hours}
              </h3>
              {c.hoursData.map((h, i) => (
                <div key={i} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '0.6rem 0',
                  borderBottom: '1px solid var(--border)',
                  gap: '1rem',
                }}>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>{h.day}</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textAlign: 'right' }}>{h.time}</span>
                </div>
              ))}
            </div>

            {/* Contact info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { label: c.address, value: c.addressVal, icon: '📍' },
                { label: c.phone, value: c.phoneVal, icon: '📞' },
                { label: c.email, value: c.emailVal, icon: '✉️' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1rem', marginTop: '0.1rem' }}>{item.icon}</span>
                  <div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                      {item.label}
                    </div>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form column */}
          <div>
            {sent ? (
              <div style={{
                background: 'var(--accent-dim)',
                border: '1px solid rgba(212,168,90,0.4)',
                borderRadius: 'var(--radius)',
                padding: '2rem',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>✓</div>
                <p style={{ color: 'var(--accent)', fontFamily: 'var(--font-display)', fontSize: '1.1rem' }}>
                  {c.formSuccess}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <div>
                  <label style={labelStyle}>{c.formName}</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={labelStyle}>{c.formDate}</label>
                    <input
                      type="date"
                      required
                      value={form.date}
                      onChange={e => setForm({ ...form, date: e.target.value })}
                      style={{ ...inputStyle, colorScheme: 'dark' }}
                      onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>{c.formGuests}</label>
                    <select
                      value={form.guests}
                      onChange={e => setForm({ ...form, guests: e.target.value })}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                      onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    >
                      {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>{c.formNotes}</label>
                  <textarea
                    rows={3}
                    value={form.notes}
                    onChange={e => setForm({ ...form, notes: e.target.value })}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>

                <button type="submit" style={{
                  background: 'var(--accent)',
                  color: '#0f0e0c',
                  border: 'none',
                  borderRadius: 'var(--radius-sm)',
                  padding: '0.9rem',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  transition: 'opacity 0.2s',
                  letterSpacing: '0.02em',
                }}
                onMouseEnter={e => e.target.style.opacity = '0.85'}
                onMouseLeave={e => e.target.style.opacity = '1'}
                >
                  {c.formSubmit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

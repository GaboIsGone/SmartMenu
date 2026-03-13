/* ============================================
   COMPONENTE: Analytics
   Tracker simple en memoria.
   (Conectar a Supabase para persistencia real)
   ============================================ */

'use client'

import { useState, useEffect } from 'react'

// Estado global en memoria (se reinicia al recargar)
// Para producción: reemplaza con llamadas a Supabase
let globalStats = {
  scans: 1,
  searches: 0,
  topItems: {},
}

export function trackSearch(query) {
  globalStats.searches++
}

export function trackItemView(itemName) {
  globalStats.topItems[itemName] = (globalStats.topItems[itemName] || 0) + 1
}

export default function AnalyticsDashboard() {
  const [stats, setStats] = useState(globalStats)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setStats({ ...globalStats })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const topItems = Object.entries(stats.topItems)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)

  return (
    <div style={{ position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 100 }}>
      {/* Botón flotante */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: '99px',
          color: 'var(--text-secondary)',
          padding: '0.6rem 1rem',
          fontSize: '0.8rem',
          fontFamily: 'var(--font-body)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
        }}
      >
        📊 {open ? 'Cerrar stats' : 'Ver analytics'}
      </button>

      {/* Panel de stats */}
      {open && (
        <div style={{
          position: 'absolute',
          bottom: '3rem',
          right: 0,
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          padding: '1.25rem',
          minWidth: '220px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
        }}>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1rem',
            color: 'var(--text-primary)',
            marginBottom: '1rem',
          }}>
            Analytics del menú
          </h3>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <StatRow label="Escaneos QR" value={stats.scans} />
            <StatRow label="Búsquedas" value={stats.searches} />

            {topItems.length > 0 && (
              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginBottom: '0.5rem' }}>
                  Platos más buscados
                </p>
                {topItems.map(([name, count]) => (
                  <div key={name} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '0.8rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '0.25rem',
                  }}>
                    <span>{name}</span>
                    <span style={{ color: 'var(--accent)' }}>{count}x</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <p style={{
            color: 'var(--text-muted)',
            fontSize: '0.7rem',
            marginTop: '1rem',
            borderTop: '1px solid var(--border)',
            paddingTop: '0.75rem',
          }}>
            Conecta Supabase para persistencia real
          </p>
        </div>
      )}
    </div>
  )
}

function StatRow({ label, value }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{label}</span>
      <span style={{ color: 'var(--accent)', fontWeight: 500 }}>{value}</span>
    </div>
  )
}

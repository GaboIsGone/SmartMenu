import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'

export const metadata = {
  title: 'Brasa & Oliva — Cocina mediterránea',
  description: 'Menú digital con reservas online.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}

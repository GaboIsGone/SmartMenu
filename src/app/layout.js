import './globals.css'

export const metadata = {
  title: 'SmartMenu',
  description: 'Menú digital inteligente',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}

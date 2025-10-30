import './globals.css'
import React from 'react'

export const metadata = {
  title: 'Portafolio - Manuel',
  description: 'Portafolio personal construido con Next.js y Tailwind'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-white text-slate-900 transition-colors">
        {children}
      </body>
    </html>
  )
}

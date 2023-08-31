import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Marília e Lucas',
  description: 'Nosso casamento',
  authors: [
    {
      name: 'Leonardo Nascimento Cintra',
      url: 'https://twitter.com/leonardoncintra'
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}

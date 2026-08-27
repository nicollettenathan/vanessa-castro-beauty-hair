import './globals.css'
import './cta.css'

export const metadata = {
  title: 'Vanessa Castro Beauty Hair',
  description: 'Especialista em loiros, mechas e alisamentos em São Carlos - SP.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}

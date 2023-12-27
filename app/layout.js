import './globals.css'

export const metadata = {
  title: 'Subham\'s Portfolio',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}

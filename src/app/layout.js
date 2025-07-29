import './globals.css'

export const metadata = {
  title: 'SIJA BRIGHT - Official Website',
  description: 'SIJA B\'27 - SMK Negeri 2 Depok (STEMBAYO)',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
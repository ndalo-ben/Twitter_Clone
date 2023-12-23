import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Twitter Clone</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name='og:title' content='Twitter Clone'/>
        <meta name='og:description' content='Twitter Clone'/>
      </head>
      <body>{children}</body>
    </html>
  )
}

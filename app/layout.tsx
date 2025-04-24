import type { Metadata } from 'next'
import './globals.css'
import Cursor from './cursor'
import ServiceWorkerRegistration from './serviceworker'


export const metadata: Metadata = {
  title: "It's Mine",
  description: 'Personal Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fondamento:ital@0;1&display=swap" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/Mine-main/icon.png" type="image/x-icon" />
      </head>
      <body>
        <Cursor />
        <ServiceWorkerRegistration />
        {children}
      </body>
    </html>
  )
}

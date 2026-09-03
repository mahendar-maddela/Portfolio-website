import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  title: 'Mahendar Maddela - Full Stack Developer',
  description: 'Backend engineering portfolio showcasing enterprise APIs, cloud infrastructure, and full-stack solutions.',
  generator: 'Mahendar Maddela',
  keywords: ['Backend Engineer', 'Full Stack Developer', 'Software Engineer', 'Node.js', 'APIs', 'Cloud Infrastructure', 'AWS', 'PostgreSQL'],
  authors: [{ name: 'Mahendar Maddela' }],
  openGraph: {
    title: 'Mahendar Maddela - Software Engineer',
    description: 'Backend engineering portfolio showcasing enterprise APIs, cloud infrastructure, and full-stack solutions.',
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },

}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0F0F0F' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-[#0F0F0F] text-white overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  )
}

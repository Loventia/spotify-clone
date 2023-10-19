import Sidebar from '@/components/Sidebar';
import './globals.css'
import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import SupabaseProvider from '@/providers/SupabaseProviders';

const font = Figtree({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Spotify clone',
  description: 'stream music!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SupabaseProvider> 
      <Sidebar>
      {children}
      </Sidebar>
      </SupabaseProvider>
      </body>
    </html>
  )
}


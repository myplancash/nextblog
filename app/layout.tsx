// RootLayout.jsx
import './globals.css'
import Navbar from './components/Navbar'
import MyProfilePic from './components/MyProfilePic'
import { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: {
    template: '%s | Sergio Esteban Torres Blog',
    default: 'Sergio Esteban Torres',
  },
  description: 'The official Sergio&apos; blog, built with Next.js.',
  metadataBase: new URL('https://nextblog-flame-two.vercel.app'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} antialiased dark:bg-slate-800`}>
        <Navbar />
        <main>{children}</main>
        <footer className="flex justify-center items-center py-8">
          {/* Your profile picture */}
        </footer>
      </body>
    </html>
  )
}

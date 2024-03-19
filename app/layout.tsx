// RootLayout.jsx
import './globals.css'
import Navbar from './components/Navbar'
import MyProfilePic from './components/MyProfilePic'

export const metadata = {
  title: "Sergio's Blog",
  description: 'Created by Sergio Torres',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar />
        <main>{children}</main>
        <footer className="flex justify-center items-center py-8">
          {/* Your profile picture */}
          <MyProfilePic />
        </footer>
      </body>
    </html>
  )
}

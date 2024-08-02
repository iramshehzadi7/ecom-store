import './globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'E-commerce Website',
  description: 'An e-commerce website for clothes',
}

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="p-4">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout


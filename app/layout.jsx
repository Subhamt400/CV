import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Developer Portfolio',
  description: 'Minimal developer portfolio - dark by default'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        {/* suppressHydrationWarning prevents a noisy runtime error when browser extensions
            (e.g. Grammarly) inject attributes on the client that weren't present in the
            server-rendered HTML. This keeps the app usable during development. */}
        <body suppressHydrationWarning className="min-h-screen">
        <div className="container">
          <Navbar />
          <main className="mt-12">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

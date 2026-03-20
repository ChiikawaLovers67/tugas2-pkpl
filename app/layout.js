import "./globals.css"
import Navbar from "@/components/Navbar"
import SessionWrapper from "@/components/SessionWrapper"
import FontPanel from "@/components/FontPanel"

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <SessionWrapper>
          <Navbar />
          {children}
        </SessionWrapper>
      </body>
    </html>
  )
}
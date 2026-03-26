import "./globals.css"
import Navbar from "@/components/Navbar"
import SessionWrapper from "@/components/SessionWrapper"
import PreferencesHydrator from "@/components/PreferencesHydrator"

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <SessionWrapper>
          <PreferencesHydrator />
          <Navbar />
          {children}
        </SessionWrapper>
      </body>
    </html>
  )
}

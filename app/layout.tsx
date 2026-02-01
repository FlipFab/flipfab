import "./globals.css"
import Navbar from "@/components/Navbar"
import ForYouSidebar from "@/components/ForYouSidebar"

export const metadata = {
  title: "FlipFab",
  description: "Flip your style"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <ForYouSidebar />
        {children}
      </body>
    </html>
  )
}

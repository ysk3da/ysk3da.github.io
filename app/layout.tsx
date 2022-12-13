import '../styles/globals.css'; // for Tailwind
import TheHeader from "../components/TheHeader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <TheHeader/>
        {children}
      </body>
    </html>
  )
}

import '../styles/globals.css'; // for Tailwind
import TheHeader from "../components/TheHeader";
import TheFooter from "../components/TheFooter";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='ja'>
      <head />
      <body>
        <div className='flex flex-col min-h-screen'>
          <TheHeader/>
          {children}
          <TheFooter/>
        </div>
      </body>
    </html>
  )
}

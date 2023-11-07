import Footer from "./Footer";
import Navbar from "./Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <Navbar />
      <body>{children}</body>
      <Footer />
    </html>
  )
}
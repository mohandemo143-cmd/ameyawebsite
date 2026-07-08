import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function RootLayout({ children }) {
  return (
    <html 
      lang="en" 
      className="scroll-smooth" 
      data-scroll-behavior="smooth"
    >
      {/* By keeping these tags free of background utility classes (like bg-white), 
        the atmospheric background gradient we set in global.css will successfully 
        bleed through the entire application. 
      */}
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
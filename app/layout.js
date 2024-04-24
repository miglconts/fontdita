import { JetBrains_Mono, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/ui/Header";
import Footer from "@/ui/Footer";
import { CartProvider } from "@/app/context/CartContext";

const sans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  title: "FontDita",
  description: "Tu blog de confianza",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-background font-sans antialiased flex flex-col justify-between ${sans.variable}`}
      >
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

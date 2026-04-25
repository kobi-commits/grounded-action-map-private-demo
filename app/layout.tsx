import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PrototypeBanner } from "@/components/PrototypeBanner";

export const metadata: Metadata = {
  title: "Grounded Action Map: Gaza V1",
  description: "A sourced humanitarian foresight and responsible action dashboard.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false
    }
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">
        <Header />
        <PrototypeBanner />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

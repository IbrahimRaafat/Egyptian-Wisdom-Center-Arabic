import type { Metadata } from "next";
import { Diplomata, Tajawal } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const diplomata = Diplomata({
  variable: "--font-diplomata",
  weight: "400",
  subsets: ["latin"],
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  weight: ["400", "500", "700"],
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "مركز الحكمة المصري",
  description: "مرحبا بكم في مركز الحكمة المصري",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${diplomata.variable} ${tajawal.variable} antialiased bg-gray-50 min-h-screen text-gray-800 font-sans`}
      >
        <div className="max-w-[1200px] mx-auto bg-white min-h-screen shadow-[0_0_30px_rgba(47,99,157,0.15)] flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

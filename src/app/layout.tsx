import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from 'next/font/google';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NextTopLoader from 'nextjs-toploader';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: "Progenesis",
  description: "Fertility Care Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`antialiased ${manrope.variable}`}>
        <Navbar />
        <NextTopLoader color="#1656A5" />
        {children}
        <Footer />
      </body>
    </html>
  );
}

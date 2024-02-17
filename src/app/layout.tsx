"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer/footer";
import Menu from "@/components/menu/menu";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu />
        {children}
        <Footer />
      </body>
    </html>
  );
}

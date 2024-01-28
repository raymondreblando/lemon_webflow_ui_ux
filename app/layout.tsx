import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navbar from "@/components/Navbar"
import "./globals.css"
import "remixicon/fonts/remixicon.css"

export const metadata: Metadata = {
  title: "Lemon",
  description: "Build a better site for your business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}

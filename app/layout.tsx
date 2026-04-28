import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Concellos de Galicia",
  description: "Juego  de geografia para aprender los concellos de galicia y sus posiciones",
  keywords: ['Juego geografia', 'Concellos galicia', 'Juego geografia concellos galicia', 'Juego geografia municipios galicia', 'Municipios galicia', 'Mapa concellos galicia', 'Aprender concellos galicia', 'Juego geografía Galicia'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

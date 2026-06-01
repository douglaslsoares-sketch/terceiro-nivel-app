import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
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
  metadataBase: new URL("https://terceironivel.org"),

  title: "Terceiro Nível",
  description: "Traduzindo temas complexos para linguagem acessível.",

  icons: {
    icon: "/icon.png",
  },

  openGraph: {
    title: "Terceiro Nível",
    description: "Traduzindo temas complexos para linguagem acessível.",
    url: "https://terceironivel.org",
    siteName: "Terceiro Nível",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Terceiro Nível",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Terceiro Nível",
    description: "Traduzindo temas complexos para linguagem acessível.",
    images: ["/og-image.png"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
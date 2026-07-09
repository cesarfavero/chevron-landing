import type { Metadata, Viewport } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chevron-landing.vercel.app"),
  title: "Chevron — O app dos motoclubes brasileiros",
  description:
    "Rotas em grupo, navegação turn-by-turn, chat em tempo real e SOS de emergência. Baixe o Chevron na App Store e no Google Play.",
  keywords: [
    "motoclube",
    "moto",
    "navegação",
    "rotas em grupo",
    "SOS",
    "Chevron",
    "motociclistas",
    "Brasil",
  ],
  authors: [{ name: "Caesars Technology" }],
  openGraph: {
    title: "Chevron — O app dos motoclubes brasileiros",
    description:
      "Rotas em grupo, navegação turn-by-turn, chat e SOS. Feito para o pack.",
    type: "website",
    locale: "pt_BR",
    siteName: "Chevron",
    images: [{ url: "/images/hero-moto.jpg", width: 1920, height: 1080 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chevron — Motoclubes no bolso",
    description: "Rotas em grupo, navegação e SOS. Baixe agora.",
    images: ["/images/hero-moto.jpg"],
  },
  icons: {
    icon: [
      { url: "/images/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/app-icon.png", sizes: "1024x1024", type: "image/png" },
    ],
    apple: [{ url: "/images/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#030303",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}

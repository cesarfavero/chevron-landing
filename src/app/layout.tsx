import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chevron.caesarstechnology.com"),
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
    icon: "/images/app-icon.png",
    apple: "/images/app-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
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
      className={`${poppins.variable} ${bebas.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://chevron-landing.vercel.app"),
  title: "Chevron — O app dos motoclubes brasileiros",
  description:
    "Rotas em grupo com GPS ao vivo, navegação turn-by-turn, chat do clube, eventos e SOS. Baixe na App Store e no Google Play.",
  openGraph: {
    title: "Chevron — Motoclubes no mapa",
    description:
      "App nativo pra quem roda em clube: rotas em grupo, navegação, chat e SOS.",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/images/brutal/asset-8.jpeg" }],
  },
  icons: {
    icon: "/images/app-icon.png",
    apple: "/images/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="scroll-smooth h-full antialiased">
      <body className="min-h-full selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}

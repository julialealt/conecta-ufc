import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/ui/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ConectaUFC",
  description: "Plataforma de conexão da UFC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="dark">
      <body className={inter.className}>
        <Header />
        <main className="pt-16"> {/* Adiciona padding ao topo do conteúdo principal para não ficar atrás do header */}
          {children}
        </main>
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppProvider from "@/context/appContext";
import { Toaster } from "sonner";

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
        <AppProvider>
          <main>
            <Toaster theme="dark" position="top-right" />
            {children}
          </main>
        </AppProvider>
      </body>
    </html>
  );
}

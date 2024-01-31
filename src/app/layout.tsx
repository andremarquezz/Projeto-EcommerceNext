import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Commerce",
  description:
    "Projeto desenvolvido para aprender Next.js através do canal Lucas Nhimi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Navbar />
        <main className="p-16
         bg-slate-700 h-screen">{children}</main>
      </body>
    </html>
  );
}

import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

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
      <body className={clsx(inter.className, 'bg-slate-700' )}>
        <Navbar />
        <main className="p-16
         bg-slate-700 h-screen">{children}</main>
      </body>
    </html>
  );
}

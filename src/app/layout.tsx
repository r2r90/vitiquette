import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "@/components/header/Header";
import { Separator } from "@/components/ui/separator";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vitiquette - Étiquette personnalisé",
  description: "Imprimez des étiquettes personnalisables avec votre design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen overflow-hidden rounded-[0.5rem] border bg-background shadow bg-amber-50">
          <Header />
          <Separator />
          {children}
        </div>
      </body>
    </html>
  );
}

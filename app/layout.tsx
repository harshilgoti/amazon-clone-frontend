import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "@/store/provider";
import type React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Amazon Clone",
  description: "A marketplace for merchants and customers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

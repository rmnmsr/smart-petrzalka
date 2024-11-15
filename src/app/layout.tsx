import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Petržalka",
  description: "",
};

const sourcesanspro = Source_Sans_3({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${sourcesanspro.className}`}>
        {children}
      </body>
    </html>
  );
}

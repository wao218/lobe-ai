import "./globals.scss";
import type { Metadata } from "next";
import { Karla } from "next/font/google";
import { Header } from "./components/Header/Header";

const karla = Karla({
  subsets: ["latin"],
  fallback: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={karla.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}

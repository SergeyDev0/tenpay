import type { Metadata } from "next";
import { Manrope, Roboto } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "TenPay",
  description: "Интернет-эквайринг на сайте и в мессенджерах для малого бизнеса",
};

const roboto = Roboto({
  variable: "--roboto",
  weight: ["400", "500", "700"],
  subsets: ['cyrillic'],
});

const manrope = Manrope({
  variable: "--manrope",
  weight: ["400", "500", "600", "700"],
  subsets: ['cyrillic'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${manrope.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}

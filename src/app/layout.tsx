import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";

import Header from "../components/header";

import "./globals.scss";

export const nunitoSans = Nunito_Sans({
  weight: ["300", "600", "800"],
  subsets: ["latin"],
  display: "swap",

});

export const metadata: Metadata = {
  title: "Where in the world?",
  description: "World countries flag and stats",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}

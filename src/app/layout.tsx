import type { Metadata } from "next";

import Header from "../components/header";

import "./globals.scss";

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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

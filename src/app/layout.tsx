import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Axentec",
  description: "Own the future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}

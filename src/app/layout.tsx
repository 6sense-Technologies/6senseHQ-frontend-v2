import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "6sense - Expert Custom Software Development Company",
  description: "Expert Custom Software Development Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.webp" type="image/webp" />
      </head>
      <body>{children}</body>
    </html>
  );
}

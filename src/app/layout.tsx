import type { Metadata } from "next";
import { IBM_Plex_Sans, Inter } from "next/font/google";
import "./globals.css";

// const plex = IBM_Plex_Sans({ subsets:  });

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
      <body>{children}</body>
    </html>
  );
}

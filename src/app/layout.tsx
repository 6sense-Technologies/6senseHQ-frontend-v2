import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import QueryClientWrapper from "@/providers/QueryClientWrapper";

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
      <body>
        <QueryClientWrapper>
          <Navbar />
          {children}
          <Footer />
        </QueryClientWrapper>
      </body>
    </html>
  );
}

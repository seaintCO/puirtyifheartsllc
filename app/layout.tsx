import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Purity Of Heart",
  description: "Business coaching and ALMA powered systems.",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/purity-logo.png",
    apple: "/purity-logo.png",
  },
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

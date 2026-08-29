import type { Metadata } from "next";
import { GoogleAnalytics } from "./GoogleAnalytics";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sony AK a.k.a Sony Arianto Kurniawan",
  description:
    "Sony AK is a Member of Technical Staff living in Jakarta, Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics />
      </head>
      <body>{children}</body>
    </html>
  );
}

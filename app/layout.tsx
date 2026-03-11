import "./globals.css";
import Navbar from "../components/navbar/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
    icons: {
        icon: "/images/logo/logo_red.svg",
        shortcut: "/images/logo/logo_red.svg",
        apple: "/images/logo/logo_red.svg",
    },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

import "./globals.css";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "USC Flavors",
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

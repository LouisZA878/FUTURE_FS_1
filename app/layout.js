import { Roboto, Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/nav-bar/nav-bar";

const inter = Inter({
  variable: "--heading-font",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const roboto = Roboto({
  variable: "--body-font",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Louis' Portfolio",
  description: "Why not take a look through this gorgeous website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

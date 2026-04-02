import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import { Bebas_Neue, Nunito } from "next/font/google";
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});
import RouteChrome from "@/components/RouteChrome";


const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ISTE NITK",
  description: "A student chapter website for ISTE"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <RouteChrome>{children}</RouteChrome>
      </body>
    </html>
  );
}

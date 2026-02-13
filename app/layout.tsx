import type { Metadata } from "next";
import { Inter } from "next/font/google"; 
import "./globals.css";
import { Header } from "@/widgets/Header/Header";
import {Footer} from "@/widgets/Footer/Footer";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"], 
  variable: "--font-inter",      
  display: "swap",
});

export const metadata: Metadata = {
  title: "Test Task WFDESIGN",
  description: "Pixel Perfect Layout",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
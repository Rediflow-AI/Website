import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Rediflow AI",
  description: "Empowering your business with cutting-edge artificial intelligence solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="dark" />
        <meta name="theme-color" content="#0b0f13" />
        <style
          precedence="default"
          href="critical-styles"
        >{`
          /* Ensure immediate dark background and force dark color-scheme so UA forced themes don't invert colors */
          :root, html, body { background: #0b0f13 !important; color-scheme: dark !important; }
          /* Keep header dark on small screens before CSS loads */
          @media (max-width: 767px) { .site-shell { background: #0b0f13 !important; } }
        `}</style>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
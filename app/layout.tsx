import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rediflow AI",
  description: "Empowering your business with cutting-edge artificial intelligence solutions.",
};

function Header() {
  return (
    <header className="w-full bg-gray-800 text-gray-100 p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-purple-400">
          Rediflow AI
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-purple-400 transition-colors duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="/learn-more" className="hover:text-purple-400 transition-colors duration-200">
              Learn More
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-purple-400 transition-colors duration-200">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-gray-100 p-4 text-center shadow-md mt-auto">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Rediflow AI. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
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
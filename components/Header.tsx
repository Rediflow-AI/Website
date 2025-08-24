"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <header className={`w-full p-4 shadow-md ${isHomePage ? 'bg-transparent absolute top-0 left-0 z-20' : 'bg-gray-800'}`}>
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
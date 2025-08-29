"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [open, setOpen] = useState(false);

  return (
    <header className={`${isHomePage ? "absolute" : "sticky"} top-0 left-0 w-full z-40`}> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 py-3 flex items-center justify-between bg-black/40 backdrop-blur-sm border border-transparent md:border-b md:border-white/5 rounded-xl md:rounded-none">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Rediflow AI" width={36} height={36} priority />
          <span className="text-white font-semibold hidden sm:inline">Rediflow AI</span>
        </Link>

        {/* desktop nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="/" className={`text-sm text-white/90 hover:text-white transition ${pathname === "/" ? "font-semibold" : "font-medium"}`}>
            Home
          </Link>
          <Link href="/learn-more" className={`text-sm text-white/90 hover:text-white transition ${pathname === "/learn-more" ? "font-semibold" : "font-medium"}`}>
            Our story
          </Link>
          <Link href="/products" className={`text-sm text-white/90 hover:text-white transition ${pathname === "/products" ? "font-semibold" : "font-medium"}`}>
            Products
          </Link>
          <Link href="/careers" className={`text-sm text-white/90 hover:text-white transition ${pathname === "/careers" ? "font-semibold" : "font-medium"}`}>
            Careers
          </Link>
        </nav>

        {/* actions + mobile button */}
        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden md:inline-flex text-sm bg-white text-black px-4 py-2 rounded-full font-semibold shadow-sm hover:shadow-md transition">
            Contact Us
          </Link>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center md:hidden p-2 rounded-md text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            {/* hamburger / close icon */}
            {open ? (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div className={`md:hidden ${open ? "block" : "hidden"}`}>
        <div className="px-4 pt-2 pb-6 bg-black/60 backdrop-blur-md border-t border-white/5">
          <nav className="flex flex-col gap-3">
            <Link href="/" onClick={() => setOpen(false)} className={`py-2 px-3 rounded-md text-white/90 hover:text-white ${pathname === "/" ? "font-semibold" : "font-medium"}`}>
              Home
            </Link>
            <Link href="/learn-more" onClick={() => setOpen(false)} className={`py-2 px-3 rounded-md text-white/90 hover:text-white ${pathname === "/learn-more" ? "font-semibold" : "font-medium"}`}>
              Our story
            </Link>
            <Link href="/products" onClick={() => setOpen(false)} className={`py-2 px-3 rounded-md text-white/90 hover:text-white ${pathname === "/products" ? "font-semibold" : "font-medium"}`}>
              Products
            </Link>
            <Link href="/careers" onClick={() => setOpen(false)} className={`py-2 px-3 rounded-md text-white/90 hover:text-white ${pathname === "/careers" ? "font-semibold" : "font-medium"}`}>
              Careers
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="mt-2 py-3 px-4 bg-white text-black rounded-full font-semibold w-full text-center">
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

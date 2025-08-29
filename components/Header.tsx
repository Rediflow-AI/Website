"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 w-full z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 py-3 flex items-center justify-between bg-black/40 backdrop-blur-sm border border-transparent md:border-b md:border-white/5  rounded-none relative">
        <Link href="/" className="flex items-center gap-3 z-20">
          <Image src="/logo.png" alt="Rediflow AI" width={36} height={36} priority />
          <span className="text-white font-semibold hidden sm:inline">Rediflow AI</span>
        </Link>

        {/* centered nav - inspired by 21st.dev headers */}
        <nav className="hidden md:flex space-x-8 items-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          {[
            { href: "/", label: "Home" },
            { href: "/about-us", label: "About us" },
            { href: "/products", label: "Products" },
            { href: "/careers", label: "Careers" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-sm text-white/90 hover:text-white transition px-1 py-2 ${pathname === item.href ? "font-semibold" : "font-medium"}`}
            >
              <span className="block">{item.label}</span>
              <span
                className={`absolute left-0 right-0 bottom-0 h-0.5 bg-white transition-all duration-200 ${pathname === item.href ? "scale-x-100" : "scale-x-0 hover:scale-x-100"}`}
                style={{ transformOrigin: "left" }}
              />
            </Link>
          ))}
        </nav>

        {/* actions + mobile button */}
        <div className="flex items-center gap-3 z-20">
          <Link href="/contact" className="hidden md:inline-flex text-sm px-3 py-1 rounded-full font-semibold bg-white text-black shadow-sm hover:shadow-md transition">
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
            <Link href="/about-us" onClick={() => setOpen(false)} className={`py-2 px-3 rounded-md text-white/90 hover:text-white ${pathname === "/about-us" ? "font-semibold" : "font-medium"}`}>
              About us
            </Link>
            <Link href="/products" onClick={() => setOpen(false)} className={`py-2 px-3 rounded-md text-white/90 hover:text-white ${pathname === "/products" ? "font-semibold" : "font-medium"}`}>
              Products
            </Link>
            <Link href="/careers" onClick={() => setOpen(false)} className={`py-2 px-3 rounded-md text-white/90 hover:text-white ${pathname === "/careers" ? "font-semibold" : "font-medium"}`}>
              Careers
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="mt-2 py-2 px-4 bg-white text-black rounded-full font-semibold w-full text-center">
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

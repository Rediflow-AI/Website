"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <header className={`${isHomePage ? "absolute" : "sticky"} top-0 left-0 w-full z-30`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between bg-black/40 backdrop-blur-sm border border-transparent md:border-b md:border-white/5 rounded-xl md:rounded-none">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Rediflow AI" width={36} height={36} priority />
          <span className="text-white font-semibold hidden sm:inline">Rediflow AI</span>
        </Link>

        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="/" className={`text-sm text-white/90 hover:text-white transition ${pathname === "/" ? "font-semibold" : "font-medium"}`}>
            Home
          </Link>
          <Link href="/learn-more" className={`text-sm text-white/90 hover:text-white transition ${pathname === "/learn-more" ? "font-semibold" : "font-medium"}`}>
            Our story
          </Link>
          <Link href="/careers" className={`text-sm text-white/90 hover:text-white transition ${pathname === "/careers" ? "font-semibold" : "font-medium"}`}>
            Careers
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/apps" className="text-sm text-white/90 px-3 py-2 rounded-full border border-white/10 hover:border-white/30 transition">
            Our Apps
          </Link>
          <Link href="/contact" className="text-sm bg-white text-black px-4 py-2 rounded-full font-semibold shadow-sm hover:shadow-md transition">
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}

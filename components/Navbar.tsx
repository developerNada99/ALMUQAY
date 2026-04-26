"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import { motion, AnimatePresence } from "framer-motion";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["400","600","700"],
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); 
  const navLinks = [
    { name: "الرئيسية", href: "/" },         
    { name: "من نحن", href: "/about" },
    { name: "خدماتنا", href: "/services" },
    { name: "تواصل معنا", href: "/contact" }
  ];

  // دالة للتحقق إذا كان الرابط نشطاً
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href;
  };

  return (
    <nav
      dir="rtl"
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10  shadow-xl"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* logo */}
          <Link href="/" className="flex flex-col items-center leading-tight">
            <span className={`${cairo.className} font-bold text-2xl sm:text-3xl md:text-4xl text-[#7ea9c9]`}>
              المقيبل
            </span>
            <span className={`${cairo.className} font-semibold text-[10px] sm:text-xs md:text-sm tracking-[0.4em]`}>
              ALMUQAYBL
            </span>
          </Link>

          {/* desktop menu - centered */}
          <div className="hidden md:flex items-center justify-center flex-1 text-gray-900">
            <div className="flex gap-10 text-lg font-semibold">
              {navLinks.map((link, index) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={index}
                    href={link.href}
                    className={`transition ${
                      active ? "text-[#7ea9c9]" : "hover:text-[#7ea9c9]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* mobile button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>

        </div>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden "
          >
            <div className="flex flex-col items-center py-4 gap-5 text-lg font-semibold text-gray-900">
              {navLinks.map((link, index) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={index}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`transition ${
                      active ? "text-[#7ea9c9]" : "hover:text-[#7ea9c9]"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
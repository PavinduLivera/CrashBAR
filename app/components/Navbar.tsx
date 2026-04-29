"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Menu එක open වුණාම පිටිපස්සේ තියෙන page එක scroll වෙන එක නවත්වන්න
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-[100] bg-black/80 border-b border-primary/2 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="relative z-[120]" onClick={() => setIsOpen(false)}>
            <Image 
              src="/crashbarlogo.png" 
              alt="CrashBAR Logo"
              width={130}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-[0.2em] text-white/90">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-primary transition-colors">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4 relative z-[120]">
            <a 
              href="https://wa.me/94777607129?text=Hello!%20I%20would%20like%20to%20reserve%20a%20table." 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <button className="hidden sm:block bg-primary text-black px-6 py-2 rounded-full font-black text-sm uppercase tracking-widest">
                RESERVE A TABLE
              </button>
            </a>

            {/* Hamburger Button */}
            <button 
              className="md:hidden text-white p-2 outline-none" 
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={32} className="text-primary" /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </nav>

      {/* === Full Screen Overlay Menu === */}
{/* === Full Screen Overlay Menu === */}
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black z-[110] flex flex-col md:hidden"
    >
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.02] font-black text-[25vw] uppercase select-none pointer-events-none">
          BAR
      </div>

      <div className="flex flex-col items-center justify-center flex-1 gap-8">
        {navLinks.map((link, i) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 + 0.1 }}
          >
            <Link 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-4xl font-black uppercase tracking-tighter text-white hover:text-primary transition-all"
            >
              {link.name}
            </Link>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 flex flex-col items-center gap-6 w-full px-10"
        >
          {/* Main CTA */}
          <a 
          href="https://wa.me/94777607129?text=Hello!%20I%20would%20like%20to%20reserve%20a%20table." 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full"
        >
          <button className="bg-primary text-black w-full py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-sm shadow-2xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-transform">
            Reserve A Table
          </button>
        </a>

          {/* New Close Button - මෙනු එක ඇතුළත */}
          <button 
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 text-white/40 hover:text-primary transition-colors uppercase font-bold tracking-[0.3em] text-[10px]"
          >
            <X size={16} /> Close Menu
          </button>
        </motion.div>
      </div>

      {/* Socials at bottom */}
      <div className="p-10 flex justify-center gap-8 border-t border-white/5">
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Instagram</span>
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">TikTok</span>
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Facebook</span>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </>
  );
}
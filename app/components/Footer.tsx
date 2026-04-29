"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MapPin, Clock } from 'lucide-react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 items-start">
          
          {/* 1. Brand Column */}
          <div className="flex flex-col items-start space-y-6">
            <Link href="/">
              <Image 
                src="/crashbarlogo.png" 
                alt="CrashBAR Logo"
                width={150}
                height={50}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed text-left">
              The ultimate BYOB destination in Sri Lanka. Where world-class hospitality meets the rhythm of live music.
            </p>
            <div className="flex gap-3">
              <a href="https://instagram.com" target="_blank" className="p-3 rounded-xl bg-zinc-900 border border-white/5 text-gray-400 hover:text-primary hover:border-primary/30 transition-all">
                <FaInstagram size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" className="p-3 rounded-xl bg-zinc-900 border border-white/5 text-gray-400 hover:text-primary hover:border-primary/30 transition-all">
                <FaFacebook size={18} />
              </a>
              <a href="https://tiktok.com" target="_blank" className="p-3 rounded-xl bg-zinc-900 border border-white/5 text-gray-400 hover:text-primary hover:border-primary/30 transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
              </a>
            </div>
          </div>

          {/* 2. Quick Links */}
          <div className="flex flex-col items-start">
            <h4 className="text-white font-bold mb-6 uppercase tracking-[0.2em] text-[10px]">Explore</h4>
            <ul className="flex flex-col items-start space-y-4">
              {['Home', 'Menu', 'Events', 'Gallery', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} className="text-gray-500 text-sm hover:text-primary transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Info */}
          <div className="flex flex-col items-start">
            <h4 className="text-white font-bold mb-6 uppercase tracking-[0.2em] text-[10px]">Find Us</h4>
            <ul className="flex flex-col items-start space-y-5 w-full">
              <li className="flex items-start gap-4 text-gray-500 text-sm italic text-left">
                <MapPin className="text-primary shrink-0 mt-1" size={16} />
                <span>No 194/4, New Galle Road,<br />Panadura, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-4 text-gray-500 text-sm font-bold">
                <Phone className="text-primary shrink-0" size={16} />
                <span>+94 777 706 129</span>
              </li>
              <li className="flex items-center gap-4 text-gray-500 text-sm">
                <Clock className="text-primary shrink-0" size={16} />
                <span>Daily: 12:00 PM - 12:00 AM</span>
              </li>
            </ul>
          </div>

          {/* 4. Google Map Integration */}
          <div className="flex flex-col items-start w-full">
            <h4 className="text-white font-bold mb-6 uppercase tracking-[0.2em] text-[10px]">Location</h4>
            <div className="w-full h-48 rounded-2xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-500 shadow-2xl shadow-primary/5">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.352571150727!2d79.90128997499478!3d6.7267648932692525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24575ad470109%3A0xfa3285c2584c6047!2sCrashBAR%20BYOB!5e0!3m2!1sen!2slk!4v1777420694904!5m2!1sen!2slk"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-600 text-[10px] uppercase tracking-widest">
            &copy; {currentYear} <span className="text-white/40">CRASHBAR BYOB RESTAURANT</span>.
          </p>
          
        </div>
      </div>
    </footer>
  );
}
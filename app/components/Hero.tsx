"use client";

import React from 'react';
import { motion } from 'motion/react'; // Framer Motion v12+ සඳහා
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* 1. Background Image/Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-60"
        style={{
          backgroundImage: "url('/hero-bg.png')", // ඔයාගේ image path එක මෙතනට දාන්න
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Gradient Overlay එකක් දාමු අකුරු හොඳට පේන්න */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      {/* 2. Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h4 className="text-white font-medium tracking-[0.3em] uppercase mb-4 text-sm md:text-base">
            Premium BYOB Experience
          </h4>
          
          <h1 className="text-5xl md:text-8xl font-bold text-primary mb-6 tracking-tighter">
            Crash<span className="text-primary">BAR</span>
          </h1>
          
          <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl mb-10 leading-relaxed">
            Your favorite drinks, our incredible vibe. Experience the best food and 
            live music at the most happening BYOB spot in town.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link 
              href="/menu" 
              className="w-full sm:w-auto bg-primary text-black font-bold px-10 py-4 rounded-full transition-all hover:bg-white hover:scale-105 active:scale-95"
            >
              EXPLORE MENU
            </Link>
            
            <Link 
              href="/contact" 
              className="w-full sm:w-auto border border-white/30 text-white font-bold px-10 py-4 rounded-full transition-all hover:bg-white hover:text-black hover:border-white"
            >
              BOOK A TABLE
            </Link>
          </div>
        </motion.div>
      </div>

      {/* 3. Scroll Down Indicator (Optional) */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
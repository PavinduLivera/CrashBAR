"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle } from 'lucide-react';
import Image from 'next/image'; // Next.js image component එක import කරන්න

const EventModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // සයිට් එක load වෙලා තත්පර 1.5 කට පස්සේ popup එක පෙන්වන්න
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const whatsappNumber = "+947607129"; // ඔයාගේ WhatsApp අංකය මෙතනට දාන්න
  const message = "Hi CrashBAR, I'd like to know more about the upcoming event with Cheran & Jason!";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          {/* Backdrop එක click කළොත් close වෙන්න */}
          <div className="absolute inset-0" onClick={() => setIsOpen(false)} />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-zinc-950 border border-primary/20 rounded-[2rem] overflow-hidden shadow-2xl z-10"
          >
            {/* Close Button - Right Top */}
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 z-20 p-2.5 bg-black/70 hover:bg-primary hover:text-black text-white rounded-full transition-all border border-white/10"
            >
              <X size={22} />
            </button>

            {/* Main Flex Container - Desktop: Row, Mobile: Column */}
            <div className="flex flex-col md:flex-row h-full">
              
              {/* === Column 1: Image - Full Height on Desktop === */}
              <div className="relative w-full md:w-1/2 h-64 md:h-auto min-h-[300px]">
                <Image 
                  src="/event-popup.jpg" // ඔයාගේ event post එකේ පින්තූරය
                  alt="Special Event: Cheran & Jason"
                  fill // Container එක full fill වෙන්න
                  className="object-cover md:object-contain" // Mobile: cover, Desktop: contain (සම්පූර්ණ පින්තූරය පේන්න)
                  sizes="(max-w-768px) 100vw, 50vw"
                  priority // මුලින් load වෙන්න
                />
              </div>

              {/* === Column 2: Content - Text & CTA === */}
              <div className="w-full md:w-1/2 p-10 md:p-14 flex flex-col justify-center bg-zinc-950 border-t md:border-t-0 md:border-l border-primary/10">
                <div className="text-left">
                    <h3 className="text-primary font-bold uppercase tracking-[0.3em] text-xs mb-3">Special Event</h3>
                    <h4 className="text-4xl md:text-5xl font-extrabold text-white uppercase mb-6 tracking-tighter leading-tight">
                        Live Music <br/>
                        with <span className='text-primary'>Cheran <br/>& Jason</span>
                    </h4>
                    <p className="text-gray-400 mb-10 text-sm leading-relaxed max-w-sm">
                        Join us this Friday for an unforgettable BYOB night! Limited tables available for this special performance. Book yours now via WhatsApp.
                    </p>

                    {/* WhatsApp CTA Button */}
                    <a 
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-primary hover:bg-white text-black font-black py-4 px-10 rounded-xl transition-all uppercase tracking-widest text-sm shadow-lg hover:scale-105 active:scale-95"
                    >
                        <MessageCircle size={20} fill="black" className='text-black' />
                        Inquire via WhatsApp
                    </a>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default EventModal;
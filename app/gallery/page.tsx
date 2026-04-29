"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { X, Maximize2 } from 'lucide-react';

const galleryImages = [
  { id: 1, src: '/gallery-1.jpg', title: 'Live Performance', category: 'Events' },
  { id: 2, src: '/gallery-2.jpg', title: 'Signature Cocktails', category: 'Drinks' },
  { id: 3, src: '/gallery-3.jpg', title: 'Night Vibe', category: 'Atmosphere' },
  { id: 4, src: '/gallery-4.jpg', title: 'Crowd Energy', category: 'Events' },
  { id: 5, src: '/gallery-1.jpg', title: 'Our Barista', category: 'Staff' },
  { id: 6, src: '/gallery-2.jpg', title: 'Outdoor Seating', category: 'Atmosphere' },
  { id: 7, src: '/gallery-3.jpg', title: 'Weekend acoustic', category: 'Events' },
  { id: 8, src: '/gallery-4.jpg', title: 'Spicy Bites', category: 'Food' },
];

const GalleryPage = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-4"
          >
            Visual Experience
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white uppercase tracking-tighter"
          >
            CrashBAR <span className="text-primary">Gallery</span>
          </motion.h1>
        </div>

        {/* Gallery Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedImg(image.src)}
              className="relative group cursor-pointer overflow-hidden rounded-[2rem] border border-white/5 break-inside-avoid"
            >
              <Image
                src={image.src}
                alt={image.title}
                width={500}
                height={600}
                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="text-primary text-xs font-bold uppercase tracking-widest">{image.category}</span>
                    <h4 className="text-white text-xl font-bold uppercase">{image.title}</h4>
                  </div>
                  <div className="p-3 bg-primary rounded-full text-black">
                    <Maximize2 size={20} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox / Modal */}
        <AnimatePresence>
          {selectedImg && (
            <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="relative max-w-5xl w-full h-auto max-h-[85vh]"
              >
                <button 
                  onClick={() => setSelectedImg(null)}
                  className="absolute -top-12 right-0 text-white hover:text-primary transition-colors flex items-center gap-2 uppercase text-xs font-bold tracking-widest"
                >
                  Close <X size={24} />
                </button>
                <img 
                  src={selectedImg} 
                  alt="Enlarged" 
                  className="w-full h-full object-contain rounded-2xl"
                />
              </motion.div>
              {/* Backdrop click to close */}
              <div className="absolute inset-0 -z-10" onClick={() => setSelectedImg(null)} />
            </div>
          )}
        </AnimatePresence>

        {/* Instagram CTA */}
        <div className="mt-32 text-center">
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <p className="text-gray-500 uppercase tracking-[0.3em] text-xs mb-8">
      Follow the vibe on social media
    </p>

    {/* Main Handle Display */}
    <div className="mb-12">
      <a 
        href="https://instagram.com/crashbar" // මෙතනට ප්‍රධානම link එක දෙන්න
        target="_blank"
        className="text-white text-5xl md:text-7xl font-black hover:text-primary transition-all duration-500 italic tracking-tighter uppercase"
      >
        @CRASHBAR<span className="text-primary">.</span>LK
      </a>
    </div>

    {/* Social Icons Grid */}
        <div className="flex justify-center items-center gap-8 md:gap-12">

              {/* Facebook */}
              <a href="https://facebook.com/crashbarlk" target="_blank" className="group flex flex-col items-center gap-3">
                <div className="p-4 rounded-2xl bg-zinc-900 border border-white/5 group-hover:border-primary/50 group-hover:bg-primary group-hover:text-black transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </div>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold group-hover:text-white transition-colors">Facebook</span>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com/crashbarlk" target="_blank" className="group flex flex-col items-center gap-3">
                <div className="p-4 rounded-2xl bg-zinc-900 border border-white/5 group-hover:border-primary/50 group-hover:bg-primary group-hover:text-black transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </div>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold group-hover:text-white transition-colors">Instagram</span>
              </a>

              {/* TikTok */}
              <a href="https://tiktok.com/@crashbarlk" target="_blank" className="group flex flex-col items-center gap-3">
                <div className="p-4 rounded-2xl bg-zinc-900 border border-white/5 group-hover:border-primary/50 group-hover:bg-primary group-hover:text-black transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
                </div>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold group-hover:text-white transition-colors">TikTok</span>
              </a>

              
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default GalleryPage;
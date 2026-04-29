"use client";

import React from 'react';
import { motion } from 'motion/react';

const images = [
  { src: '/gallery-1.jpg', title: '' }, //Main Lounge
  { src: '/gallery-2.jpg', title: '' }, //Outdoor Deck
  { src: '/gallery-3.jpg', title: '' }, //Live Stage
  { src: '/gallery-4.jpg', title: '' }, //Bar Counter
];

export const Gallery = () => {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-primary text-center text-2xl font-serif italic mb-2">Gallery</h3>
        <h3 className="text-4xl md:text-5xl text-center font-bold text-white uppercase mb-16 italic tracking-tighter">
          Feel the <span className="text-primary">Atmosphere</span>
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 0.98 }}
              className="relative h-80 overflow-hidden rounded-2xl group cursor-pointer border border-white/5"
            >
              <img src={img.src} alt={img.title} className="w-full h-full object-cover  group-hover:grayscale-0 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-primary font-bold uppercase tracking-wider">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
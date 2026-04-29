"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Download, Beer } from 'lucide-react';

const menuCategories = [
  {
    title: "Signature Bites",
    items: [
      { name: "Hot Butter Cuttlefish", price: "Rs. 1800", desc: "Crispy cuttlefish tossed with spicy butter and spring onions." },
      { name: "Devilled Chicken", price: "Rs. 1400", desc: "Classic Sri Lankan style spicy chicken with a kick." },
      { name: "CrashBAR Platter", price: "Rs. 3500", desc: "Assorted bites perfect for sharing with your group." },
    ]
  },
  {
    title: "Main Dishes",
    items: [
      { name: "Special Fried Rice", price: "Rs. 1650", desc: "Chef's special mix of seafood, chicken, and egg." },
      { name: "Nasi Goreng", price: "Rs. 1550", desc: "Served with chicken satay and a fried egg." },
      { name: "Mixed Noodles", price: "Rs. 1450", desc: "Wok-fried noodles with fresh veggies and meat." },
    ]
  }
];

const MenuPage = () => {
  return (
    <main className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* === Header & PDF Download Section === */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="text-left">
            <motion.h2 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] md:text-sm mb-3"
            >
              Our Kitchen
            </motion.h2>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold text-white uppercase tracking-tighter leading-none"
            >
              The <span className="text-primary">Menu</span>
            </motion.h1>
          </div>

          {/* Download Button: Mobile වලදී full width වෙනවා */}
          <motion.a 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            href="/CrashBAR_Menu.pdf" 
            download 
            className="flex items-center justify-center gap-3 w-full md:w-auto bg-zinc-900 border border-primary/20 text-primary hover:bg-primary hover:text-black font-bold py-5 px-8 rounded-2xl transition-all uppercase tracking-widest text-[10px] md:text-xs shadow-xl active:scale-95"
          >
            <Download size={18} />
            Download PDF Menu
          </motion.a>
        </div>

        {/* === Menu Grid === */}
        <div className="grid grid-cols-1 gap-16">
          {menuCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Category Divider */}
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-primary/20"></div>
                <h3 className="text-xl md:text-2xl font-bold text-white uppercase tracking-widest">{category.title}</h3>
                <div className="h-px flex-1 bg-primary/20"></div>
              </div>

              {/* Items List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {category.items.map((item, i) => (
                  <div key={i} className="group border-b border-white/5 pb-6 hover:border-primary/30 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg md:text-xl font-bold text-white group-hover:text-primary transition-colors">{item.name}</h4>
                      <span className="text-primary font-bold whitespace-nowrap ml-4">{item.price}</span>
                    </div>
                    <p className="text-gray-500 text-sm italic leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* === BYOB Info Box === */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 p-8 md:p-12 rounded-[2.5rem] bg-zinc-900/30 border border-white/5 text-center"
        >
            <Beer className="mx-auto text-primary mb-4" size={32} />
            <p className="text-white font-bold uppercase tracking-widest text-xs md:text-sm">Remember: We are a BYOB space</p>
            <p className="text-gray-500 text-[10px] md:text-xs mt-3 italic max-w-md mx-auto">
              Bring your favorite bottle, we&apos;ll provide the chasers and the soul-stirring vibe.
            </p>
        </motion.div>

      </div>
    </main>
  );
};

export default MenuPage;
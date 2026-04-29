"use client";

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { ShieldCheck, Users, Music2, Utensils } from 'lucide-react';

const stats = [
  { label: "Years of Vibe", value: "01+" },
  { label: "Happy Guests", value: "200+" },
  { label: "Live Events", value: "10+" },
  { label: "Signature Bites", value: "10+" },
];

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-black pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section 1: Hero / Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-4">Our Story</h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-tighter mb-8 leading-tight">
              Where the <span className="text-primary">Music </span> <br/> 
              Meets the <span className="text-primary">Soul</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Started in the heart of the city, CrashBAR was born out of a simple idea: 
              to create a space where you can bring your favorite drinks and enjoy 
              world-class hospitality without the hefty corkage fees.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Today, it has evolved into the ultimate destination for live music lovers, 
              food enthusiasts, and those who seek a vibrant yet cozy atmosphere to 
              unwind with friends.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative h-[500px] rounded-[3rem] overflow-hidden border border-primary/20"
          >
            <Image 
              src="/hero-bg.png" // බාර් එකේ ලස්සන පින්තූරයක් දාන්න
              alt="CrashBAR Atmosphere"
              fill
              className="object-cover"
            />
            {/* Stats Overlay */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black p-10 grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-primary text-3xl font-black">{stat.value}</p>
                  <p className="text-gray-400 text-xs uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Section 2: Our Values - Updated Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Users, title: "Community", desc: "A place where strangers become friends over great music." },
            { icon: Music2, title: "Quality Music", desc: "Promoting local talent and the best live bands in the country." },
            { icon: Utensils, title: "Great Food", desc: "Fusion bites designed perfectly to complement your drinks." },
            { icon: ShieldCheck, title: "Safe Space", desc: "A premium, secure environment for everyone to enjoy." },
          ].map((value, index) => {
            // Icon eka Component ekak widiyata variable ekakata ganna (Upper case 'I' use karanna)
            const Icon = value.icon;
            
            return (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="p-10 rounded-3xl bg-zinc-900/30 border border-white/5 text-center group hover:border-primary/50 transition-all"
              >
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-primary mx-auto mb-6 border border-primary/10 group-hover:bg-primary group-hover:text-black transition-all">
                  {/* Dan kelinma component ekak widiyata size eka danna puluwan */}
                  <Icon size={32} />
                </div>
                <h4 className="text-white font-bold uppercase mb-3">{value.title}</h4>
                <p className="text-gray-500 text-sm">{value.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Section 3: Vision CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative rounded-[4rem] bg-primary p-12 md:p-20 text-center overflow-hidden"
        >
          {/* Background Decorative Element */}
          <div className="absolute top-0 right-0 text-black/5 font-black text-9xl -mr-10 -mt-10 uppercase select-none">
            CrashBAR
          </div>
          
          <h2 className="text-black text-4xl md:text-6xl font-black uppercase mb-8 leading-tight">
            Ready to experience <br/> the vibe?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/menu" className="bg-black text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all">
              See the Menu
            </a>
            <a href="/contact" className="border-2 border-black text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
              Book a Table
            </a>
          </div>
        </motion.div>

      </div>
    </main>
  );
};

export default AboutPage;
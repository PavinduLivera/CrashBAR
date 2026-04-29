"use client";

import React from 'react';
import { motion } from 'motion/react'; 
import { Beer, Music, Utensils, Sparkles } from 'lucide-react';

const featureData = [
  {
    title: "BYOB Concept",
    description: "Bring your favorite spirits and wines. We provide the ice, mixers, and the perfect atmosphere.",
    // stroke="currentColor" දැමීමෙන් parent div එකේ text color එක icon එකට ලැබෙනවා
    icon: <Beer size={32} stroke="currentColor" strokeWidth={2.5} />,
  },
  {
    title: "Live Entertainment",
    description: "Experience the best local bands and acoustic performances every weekend.",
    icon: <Music size={32} stroke="currentColor" strokeWidth={2.5} />,
  },
  {
    title: "Signature Bites",
    description: "From spicy devilled treats to mouth-watering mains, our kitchen never disappoints.",
    icon: <Utensils size={32} stroke="currentColor" strokeWidth={2.5} />,
  },
  {
    title: "Vibrant Vibe",
    description: "Unique outdoor and indoor seating with moody lighting for the ultimate chill-out.",
    icon: <Sparkles size={32} stroke="currentColor" strokeWidth={2.5} />,
  },
];

const Features: React.FC = () => {
  return (
    <section className="relative z-20 bg-black py-24 px-6 overflow-hidden">
      
      {/* Background Decor - Amber Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-primary text-center text-2xl font-serif italic mb-2">
              Why Choose Us
            </h3>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-tight">
              <span className='uppercase'>The </span> 
              <span className="text-primary">CrashBAR </span>
              <span className='uppercase'>Experience</span>
            </h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featureData.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-primary/50 transition-all duration-300 group"
            >
              {/* Icon Container - Hover කරද්දී background orange වෙනවා, text (icon) black වෙනවා */}
              <div className="mb-6 p-3 w-fit rounded-lg bg-black border border-primary/20 
                            text-primary transition-all duration-300
                            group-hover:bg-primary group-hover:text-black">
                {feature.icon}
              </div>

              <h4 className="text-white text-xl font-bold mb-3 uppercase tracking-tight group-hover:text-primary transition-colors">
                {feature.title}
              </h4>
              
              <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
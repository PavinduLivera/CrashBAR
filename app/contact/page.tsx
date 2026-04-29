"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';

const ContactPage = () => {
  const whatsappNumber = "94777607129"; // ඔයාගේ අංකය මෙතනට දාන්න

  return (
    <main className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white uppercase tracking-tighter"
          >
            Contact <span className="text-primary">Us</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Contact Info & Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4 p-8 rounded-3xl bg-zinc-900/30 border border-white/5">
                <Phone className="text-primary" size={28} />
                <h4 className="text-white font-bold uppercase tracking-wider">Call Us</h4>
                <p className="text-gray-400 text-sm">+94 777 607 129</p>
              </div>
              <div className="flex flex-col gap-4 p-8 rounded-3xl bg-zinc-900/30 border border-white/5">
                <Mail className="text-primary" size={28} />
                <h4 className="text-white font-bold uppercase tracking-wider">Email</h4>
                <p className="text-gray-400 text-sm">hello@crashbar.lk</p>
              </div>
            </div>

            <div className="space-y-6">
               <h3 className="text-2xl font-bold text-white uppercase">Visit <span className="text-primary">CrashBAR</span></h3>
               <div className="flex items-start gap-4 text-gray-400">
                  <MapPin className="text-primary shrink-0" size={24} />
                  <p>No 194/4, New Galle Road, Panadura, Panadura, Sri Lanka.</p>
               </div>
               <div className="flex items-start gap-4 text-gray-400">
                  <Clock className="text-primary shrink-0" size={24} />
                  <p>Open Daily: 12:00 PM - 12:00 AM</p>
               </div>
            </div>

            {/* WhatsApp CTA */}
            <a 
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              className="inline-flex items-center gap-4 bg-primary text-black font-black px-10 py-5 rounded-2xl uppercase tracking-widest text-sm hover:bg-white transition-all w-full justify-center md:w-auto"
            >
              <MessageCircle size={24} />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Right: Google Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="h-[500px] w-full rounded-[2.5rem] overflow-hidden border border-primary/20 shadow-2xl shadow-primary/5 relative"
          >
            {/* Google Maps Iframe */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.352571150727!2d79.90128997499478!3d6.7267648932692525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24575ad470109%3A0xfa3285c2584c6047!2sCrashBAR%20BYOB!5e0!3m2!1sen!2slk!4v1777420694904!5m2!1sen!2slk"
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </main>
  );
};

export default ContactPage;
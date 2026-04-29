"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, MessageCircle, Music } from 'lucide-react';
import Image from 'next/image';

const upcomingEvents = [
  {
    id: 1,
    title: "Acoustic Night with Cheran & Jason",
    date: "May 02, 2026",
    time: "7:30 PM Onwards",
    location: "Main Deck, CrashBAR",
    description: "Experience a soul-stirring evening with live acoustic hits. Perfect vibe for your favorite drinks.",
    image: "/event2.jpg",
    tag: "Live Music"
  },
  {
    id: 2,
    title: "Friday Night Full Band",
    date: "May 08, 2026",
    time: "8:00 PM Onwards",
    location: "Main Stage",
    description: "Get ready to rock the night! One of the best bands in town is hitting our stage.",
    image: "/event2.jpg",
    tag: "Full Band"
  }
];

const EventsPage = () => {
  const whatsappNumber = "+947607129";

  return (
    <main className="min-h-screen bg-black pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-primary font-bold uppercase tracking-widest text-sm mb-4"
          >
            Don't Miss Out
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold text-white uppercase tracking-tighter"
          >
            Upcoming <span className="text-primary">Events</span>
          </motion.h1>
        </div>

        {/* Upcoming Events List */}
        <div className="grid grid-cols-1 gap-12">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col md:flex-row bg-zinc-900/30 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-primary/30 transition-all"
            >
              {/* Event Image */}
              <div className="relative w-full md:w-2/5 h-80 md:h-auto overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-6 left-6 bg-primary text-black font-bold px-4 py-1 rounded-full text-xs uppercase">
                  {event.tag}
                </div>
              </div>

              {/* Event Content */}
              <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex flex-wrap gap-6 mb-6 text-gray-400 text-sm font-medium">
                  <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={18} className="text-primary" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-8 max-w-xl">
                  {event.description}
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=I want to reserve a table for ${event.title}`}
                    target="_blank"
                    className="bg-primary text-black font-black px-8 py-4 rounded-xl text-sm uppercase tracking-widest flex items-center gap-3 hover:bg-white transition-all shadow-lg shadow-primary/10"
                  >
                    <MessageCircle size={20} />
                    Reserve a Table
                  </a>
                  <button className="border border-white/10 text-white font-bold px-8 py-4 rounded-xl text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Box: Custom Events */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 p-12 rounded-[3rem] bg-gradient-to-r from-zinc-900 to-black border border-primary/20 text-center"
        >
          <Music className="mx-auto text-primary mb-6" size={48} />
          <h4 className="text-3xl font-bold text-white mb-4 uppercase">Host Your Own Event</h4>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Planning a private party, birthday celebration, or a corporate hangout? 
            CrashBAR provides the perfect BYOB space with catering and music support.
          </p>
          <button className="text-primary font-bold uppercase tracking-widest text-sm border-b-2 border-primary pb-1 hover:text-white hover:border-white transition-all">
            <a 
              href="https://wa.me/947607129?text=I'm interested in booking CrashBAR for a private event!" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block "
            >
              Contact for Bookings
            </a>
          </button>
        </motion.div>

      </div>
    </main>
  );
};

export default EventsPage;
"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const reviewsData = [
  {
    name: "Viraj Weerasundara",
    date: "2 months ago",
    rating: 5,
    comment: "Best location calm and quiet environment. Good supportive staff. Foods are good. I recommend it. 👍❤️",
    image: "https://i.pravatar.cc/150?u=viraj"
  },
  {
    name: "Pathum Jayamaha",
    date: "1 month ago",
    rating: 5,
    comment: "Had a really good experience here. The food was well prepared and flavorful, especially the main dishes. Service was polite and efficient. Prices are reasonable for the quality.",
    image: "https://i.pravatar.cc/150?u=pathum"
  },
  {
    name: "Adeepa Wickramasinghe",
    date: "3 days ago",
    rating: 5,
    comment: "Excellent food and service. Highly recommended. The BYOB concept works perfectly here with the atmosphere.",
    image: "https://i.pravatar.cc/150?u=adeepa"
  },
  {
    name: "Shameel Hassimdeen",
    date: "1 week ago",
    rating: 5,
    comment: "Solid location & lovely view to hang out with friends 😍",
    image: "https://i.pravatar.cc/150?u=saman"
  }
];

const Reviews: React.FC = () => {
  return (
    <section className="bg-black py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="text-left">
            <h3 className="text-primary text-2xl font-serif italic mb-2">Testimonials</h3>
            <h3 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tighter">
              What our <span className="text-primary">Guests </span> say
            </h3>
          </div>
          
          <div className="flex items-center gap-4">
             {/* Custom Navigation Buttons */}
             <div className="flex gap-2">
                <button className="review-prev p-2 border border-primary/20 rounded-full text-primary hover:bg-primary hover:text-black transition-all">
                    <ChevronLeft size={24} />
                </button>
                <button className="review-next p-2 border border-primary/20 rounded-full text-primary hover:bg-primary hover:text-black transition-all">
                    <ChevronRight size={24} />
                </button>
             </div>
             <div className="hidden sm:flex items-center gap-2 bg-zinc-900/50 p-4 rounded-xl border border-white/5">
                <div className="flex text-primary">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <span className="text-white font-bold">4.9</span>
             </div>
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation={{
            prevEl: '.review-prev',
            nextEl: '.review-next',
          }}
          pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {reviewsData.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-zinc-900/30 border border-white/5 p-8 rounded-3xl relative h-full group hover:border-primary/30 transition-all">
                <Quote className="absolute top-6 right-8 text-primary/10 group-hover:text-primary/20 transition-colors" size={40} />
                
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    className="w-12 h-12 rounded-full border-2 border-primary/20"
                  />
                  <div>
                    <h4 className="text-white font-bold">{review.name}</h4>
                    <p className="text-gray-500 text-xs">{review.date}</p>
                  </div>
                </div>

                <div className="flex text-primary mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>

                <p className="text-gray-400 italic leading-relaxed">
                  "{review.comment}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Dots */}
        <div className="swiper-pagination-custom flex justify-center gap-2 mt-4"></div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a 
            href="https://g.page/r/CUdgTFjChTL6EAE/review"
            target="_blank"
            className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors font-bold uppercase tracking-widest text-sm"
          >
            Write a review on Google <span>→</span>
          </a>
        </div>
      </div>

      {/* CSS for Swiper Pagination (globals.css එකට දැම්මත් කමක් නැහැ) */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #555 !important;
          opacity: 1 !important;
        }
        .swiper-pagination-bullet-active {
          background: #ffa800 !important;
          width: 20px !important;
          border-radius: 10px !important;
        }
      `}</style>
    </section>
  );
};

export default Reviews;
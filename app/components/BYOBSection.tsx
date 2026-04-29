"use client";

import { Beer, IceCream, UtensilsCrossed } from 'lucide-react'; // Icons සඳහා

export const BYOBSection = () => {
  return (
    <section className="bg-zinc-950 py-24 px-6 text-center">
      <div className="max-w-5xl mx-auto border border-primary/20 rounded-[3rem] p-12 md:p-20 bg-gradient-to-b from-primary/5 to-transparent">
        <h3 className="text-primary text-sm font-bold uppercase tracking-[0.4em] mb-6">The Rules</h3>
        <h4 className="text-4xl md:text-6xl font-bold text-white uppercase mb-10 leading-tight">
          Bring Your <span className="text-primary">Bottle</span><br/> We Provide the <span className="text-primary">Vibe</span>
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary"><Beer size={32} /></div>
            <p className="text-white font-medium uppercase tracking-widest">No Corkage Fee</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary"><IceCream size={32} /></div>
            <p className="text-white font-medium uppercase tracking-widest">Unlimited Ice & Chasers</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary"><UtensilsCrossed size={32} /></div>
            <p className="text-white font-medium uppercase tracking-widest">Amazing Food Menu</p>
          </div>
        </div>
      </div>
    </section>
  );
};


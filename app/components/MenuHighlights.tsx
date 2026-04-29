"use client";

export const MenuHighlights = () => {
  const items = [
    { name: "Hot Butter Cuttlefish", price: "Rs. 1800", desc: "Crispy cuttlefish tossed with spicy butter and spring onions." },
    { name: "Devilled Chicken", price: "Rs. 1400", desc: "Classic Sri Lankan style spicy chicken with a kick." },
    { name: "CrashBAR Platter", price: "Rs. 3500", desc: "Assorted bites perfect for sharing with your group." },
  ];

  return (
    <section className="bg-black py-24 px-6 border-y border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
           <h3 className="text-primary text-2xl font-serif italic mb-2">Our Specials</h3>
           <h4 className="text-5xl font-bold text-white uppercase">Signature <span className="text-primary">Bites</span></h4>
        </div>

        <div className="space-y-12">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row justify-between items-start border-b border-primary/10 pb-8 group">
              <div className="max-w-xl">
                <h5 className="text-white text-2xl font-bold uppercase group-hover:text-primary transition-colors">{item.name}</h5>
                <p className="text-gray-400 mt-2">{item.desc}</p>
              </div>
              <span className="text-primary text-2xl font-bold mt-4 md:mt-0">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
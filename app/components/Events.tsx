"use client";

export const Events = () => {
  const events = [
    { date: "APR 17", band: "Koho by the Lake", time: "7:00 PM onwards", type: "Live Music" },
    { date: "APR 24", band: "Live Musical Event", time: "7:00 PM onwards", type: "Special Musical Night" },
    { date: "FEB 24", band: "Valantines' Night", time: "7:00 PM onwards", type: "Special Night" },
  ];

  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-4xl font-bold uppercase mb-12 border-l-4 border-primary pl-6">Upcoming <span className="text-primary">Events</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((ev, i) => (
            <div key={i} className="flex items-center gap-8 bg-zinc-900/50 p-8 rounded-3xl border border-white/5 hover:bg-zinc-900 transition-all cursor-default">
              <div className="text-center border-r border-primary/20 pr-8">
                <p className="text-primary text-3xl font-black leading-none">{ev.date.split(' ')[1]}</p>
                <p className="text-white text-sm font-bold uppercase">{ev.date.split(' ')[0]}</p>
              </div>
              <div>
                <span className="text-primary text-xs font-bold uppercase tracking-tighter bg-primary/10 px-2 py-1 rounded-md">{ev.type}</span>
                <h5 className="text-white text-3xl font-bold mt-2">{ev.band}</h5>
                <p className="text-gray-500 text-sm mt-1">{ev.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
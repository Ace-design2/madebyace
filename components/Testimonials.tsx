"use client";

import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CEO at KoraTech",
    quote: "Working with them was incredible. The level of detail and aesthetic perfection brought to our web platform fundamentally changed our conversion rates.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=1",
  },
  {
    name: "Marcus Thorne",
    role: "Founder, Thorne Design",
    quote: "A rare mix of brilliant engineering and breathtaking design. They didn't just build a site, they architected a premium digital experience for our brand.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=2",
  },
  {
    name: "Elena Rodriguez",
    role: "Marketing Director",
    quote: "Fast, communicative, and terrifyingly skilled. The cinematic animations and glassmorphism elements they implemented left our entire executive team speechless.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=3",
  },
  {
    name: "David Chen",
    role: "CTO, Lumina Innovations",
    quote: "The cleanest code architecture paired with the most aggressive, cutting-edge UI I've seen. Delivering agency-level quality on strict timelines.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=4",
  },
  {
    name: "Chloe Michaels",
    role: "Creative Director",
    quote: "I’ve worked with dozens of developers, but few possess the visual instinct seen here. The motion design perfectly executed our creative vision.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=5",
  }
];

export default function Testimonials() {
  // Duplicate array for seamless infinite marquee loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="relative w-full pt-16 md:pt-24 pb-32 md:pb-48 bg-white dark:bg-black overflow-hidden transition-colors duration-500 border-y border-black/5 dark:border-white/5">
      
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] rounded-full bg-red-600/5 blur-[120px] mix-blend-screen opacity-50" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 dark:opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 mb-16 md:mb-20">
        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-marags font-black text-black dark:text-white tracking-tighter uppercase leading-none transition-colors duration-500">
            CLIENT <span className="text-red-600 dark:text-red-500">REVIEWS</span>
          </h2>
          <div className="w-16 h-[3px] bg-red-600/50" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-sm md:text-base font-medium mt-6 transition-colors duration-500">
            Don&apos;t just take my word for it. Here&apos;s what founders, directors, and technical leaders have to say about the quality of execution and process.
          </p>
        </div>
      </div>

      {/* Marquee Carousel Layer */}
      <div 
        className="w-full relative overflow-hidden flex flex-col justify-center items-start group"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
          maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'
        }}
      >
        <div className="flex animate-marquee hover:[animation-play-state:paused] w-max gap-6 md:gap-8 px-6">
          {duplicatedTestimonials.map((testimonial, idx) => (
            <div 
              key={idx} 
              className="relative w-[300px] sm:w-[380px] md:w-[450px] flex-shrink-0 bg-black/5 dark:bg-[#0A0A0A] backdrop-blur-xl border border-black/10 dark:border-white/10 p-8 md:p-10 rounded-[2.5rem] group/card hover:border-red-500/30 hover:shadow-[0_0_30px_rgba(255,26,26,0.1)] transition-all duration-500 cursor-pointer"
            >
              {/* Internal subtle glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-red-500/0 via-transparent to-red-500/5 opacity-0 group-hover/card:opacity-100 rounded-[2.5rem] pointer-events-none transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col gap-6 h-full justify-between">
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FiStar key={i} className="text-red-500 fill-red-500 w-4 h-4" />
                    ))}
                  </div>
                  
                  <p className="text-base sm:text-lg text-black dark:text-white leading-relaxed font-medium transition-colors duration-500">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>
                
                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-black/5 dark:border-white/5">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-black/10 dark:border-white/10 shrink-0">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm text-black dark:text-white">{testimonial.name}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider mt-1">{testimonial.role}</span>
                  </div>
                </div>
              </div>

              {/* Decorative Quotes Icon in background */}
              <div className="absolute top-6 right-8 text-7xl font-serif text-black/5 dark:text-white/5 pointer-events-none select-none transition-colors duration-500 group-hover/card:text-red-500/10">
                &rdquo;
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}

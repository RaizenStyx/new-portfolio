"use client";

import React, { useState } from "react";

// The data structure - easy to move to a database later
const testimonials = [
  {
    id: 1,
    name: "Jerail B.",
    business: "Grahic Design Update",
    text: "Connor Reed was very professional and timely in the was he worked. It was a quick 24 hour turn around with the project i asked him to work on, hr was also very honest with me with what he could and couldn’t do, which i appreciate. A lot of times you have people take a job that have no clue what they are doing, and they do not give you the results that you needed or wanted. Connor told me what he could do, and turned out a product that was way better than he was giving himself credit for, i rate 5 stars all around, and would/will most definitely do business with in the future.",
    rating: 5,
  },
  {
    id: 2,
    name: "Robert S.",
    business: "Shopify E-Commerce Store",
    text: "Connor did a fantastic job on our website redesign. His communication skills were exceptional and he went above and beyond what we requested. Highly recommend him and we will definitely use him for future projects.",
    rating: 5,
  },
  {
    id: 3,
    name: "Carrie S.",
    business: "Nyxus App Development",
    text: "Connor Reed is a fantastic developer and collaborator. He helped me untangle a few coding challenges in my own LMS dashboard project and explained the fixes in a way that made everything feel manageable. We're also working together on an app he built called Nyxus. Connor handles development and I contribute content, and I've appreciated how organized, responsive, and solutions-focused he is throughout the process. I'd happily work with him again and recommend him without hesitation.",
    rating: 5,
  },
  {
    id: 4,
    name: "Colette M.",
    business: "Shopify Integration",
    text: "Connor did not oversell his knowledge, he was in fact very knowledgable and provided me all the details needed to fix my technical issue and how he resolved it. He was patient with me to test that it worked, and was very good with communication. Highly recommend!",
    rating: 5,
  },

];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-emerald-400" : "text-slate-600"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export default function TestimonialMarquee() {
  // Explicitly track the pause state for flawless mobile and desktop handling
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-16 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Trusted by Growing Businesses</h2>
        <p className="text-slate-400">Don't just take my word for it.</p>
      </div>

      <div 
        className="relative w-full flex overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
        }}
        // Pause events for desktop (mouse) and mobile (touch)
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* 
          We render 4 identical tracks. This guarantees that even on ultra-wide 
          monitors, there will never be a blank space before the animation resets.
        */}
        {[...Array(4)].map((_, trackIndex) => (
          <div 
            key={trackIndex} 
            className="flex shrink-0 gap-6 pr-6 animate-marquee"
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
            aria-hidden={trackIndex > 0} // Hides duplicates from screen readers
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="w-[300px] md:w-[400px] shrink-0 bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-lg transition-colors hover:border-emerald-500/50"
              >
                <StarRating rating={testimonial.rating} />
                <p className="text-slate-300 italic mb-6 text-sm md:text-base leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-emerald-400 font-bold border border-slate-700">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                    <p className="text-emerald-500/80 text-xs">{testimonial.business}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* 
        The updated keyframes. Because of the 'pr-6' on the track, translating it 
        by exactly -100% creates a mathematically perfect, invisible loop.
      */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          /* Adjust the 25s to change the speed */
          animation: marquee 25s linear infinite; 
        }
      `}} />
    </section>
  );
}
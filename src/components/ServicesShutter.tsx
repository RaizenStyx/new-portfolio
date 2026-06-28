"use client";

import { useState } from "react";

// Data for Local Service Businesses (Using only the Lawn Care link for now)
const serviceData = [
  {
    id: 1,
    trigger: "Look Professional",
    heading: "Turn Referrals Into Revenue",
    subheading: "Build Instant Trust",
    text: "Even word-of-mouth referrals will Google you before calling. A modern, professional website proves your business is legitimate and established.",
    // image: "/images/mockups/mockup-1.jpg", 
    buttonText: "View Lawn Care Example",
    link: "https://client-template-two.vercel.app/" 
  },
  {
    id: 2,
    trigger: "Local Search",
    heading: "Dominate Local Searches",
    subheading: "Capture Active Buyers",
    text: "When neighbors search for your services, your competitors are showing up. We build SEO-optimized sites that put you in front of people ready to buy.",
    // image: "/images/mockups/mockup-2.jpg", 
    buttonText: "View Lawn Care Example",
    link: "https://client-template-two.vercel.app/"
  },
  {
    id: 3,
    trigger: "Lead Capture",
    heading: "Get Quotes While You Sleep",
    subheading: "Automate Inquiries",
    text: "Stop missing calls while on a job site. Your website acts as a 24/7 receptionist, allowing customers to request quotes at any time.",
    // image: "/images/mockups/mockup-3.jpg",
    buttonText: "View Lawn Care Example",
    link: "https://client-template-two.vercel.app/"
  },
  {
    id: 4,
    trigger: "Showcase Work",
    heading: "Stop Explaining, Start Showing",
    subheading: "Highlight Expertise",
    text: "Stop scrolling through your phone to find past work. A dedicated portfolio lets you show pristine before-and-after photos and reviews.",
    // image: "/images/mockups/mockup-4.jpg",
    buttonText: "View Lawn Care Example",
    link: "https://client-template-two.vercel.app/"
  },
];

// Data for E-Commerce & Retail (No links provided, so buttons will hide automatically)
const ecommerceData = [
  {
    id: 1,
    trigger: "Sell 24/7",
    heading: "Your Store, Always Open",
    subheading: "Seamless Shopping",
    text: "Break free from business hours. We build custom storefronts that provide a smooth, secure shopping experience for your customers anytime, anywhere.",
    // image: "/images/mockups/ecommerce-1.jpg",
    buttonText: "",
    link: ""
  },
  {
    id: 2,
    trigger: "Inventory Sync",
    heading: "Effortless Management",
    subheading: "Powerful Dashboards",
    text: "Keep track of your products, variations, and stock levels with intuitive dashboards integrated directly into your e-commerce platform.",
    // image: "/images/mockups/ecommerce-2.jpg",
    buttonText: "",
    link: ""
  },
  {
    id: 3,
    trigger: "High Conversion",
    heading: "Fewer Abandoned Carts",
    subheading: "Optimized Checkout",
    text: "A complicated checkout costs you money. We implement lightning-fast, mobile-friendly payment flows to ensure browsers turn into buyers.",
    // image: "/images/mockups/ecommerce-3.jpg",
    buttonText: "",
    link: ""
  },
  {
    id: 4,
    trigger: "Brand Identity",
    heading: "Stand Out From The Pack",
    subheading: "Custom Design",
    text: "Don't settle for a generic template. We design visually striking stores that perfectly capture your unique brand identity and build customer loyalty.",
    // image: "/images/mockups/ecommerce-4.jpg",
    buttonText: "",
    link: ""
  },
];

export default function ServicesShutter() {
  const [activeCategory, setActiveCategory] = useState<"services" | "ecommerce">("services");
  const [activeIndex, setActiveIndex] = useState(0);

  const currentData = activeCategory === "services" ? serviceData : ecommerceData;

  const handleTabSwitch = (category: "services" | "ecommerce") => {
    setActiveCategory(category);
    setActiveIndex(0); 
  };

  return (
    <div className="w-full">
      {/* Tab Toggle Switch */}
      <div className="flex justify-center mb-8">
        <div className="bg-slate-800 p-1 rounded-lg inline-flex">
          <button
            onClick={() => handleTabSwitch("services")}
            className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 cursor-pointer ${
              activeCategory === "services"
                ? "bg-emerald-500 text-white shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Local Services
          </button>
          <button
            onClick={() => handleTabSwitch("ecommerce")}
            className={`px-6 py-2 rounded-md font-semibold transition-all duration-300 cursor-pointer ${
              activeCategory === "ecommerce"
                ? "bg-emerald-500 text-white shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            E-Commerce
          </button>
        </div>
      </div>

      {/* Shutter Container */}
      <div className="flex flex-col md:flex-row h-[90vh] md:h-[600px] w-full overflow-hidden max-w-7xl mx-auto rounded-xl shadow-2xl border border-slate-800 bg-slate-950">
        {currentData.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={item.id}
              onClick={() => setActiveIndex(index)}
              className={`relative group cursor-pointer overflow-hidden transition-all duration-700 ease-in-out border-b md:border-b-0 md:border-r border-slate-800
                ${isActive ? "flex-[4] md:flex-[4]" : "flex-[1] md:flex-[1]"}
              `}
            >
              {/* IMAGE BACKGROUND (Commented out for future use) */}
              {/* <div
                className="absolute inset-0 bg-slate-900 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url(${item.image})` }}
              /> 
              */}

              {/* Gradient Overlay (Modified to look good without images) */}
              <div 
                className={`absolute inset-0 transition-colors duration-500 bg-gradient-to-br from-slate-900 to-slate-950
                ${isActive ? "opacity-100" : "opacity-60 group-hover:opacity-80"}`} 
              />

              {/* Content Wrapper */}
              <div className="absolute inset-0 flex items-center justify-center p-6 md:p-10">
                
                {/* Inactive Trigger Text */}
                <div 
                  className={`absolute transition-opacity duration-300 pointer-events-none text-white font-bold tracking-widest uppercase text-sm md:text-lg whitespace-nowrap
                    ${isActive ? "opacity-0" : "opacity-100 md:-rotate-90"}
                  `}
                >
                  {item.trigger}
                </div>

                {/* Active Detailed Content */}
                <div 
                  className={`flex flex-col items-center md:items-start text-center md:text-left text-white max-w-lg transition-all duration-700 delay-100 mt-auto md:mt-0
                    ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"}
                  `}
                >
                  <h3 className="text-emerald-400 font-bold tracking-wider uppercase mb-2 text-xs md:text-sm">
                    {item.subheading}
                  </h3>
                  <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
                    {item.heading}
                  </h2>
                  <p className="text-slate-300 mb-6 text-sm md:text-base leading-relaxed">
                    {item.text}
                  </p>
                  
                  {/* Conditional Button Rendering */}
                  {item.link && (
                    <a 
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 border-emerald-500 bg-emerald-500/10 text-emerald-300 px-6 py-2 rounded-md font-semibold hover:bg-emerald-500 hover:text-white transition-colors duration-300"
                    >
                      {item.buttonText}
                    </a>
                  )}
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
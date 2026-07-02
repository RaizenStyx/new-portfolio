
import ServicesShutter from "@/components/ServicesShutter";
import Link from "next/link";
import { Metadata } from "next";
import TestimonialMarquee from "@/components/TestimonialMarquee";

export const metadata: Metadata = {
  title: "Web Design Services",
  description: "Custom websites built to grow your business. Specializing in lead-capture landing pages for service providers and high-converting e-commerce storefronts in East Tennessee.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-24 pb-20">
      
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
          Websites Built to <span className="text-emerald-400">Grow Your Business</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
          You don't just need a website—you need a tool that works as hard as you do. 
          Select your industry below to see how a professional online presence can save you time and bring in more revenue.
        </p>
      </section>

      {/* The Interactive Tabbed Shutter */}
      <section className="w-full px-4">
        <ServicesShutter />
      </section>

      {/* The Testimonials Section */}
      <section className="w-full">
        <TestimonialMarquee />
      </section>

      {/* Final Call to Action */}
      <section className="max-w-3xl mx-auto px-6 text-center bg-slate-900 rounded-2xl p-10 border border-slate-800 shadow-xl">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to upgrade your business?</h2>
        <p className="text-slate-400 mb-8">
          Whether you need a simple landing page to capture local leads or a full e-commerce storefront, I can build a solution tailored to your budget.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/contact" 
            className="bg-emerald-500 text-slate-950 font-bold px-8 py-3 rounded-md hover:bg-emerald-400 transition-colors"
          >
            Get a Free Quote
          </Link>
          <Link 
            href="/" 
            className="border border-slate-600 text-white font-bold px-8 py-3 rounded-md hover:bg-slate-800 transition-colors"
          >
            View My Developer Portfolio
          </Link>
        </div>
      </section>

    </main>
  );
}
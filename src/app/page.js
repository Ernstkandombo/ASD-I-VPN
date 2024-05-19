'use client'
import { Button } from "@/components/ui/button";

import Nav from "@/components/sections/nav";
import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";
import Privacy from "@/components/sections/privacy";
import Avaliability from "@/components/sections/avaliability";
import About from "@/components/sections/about";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/footer";



export default function Home() {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <Nav />

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Ad Space Top */}
        <div className="bg-gray-200 text-center py-4 mb-8">
          <p>Ad Space Top</p>
        </div>

        {/* Hero Section */}

        <Hero />

        {/* Ad Space Middle */}
        <div className="bg-gray-200 text-center py-4 mb-8">
          <p>Ad Space Middle</p>
        </div>

        {/* Features Section */}

        <Features />

        {/* Privacy and Pricing Section */}
        <Privacy />

        {/* Availability Section */}
        <Avaliability />

        {/* About Us Section */}

        <About />
        {/* FAQs Section */}
        <FAQ />

        {/* Ad Space Bottom */}
        <div className="bg-gray-200 text-center py-4 mb-8">
          <p>Ad Space Bottom</p>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

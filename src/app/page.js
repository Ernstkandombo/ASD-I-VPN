

import Nav from "@/components/sections/nav";
import Hero from "@/components/sections/hero";
import Features from "@/components/sections/features";

import Avaliability from "@/components/sections/avaliability";
import About from "@/components/sections/about";

import Footer from "@/components/sections/footer";
import Topbanner from "@/components/sections/topbanner";
import MiddleBanner from "@/components/sections/middlebanner";
import BottomBanner from "@/components/sections/bottombanner";


export default function Home() {

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <Nav />

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Section */}
        <Hero />
        {/* Ad Space Top */}
        <Topbanner />
        {/* Features Section */}
        <Features />
        {/* Ad Space Middle */}
        <MiddleBanner />

        {/* Availability Section */}
        <Avaliability />

        {/* About Us Section */}
        <About />
        {/* Ad Space Bottom */}
        <BottomBanner />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

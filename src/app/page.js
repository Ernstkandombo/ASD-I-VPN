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
import Topbanner from "@/components/sections/Topbanner";


import React, { useEffect } from "react";
import axios from "axios";

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://ad.simaneka.com/api/get",
          {
            type: "Horizontal Strip",
            tags: "vpn",
          },
          {
            headers: {
              authorisation: "blBzASr9NULmht7w5Y4fBWmDv8LQJNme",
            },
          }
        );
        console.log(response.data);
        document.querySelectorAll(".advertIMG").forEach((img) => {
          img.src = response.data.link;
          img.alt = response.data.alt;
        });
        document.querySelectorAll(".anchorElement").forEach((a) => {
          a.href = response.data.href;
        });
        document.querySelectorAll(".headerText").forEach((p) => {
          p.innerHTML = response.data.message;
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* Header */}
      <Nav />

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Ad Space Top */}
        <Topbanner />

        {/* Hero Section */}
        <Hero />

        {/* Ad Space Middle */}
        <div className="bg-gray-200 text-center py-4 mb-8">
          <a className="anchorElement" href="#">
            <p className="headerText">Ad Space Middle</p>
            <img className="advertIMG mx-auto" alt="Ad Space Middle" />
          </a>
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
          <a className="anchorElement" href="#">
            <p className="headerText">Ad Space Bottom</p>
            <img className="advertIMG mx-auto" alt="Ad Space Bottom" />
          </a>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

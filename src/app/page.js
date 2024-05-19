import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Nav from "@/components/sections/nav";
import Hero from "@/components/sections/hero";
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
        <section className="py-16 bg-gray-100">
          <div className="lg:flex lg:space-x-8">
            <Card className="lg:w-1/2 bg-white shadow p-8 rounded-lg mb-8 lg:mb-0">
              <h2 className="text-2xl font-bold mb-4">One tap to privacy</h2>
              <p className="text-gray-600">We use the most advanced protocol, WireGuard®, to encrypt your network activity and hide your IP address.</p>
              <img src="path_to_feature_image_1" alt="Feature 1" className="mt-4 mx-auto max-w-full h-auto" />
            </Card>
            <Card className="lg:w-1/2 bg-white shadow p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Fast network speed</h2>
              <p className="text-gray-600">Surf, stream, game, and get work done with fast network speed using our WireGuard® powered servers.</p>
              <img src="path_to_feature_image_2" alt="Feature 2" className="mt-4 mx-auto max-w-full h-auto" />
            </Card>
          </div>
        </section>

        {/* Privacy and Pricing Section */}
        <section className="py-16 bg-white">
          <div className="lg:flex lg:space-x-8">
            <Card className="lg:w-1/2 bg-white shadow p-8 rounded-lg mb-8 lg:mb-0">
              <h2 className="text-2xl font-bold mb-4">Your privacy comes first</h2>
              <p className="text-gray-600">We don't store your online activity logs on our servers.</p>
              <img src="path_to_privacy_image" alt="Privacy" className="mt-4 mx-auto max-w-full h-auto" />
            </Card>
            <Card className="lg:w-1/2 bg-white shadow p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">US$4.99/month</h2>
              <ul className="text-gray-600 mb-4">
                <li>Device-level encryption</li>
                <li>280+ servers in 30+ countries</li>
                <li>No bandwidth restrictions</li>
                <li>No logging of your network activity</li>
                <li>Connect up to 5 devices</li>
              </ul>
              <Button className="bg-black text-white py-3 px-6 rounded-full">Join the Waitlist</Button>
              <p className="text-sm text-gray-600 mt-4">We currently offer VPN in the US, UK, Canada, New Zealand, Singapore, and Malaysia.</p>
            </Card>
          </div>
        </section>

        {/* Availability Section */}
        <section className="py-16 bg-gray-100 text-center">
          <h2 className="text-2xl font-bold mb-4">Available in 6 countries now. More regions coming soon.</h2>
          <Button className="bg-black text-white py-3 px-6 rounded-full">Join the Waitlist</Button>
          <img src="path_to_availability_image" alt="Availability" className="mt-8 mx-auto max-w-full h-auto" />
        </section>

        {/* About Us Section */}
        <section className="py-16 bg-white text-center">
          <h2 className="text-2xl font-bold mb-4">About our trusted partner</h2>
          <p className="text-gray-600 mb-8">The VPN runs on a global network of servers powered by Mullvad using the WireGuard® protocol. Mullvad puts your privacy first and does not keep logs of any kind.</p>
          <img src="path_to_partner_image" alt="Partner" className="mx-auto max-w-full h-auto" />
        </section>

        {/* FAQs Section */}
        <section className="py-16 bg-gray-100">
          <h2 className="text-2xl font-bold mb-4 text-center">FAQs</h2>
          <Accordion type="single" collapsible className="bg-white shadow p-4 rounded-lg mb-4">
            <AccordionItem>
              <AccordionTrigger className="text-lg font-bold">What devices is the VPN compatible with?</AccordionTrigger>
              <AccordionContent>
                The VPN is compatible with Windows, Android, iOS, Mac, and Linux.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem>
              <AccordionTrigger className="text-lg font-bold">What information does the VPN keep?</AccordionTrigger>
              <AccordionContent>
                The VPN does not store your online activity logs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem>
              <AccordionTrigger className="text-lg font-bold">How is my privacy protected?</AccordionTrigger>
              <AccordionContent>
                We use the most advanced protocol, WireGuard®, to encrypt your network activity and hide your IP address.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem>
              <AccordionTrigger className="text-lg font-bold">What is the VPN's refund policy?</AccordionTrigger>
              <AccordionContent>
                You can request a refund within the first 30 days of your subscription.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="text-center">
            <Button className="bg-black text-white py-3 px-6 rounded-full">Join the Waitlist</Button>
          </div>
        </section>

        {/* Ad Space Bottom */}
        <div className="bg-gray-200 text-center py-4 mb-8">
          <p>Ad Space Bottom</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="mb-4">&copy; {new Date().getFullYear()} VPN Company. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms & Conditions</a>
            <a href="#" className="hover:underline">Cookies</a>
            <a href="#" className="hover:underline">Legal</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

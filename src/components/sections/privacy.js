'use client'
import React from 'react'
import { Card } from "@/components/ui/card";
import { Button } from '../ui/button';
export default function privacy() {
    return (
        <section className="py-16 bg-white">
            <div className="lg:flex lg:space-x-8">
                <Card className="lg:w-1/2 bg-white shadow p-8 rounded-lg mb-8 lg:mb-0">
                    <h2 className="text-2xl font-bold mb-4">Your privacy comes first</h2>
                    <p className="text-gray-600">We don&apos;t store your online activity logs on our servers.</p>
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
    )
}

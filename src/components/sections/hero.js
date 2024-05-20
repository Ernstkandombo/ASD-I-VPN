'use client'
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

export default function Hero() {
    return (
        <section className="flex flex-col md:flex-row justify-center items-center py-20 gap-6 z-10">
            <div className="text-center md:text-left md:max-w-md lg:max-w-lg">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Security you can rely on. A name you can trust.</h1>
                <p className="text-lg mb-8">A VPN from the trusted pioneer in internet privacy.</p>
                <Button className="bg-black text-white py-3 px-6 mb-8">Join the Waitlist</Button>
                <p className="text-sm text-gray-600 max-w-xs md:max-w-sm mx-auto md:mx-0">We currently offer VPN in Namibia, South Africa, Botswana, Angola, Zambia, and Zimbabwe.</p>
                <p className="text-sm text-gray-600 py-2">Available on: <span className="font-bold">Windows, Android, iOS</span>. Mac & Linux coming soon.</p>
            </div>
            <div className="flex justify-center md:justify-end">
                <Image src="/assets/hero.png" width={600} height={600} alt="VPN illustration" className="w-full max-w-xs md:max-w-sm lg:max-w-md" />
            </div>
        </section>
    )
}

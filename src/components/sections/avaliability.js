'use client'
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
export default function avaliability() {
    return (
        <section className="items-center justify-center flex flex-col py-16 bg-[#fc7219] text-center text-white ">
            <h2 className="text-2xl font-bold mb-4">Available in 6 countries now. More regions coming soon.</h2>
            <Button className="bg-black hover:bg-gray-800">Join the Waitlist</Button>
            <Image src="/assets/globe.png" width={600} height={600} alt="VPN illustration" className="w-full max-w-xs md:max-w-sm lg:max-w-md" />
        </section>
    )
}

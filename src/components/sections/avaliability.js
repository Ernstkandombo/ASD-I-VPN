'use client'
import React from 'react'
import { Button } from '../ui/button'
export default function avaliability() {
    return (
        <section className="py-16 bg-gray-100 text-center">
            <h2 className="text-2xl font-bold mb-4">Available in 6 countries now. More regions coming soon.</h2>
            <Button className="bg-black text-white py-3 px-6 rounded-full">Join the Waitlist</Button>
            <img src="path_to_availability_image" alt="Availability" className="mt-8 mx-auto max-w-full h-auto" />
        </section>
    )
}

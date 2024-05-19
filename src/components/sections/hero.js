import React from 'react'
import { Button } from '../ui/button'

export default function hero() {
    return (
        <section className="text-center py-20 bg-white">
            <h1 className="text-4xl font-bold mb-4">Security you can rely on. A name you can trust.</h1>
            <p className="text-lg mb-8">A VPN from the trusted pioneer in internet privacy.</p>
            <Button className="bg-black text-white py-3 px-6 rounded-full mb-8">Join the Waitlist</Button>
            <p className="text-sm text-gray-600">We currently offer VPN in the US, UK, Canada, New Zealand, Singapore, and Malaysia.</p>
            <p className="text-sm text-gray-600">Available on: <span className="font-bold">Windows, Android, iOS</span>. Mac & Linux coming soon.</p>
            <img src="https://placehold.co/400x400" alt="VPN illustration" className="mt-8 mx-auto max-w-full h-auto" />
        </section>
    )
}

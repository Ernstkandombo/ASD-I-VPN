import React from 'react'
import { Button } from '../ui/button'

export default function hero() {
    return (
        <section className="flex justify-center items-center py-20 gap-6ß bg-white">
            <div>
                <h1 className="text-4xl font-bold mb-4 max-w-xs">Security you can rely on. A name you can trust.</h1>
                <p className="text-lg mb-8">A VPN from the trusted pioneer in internet privacy.</p>
                <Button className="bg-black text-white py-3 px-6 mb-8">Join the Waitlist</Button>
                <p className="text-sm text-gray-600  max-w-sm">We currently offer VPN in the Namibia, South Africa, Botswana, Angola, Zambia, and Zimbwabe.</p>
                <p className="text-sm text-gray-600 py-2">Available on: <span className="font-bold">Windows, Android, iOS</span>. Mac & Linux coming soon.</p>
            </div>
            <div>
                <img src="https://placehold.co/400x400" alt="VPN illustration" className="mt-8 mx-auto max-w-full h-auto" />
            </div>
        </section>
    )
}

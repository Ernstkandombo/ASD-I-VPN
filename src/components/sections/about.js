'use client'
import React from 'react'

export default function about() {
    return (
        <section className="py-16 bg-white text-center">
            <h2 className="text-2xl font-bold mb-4">About our trusted partner</h2>
            <p className="text-gray-600 mb-8">The VPN runs on a global network of servers powered by Mullvad using the WireGuard® protocol. Mullvad puts your privacy first and does not keep logs of any kind.</p>
            <img src="path_to_partner_image" alt="Partner" className="mx-auto max-w-full h-auto" />
        </section>
    )
}

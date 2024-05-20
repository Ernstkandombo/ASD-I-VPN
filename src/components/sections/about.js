'use client'
import Image from 'next/image'
import React from 'react'

export default function about() {
    return (
        <section className="items-center justify-center flex flex-col py-16 bg-white text-center">
            <h2 className="text-2xl font-bold mb-4">About our trusted VPN</h2>
            <p className="text-gray-600 mb-8">The VPN runs on a global network of servers powered by Mullvad using the WireGuard® protocol. Mullvad puts your privacy first and does not keep logs of any kind.</p>
            <Image src="/assets/icons8-kerio-control-480.png" width={250} height={250} alt="logo" className="w-[250px] h-[250px] " />
        </section>
    )
}

'use client'
import React from 'react'

import { Card } from "@/components/ui/card";
import Image from 'next/image';

export default function features() {
    return (
        <section className="py-16">
            <div className="lg:flex lg:space-x-8">
                <Card className="lg:w-1/2 bg-white shadow p-8 rounded-lg mb-8 lg:mb-0">
                    <h2 className="text-2xl font-bold mb-4">One tap to privacy</h2>
                    <p className="text-gray-600">We use the most advanced protocol, WireGuard, to encrypt your network activity and hide your IP address.</p>
                    <Image src="/assets/privacy.png" width={600} height={600} alt="feature 1" className="w-full max-w-xs md:max-w-sm lg:max-w-md mt-4 " />
                </Card>
                <Card className="lg:w-1/2 bg-white shadow p-8 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">Fast network speed</h2>
                    <p className="text-gray-600">Surf, stream, game, and get work done with fast network speed using our WireGuard® powered servers.</p>
                    <Image src="/assets/fast.png" width={600} height={600} alt="feature 2" className="w-full max-w-xs md:max-w-sm lg:max-w-md mt-4 " />
                </Card>
            </div>
        </section>
    )
}

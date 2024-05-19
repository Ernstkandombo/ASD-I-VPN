'use client'
import React from 'react'

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function features() {
    return (
        <section className="py-16 bg-gray-100">
            <div className="lg:flex lg:space-x-8">
                <Card className="lg:w-1/2 bg-white shadow p-8 rounded-lg mb-8 lg:mb-0">
                    <h2 className="text-2xl font-bold mb-4">One tap to privacy</h2>
                    <p className="text-gray-600">We use the most advanced protocol, WireGuard, to encrypt your network activity and hide your IP address.</p>
                    <img src="path_to_feature_image_1" alt="Feature 1" className="mt-4 mx-auto max-w-full h-auto" />
                </Card>
                <Card className="lg:w-1/2 bg-white shadow p-8 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">Fast network speed</h2>
                    <p className="text-gray-600">Surf, stream, game, and get work done with fast network speed using our WireGuard® powered servers.</p>
                    <img src="path_to_feature_image_2" alt="Feature 2" className="mt-4 mx-auto max-w-full h-auto" />
                </Card>
            </div>
        </section>
    )
}

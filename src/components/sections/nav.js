import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'

export default function nav() {
    return (
        <header className="flex flex-wrap justify-between items-center p-6 bg-white shadow">
            <div className="container flex justify-between items-center">
                <div className="text-xl font-bold"> EK VPN </div>
                <div className="flex space-x-2 gap-4 mt-4 lg:mt-0">
                    <Button variant="outline">Join the Waitlist</Button>
                    <Button href="#">Sign In</Button>
                </div>
            </div>
        </header>
    )
}

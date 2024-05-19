'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import Image from 'next/image'

export default function nav() {
    return (
        <header className="flex flex-wrap justify-between items-center py-2 shadow">
            <div className="container flex justify-between items-center">
                <div className=" flex gap-2 text-xl justify-center items-center font-bold">
                    <Image src="/assets/icons8-kerio-control-480.png" width={100} height={100} alt="logo" className="w-10 h-10" />
                    <h1>EK <span className="text-[#FC7219]">VPN</span></h1>
                </div>
                <div className="flex space-x-2 gap-4 mt-4 lg:mt-0">
                    <Button variant="outline">Join the Waitlist</Button>
                    <Button href="#">Sign In</Button>
                </div>
            </div>
        </header>
    )
}

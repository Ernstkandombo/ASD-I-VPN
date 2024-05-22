'use client'

import React from 'react'

export default function footer() {
    return (
        <footer className="py-8 bg-gray-900 text-white text-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="mb-4">&copy; {new Date().getFullYear()}  EK VPN. All rights reserved. Designed and build by Qualify</p>
                <div className="flex justify-center space-x-4">
                    <a href="#" className="hover:underline">Privacy</a>
                    <a href="#" className="hover:underline">Terms & Conditions</a>
                    <a href="#" className="hover:underline">Cookies</a>
                    <a href="#" className="hover:underline">Legal</a>
                </div>
            </div>
        </footer>

    )
}

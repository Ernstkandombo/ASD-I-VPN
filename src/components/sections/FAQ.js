'use client'
import React from 'react'
import { Button } from '../ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
export default function FAQ() {
    return (
        <section className="py-16 bg-gray-100">
            <h2 className="text-2xl font-bold mb-4 text-center">FAQs</h2>
            <Accordion type="single" collapsible className="bg-white shadow p-4 rounded-lg mb-4">
                <AccordionItem>
                    <AccordionTrigger className="text-lg font-bold">What devices is the VPN compatible with?</AccordionTrigger>
                    <AccordionContent>
                        The VPN is compatible with Windows, Android, iOS, Mac, and Linux.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem>
                    <AccordionTrigger className="text-lg font-bold">What information does the VPN keep?</AccordionTrigger>
                    <AccordionContent>
                        The VPN does not store your online activity logs.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem>
                    <AccordionTrigger className="text-lg font-bold">How is my privacy protected?</AccordionTrigger>
                    <AccordionContent>
                        We use the most advanced protocol, WireGuard®, to encrypt your network activity and hide your IP address.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem>
                    <AccordionTrigger className="text-lg font-bold">What is the VPN's refund policy?</AccordionTrigger>
                    <AccordionContent>
                        You can request a refund within the first 30 days of your subscription.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <div className="text-center">
                <Button className="bg-black text-white py-3 px-6 rounded-full"> Join the Waitlist </Button>
            </div>
        </section>
    )
}

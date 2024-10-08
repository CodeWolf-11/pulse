import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="flex-1 flex flex-col items-center justify-center text-center p-12 bg-gradient-to-b from-gray-50 to-white  dark:from-slate-950 dark:to-slate-950 dark:text-white">
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4 dark:text-white">
                Instant Chat Links for Seamless Conversations
            </h1>
            <p className="text-xl text-gray-600 mb-8 dark:text-gray-500">
                Pulse makes it effortless to create secure chat links and start
                conversations in seconds.
            </p>
            <Link href="/dashboard">
                <Button size="lg" className="animate-pulse font-extrabold text-2xl p-4">
                    Get Started
                </Button>
            </Link>

            <div className="mt-12 w-full max-w-5xl flex justify-center">
                <Image
                    src="/images/chat.svg"
                    alt="Illustration"
                    height={600}
                    width={600}
                    priority
                />
            </div>
        </section>
    );
}
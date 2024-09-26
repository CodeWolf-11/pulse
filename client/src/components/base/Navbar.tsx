"use client";
import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import ThemeToggler from "../theme/ThemeToggler";


export default function Navbar() {
    return (
        <nav className="p-6 flex justify-between items-center bg-white shadow-sm dark:bg-slate-950 dark:text-white">


            <Image
                src="/images/chat.png"
                alt="pulse"
                height={40}
                width={40}
                className=""
            />


            <div className="flex items-center space-x-2 md:space-x-6 text-gray-700">
                {/* <Link href="/">Home</Link>
                <Link href="#features">Features</Link> */}
                <ThemeToggler />
                <Link href="/dashboard">
                    <Button>Dashboard</Button>
                </Link>

            </div>
        </nav>
    );
}
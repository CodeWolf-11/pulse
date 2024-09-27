"use client"

import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '../ui/button'
import Image from 'next/image';

function loginModal() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className='font-bold '>Login</Button>
            </DialogTrigger>
            <DialogContent className='bg-red-50 text-black dark:bg-slate-900 dark:text-white border-0 rounded-lg'>
                <DialogHeader>
                    <DialogTitle>Welcome to pulse</DialogTitle>
                    <DialogDescription>
                        Pulse makes it easy to create secure chat rooms
                    </DialogDescription>
                </DialogHeader>

                <Button className='w-full text-center'>
                    <Image
                        src="/images/google.png"
                        alt="google"
                        height={25}
                        width={25}
                        priority
                    />

                    <span className='ml-3'>Continue with Google</span>
                </Button>

                <Button className='w-full text-center'>
                    <div className='bg-white rounded-full'>
                        <Image
                            src="/images/github.png"
                            alt="github"
                            height={25}
                            width={25}
                            priority
                        />
                    </div>

                    <span className='ml-3'>Continue with Github</span>
                </Button>

            </DialogContent>
        </Dialog>

    )
}

export default loginModal
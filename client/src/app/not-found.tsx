import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

function notfound() {
    return (

        <div className='container mx-auto h-screen border-red-500 flex justify-center items-center flex-col'>
            <Image
                src={"/images/notfound.svg"}
                alt="not found"
                height={500}
                width={500}
                priority />

            <Link href={"/"}>
                <Button className='font-bold'>
                    Back to Home
                </Button>
            </Link>
        </div>

    )
}

export default notfound;
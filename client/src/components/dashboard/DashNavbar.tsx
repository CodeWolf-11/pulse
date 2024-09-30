import React from 'react'
import Image from 'next/image'
import ThemeToggler from '../theme/ThemeToggler'
import ProfileMenu from './ProfileMenu'

async function DashNavbar({ name, image }: { name: string, image?: string }) {


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

                <ThemeToggler />

                <ProfileMenu name={name} image={image} />


            </div>
        </nav>
    )
}

export default DashNavbar
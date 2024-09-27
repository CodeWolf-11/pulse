import React from 'react'
import Image from 'next/image'
import ThemeToggler from '../theme/ThemeToggler'
import ProfileMenu from './ProfileMenu'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/options'

async function DashNavbar() {
    const session = await getServerSession(authOptions);

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

                <ProfileMenu name={session?.user?.name!} image={session?.user?.image!} />


            </div>
        </nav>
    )
}

export default DashNavbar
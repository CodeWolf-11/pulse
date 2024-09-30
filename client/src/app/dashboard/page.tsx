import DashNavbar from '@/components/dashboard/DashNavbar'
import CreateChat from '@/components/groupChat/CreateChat'
import React from 'react'
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/options';


async function page() {
    const session = await getServerSession(authOptions);

    return (
        <div className='container h-screen mx-auto'>
            <DashNavbar name={session?.user?.name!} image={session?.user?.image!} />
            <div className='flex justify-end mt-4 p-6'>
                <CreateChat user={session?.user!} />
            </div>
        </div>


    )
}

export default page
import DashNavbar from '@/components/dashboard/DashNavbar'
import CreateChat from '@/components/groupChat/CreateChat'
import React from 'react'
import { getServerSession } from 'next-auth';
import { authOptions, CustomSession } from '../api/auth/[...nextauth]/options';
import { fetchChatGroups } from '@/fetchData/chatGroupFetch';
import GroupChatCard from '@/components/groupChat/GroupChatCard';


async function page() {
    const session: CustomSession | null = await getServerSession(authOptions);
    const groups: Array<ChatGroupType> = await fetchChatGroups(session?.user?.token!)
    return (
        <div className='container h-screen mx-auto'>
            <DashNavbar name={session?.user?.name!} image={session?.user?.image!} />
            <div className='flex justify-end mt-4 p-6'>
                <CreateChat user={session?.user!} />
            </div>

            {/* //make it a grid */}
            <div className='mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-6 gap-10'>
                {
                    groups.map((chatgroup: ChatGroupType) => {
                        return <GroupChatCard key={chatgroup.id} chatgroup={chatgroup} user={session?.user!} />
                    })
                }
            </div>
        </div>


    )
}

export default page
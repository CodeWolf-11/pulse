import DashNavbar from '@/components/dashboard/DashNavbar'
import CreateChat from '@/components/groupChat/CreateChat'
import React from 'react'

function page() {
    return (
        <div>
            <DashNavbar />
            <div className='flex justify-end mt-10'>
                <CreateChat />
            </div>
        </div>


    )
}

export default page
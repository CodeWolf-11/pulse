import React from 'react'
import {
    Card,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


function chatUserCard({ user }: { user: GroupChatUserType }) {
    return (
        <Card className='m-2'>
            <CardHeader className='dark:bg-slate-800 rounded-lg shadow-lg'>
                <CardTitle className='text-xl'>{user.name}</CardTitle>
                <p className='text-start mb-2 text-sm'>{new Date(user.created_at).toDateString()}</p>

            </CardHeader>


        </Card>

    )
}

export default chatUserCard
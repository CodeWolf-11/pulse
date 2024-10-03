import React from 'react'
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


function chatUserCard({ user }: { user: GroupChatUserType }) {
    return (
        <Card className='m-2'>
            <CardHeader>
                <CardTitle>{user.name}</CardTitle>
                <p className='text-start mb-2 text-sm'>{new Date(user.created_at).toDateString()}</p>

            </CardHeader>


        </Card>

    )
}

export default chatUserCard
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

            </CardHeader>
            <CardDescription>
                <span>{new Date(user.created_at).toDateString()}</span>
            </CardDescription>


        </Card>

    )
}

export default chatUserCard
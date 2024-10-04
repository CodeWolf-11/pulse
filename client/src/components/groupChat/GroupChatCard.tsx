"use client"

import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import GroupChatMenu from './GroupChatMenu';
import Link from 'next/link';
import { Button } from '../ui/button';
import { CustomUser } from '@/app/api/auth/[...nextauth]/options';
import ENV from '@/lib/env';

function GroupChatCard({ user, chatgroup }: { user: CustomUser, chatgroup: ChatGroupType }) {
    return (
        <Card className='dark:bg-slate-900 bg-white shadow-lg flex flex-col justify-between'>
            <CardHeader className='flex flex-row justify-between'>
                <CardTitle>{chatgroup.title}</CardTitle>
                <GroupChatMenu user={user} chatgroup={chatgroup} />
            </CardHeader>
            <CardContent className=''>

                <Link href={`${ENV.APP_URL}/chats/${chatgroup.id}`}>
                    <Button >Go to Room</Button>
                </Link>

                <p className='mt-4 text-sm'>
                    {
                        "Created at: " + new Date(chatgroup.created_at).toDateString()
                    }
                </p>

            </CardContent>
        </Card>

    )
}

export default GroupChatCard
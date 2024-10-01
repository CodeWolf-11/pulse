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

function GroupChatCard({ user, chatgroup }: { user: CustomUser, chatgroup: ChatGroupType }) {
    return (
        <Card className='dark:bg-slate-900 bg-white shadow-lg'>
            <CardHeader className='flex flex-row justify-between'>
                <CardTitle>{chatgroup.title}</CardTitle>
                <GroupChatMenu user={user} chatgroup={chatgroup} />
            </CardHeader>
            <CardContent>
                <Link href={"/"}>
                    <Button >Go to Room</Button>
                </Link>

            </CardContent>
        </Card>

    )
}

export default GroupChatCard
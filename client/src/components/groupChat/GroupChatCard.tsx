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

function GroupChatCard({ chatgroup }: { chatgroup: ChatGroupType }) {
    return (
        <Card className='dark:bg-slate-900 bg-white shadow-lg'>
            <CardHeader className='flex flex-row justify-between'>
                <CardTitle>{chatgroup.title}</CardTitle>
                <GroupChatMenu id={chatgroup.id} />
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
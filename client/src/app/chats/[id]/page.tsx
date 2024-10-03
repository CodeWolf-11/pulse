import React, { useEffect } from 'react'
import ChatBase from '@/components/chat/ChatBase'
import { fetchChatGroup } from '@/fetchData/chatGroupsFetch'
import { notFound } from 'next/navigation';

async function page({ params: { id } }: { params: { id: string } }) {

    if (id.length !== 36) {
        return notFound();
    }
    const group: ChatGroupType | null = await fetchChatGroup(id);

    if (group === null) {
        return notFound();
    }

    return (
        <ChatBase groudId={id} />


    )
}

export default page
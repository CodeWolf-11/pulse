import React, { useEffect } from 'react'
import ChatBase from '@/components/chat/ChatBase'
import { fetchChatGroup } from '@/fetchData/chatGroupsFetch'
import { notFound } from 'next/navigation';
import { fetchChatGroupUser } from '@/fetchData/chatGroupUser';
import { fetchMessagesGroup } from '@/fetchData/fetchMessageGroup';

async function page({ params: { id } }: { params: { id: string } }) {

    if (id.length !== 36) {
        return notFound();
    }
    const group: ChatGroupType | null = await fetchChatGroup(id);

    if (group === null) {
        return notFound();
    }

    const users: Array<GroupChatUserType> = await fetchChatGroupUser(id);
    const messages: Array<MessageType> = await fetchMessagesGroup(id);

    return (
        <ChatBase messages={messages} group={group} users={users} />

    )
}

export default page
import React from 'react'
import ChatBase from '@/components/chat/ChatBase'

function page({ params: { id } }: { params: { id: string } }) {
    return (
        <>
            <div>{id}</div>
            <ChatBase groudId={id} />
        </>

    )
}

export default page
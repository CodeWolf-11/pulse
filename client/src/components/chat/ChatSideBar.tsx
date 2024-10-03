import React from 'react'
import ChatUserCard from './ChatUserCard';

function ChatSideBarMobile({ users }: { users: Array<GroupChatUserType> }) {
    return (
        <>
            <div className={`hidden md:relative md:w-1/3 h-screen bg-gray-100 dark:bg-slate-900 border-r-2 md:flex flex-col z-10 `}>
                <p className='text-4xl font-extrabold  p-4 border-b-2 dark:text-white text-slate-900 w-full'>
                    Pulse
                </p>

                {
                    users.map((user: GroupChatUserType) => {
                        return (
                            <ChatUserCard key={user.id} user={user} />
                        )
                    })
                }
            </div>

        </>

    )
}

export default ChatSideBarMobile;
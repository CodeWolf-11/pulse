import React from 'react'
import ChatUserCard from './ChatUserCard';

function ChatSideBar({ users }: { users: Array<GroupChatUserType> }) {
    return (
        <>
            <div className={`hidden md:relative md:w-1/3 h-screen bg-gray-100 dark:bg-slate-800  md:flex flex-col z-10 `}>
                <p className='text-4xl font-extrabold  p-4  dark:text-white dark:bg-slate-800 text-slate-900 w-full'>
                    Pulse
                </p>

                <div className='w-full flex-grow overflow-auto'>
                    {
                        users.map((user: GroupChatUserType) => {
                            return (
                                <ChatUserCard key={user.id} user={user} />
                            )
                        })
                    }
                </div>
            </div>

        </>

    )
}

export default ChatSideBar;
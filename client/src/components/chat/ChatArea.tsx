"use client"

import React, { Dispatch, SetStateAction } from 'react'
import ThemeToggler from '../theme/ThemeToggler'
import { Button } from '../ui/button'
import { Users } from 'lucide-react'
import Chat from './Chat'

function ChatArea({ messages, group, isSideBarOpen, setIsSideBarOpen, user, setMessages }: { group: ChatGroupType, setMessages: Dispatch<SetStateAction<MessageType[]>>, messages: MessageType[], isSideBarOpen: boolean, setIsSideBarOpen: Dispatch<SetStateAction<boolean>>, user: GroupChatUserType | undefined }) {


    return (
        <>

            <div className='relative w-full md:w-2/3 h-full bg-gray-50 dark:bg-slate-700 dark:text-white flex flex-col justify-between '>
                <div className='top-0 right-0 w-full bg-gray-100 text-black  dark:bg-slate-800  dark:border-slate-400 p-4 flex gap-2 items-center justify-end'>
                    <ThemeToggler />

                    <Button className='md:hidden top-3 left-2 m-2' onClick={() => {
                        setIsSideBarOpen((prev) => !prev)
                        console.log("Clicked");
                    }}>
                        <Users />
                    </Button>

                </div>

                {
                    user ? (
                        <Chat group={group} chatUser={user} messages={messages} setMessages={setMessages} />
                    ) : ""
                }
            </div>



        </>
    )
}

export default ChatArea
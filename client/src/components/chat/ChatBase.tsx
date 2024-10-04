"use client"

import { getSocket } from '@/lib/socket.config'
import React, { useEffect, useMemo, useState } from 'react'
import { v4 as uuid4 } from "uuid";
import ChatSideBarPhone from './ChatSideBarMobile';
import ChatArea from './ChatArea';
import ChatSideBar from './ChatSideBar';
import ChatLogin from './ChatLogin';


function ChatBase({ messages, group, users }: { messages: Array<MessageType>, group: ChatGroupType, users: Array<GroupChatUserType> }) {

    const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const [chatUser, setChatUser] = useState<GroupChatUserType>();
    const [oldMessages, setOldMessages] = useState<MessageType[]>(messages);






    return (
        <>

            {/* {
                open ? (
                    <ChatLogin group={group} open={open} setOpen={setOpen} />
                ) : (
                    < div className='container h-screen mx-auto my-auto' >
                        <div className='w-full h-full flex'>
                            <ChatSideBarPhone users={users} isSideBarOpen={isSideBarOpen} />
                            <ChatSideBar users={users} />
                            <ChatArea isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen} />
                        </div>


                    </div >
                )
            } */}

            <ChatLogin group={group} open={open} setOpen={setOpen} user={chatUser} setUser={setChatUser} />

            < div className='container h-screen mx-auto my-auto' >
                <div className='w-full h-full flex'>
                    <ChatSideBarPhone users={users} isSideBarOpen={isSideBarOpen} />
                    <ChatSideBar users={users} />
                    <ChatArea group={group} messages={oldMessages} setMessages={setOldMessages} user={chatUser} isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen} />
                </div>


            </div >








        </>
    )
}

export default ChatBase;
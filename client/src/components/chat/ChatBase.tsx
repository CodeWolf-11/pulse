"use client"

import { getSocket } from '@/lib/socket.config'
import React, { useEffect, useMemo, useState } from 'react'
import { v4 as uuid4 } from "uuid";
import ChatSideBarPhone from './ChatSideBarMobile';
import ChatArea from './ChatArea';
import ChatSideBar from './ChatSideBar';


function ChatBase({ group, users }: { group: ChatGroupType, users: Array<GroupChatUserType> }) {

    const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);

    let socket = useMemo(() => {
        const socket = getSocket();

        //make sure that below should be done before connection
        socket.auth = {
            room: group.id
        }
        return socket.connect();
    }, []);

    useEffect(() => {

        socket.on("message", (data) => {
            console.log("message is ", data)
        });

        return () => {
            socket.close()
        }
    }, []);

    const handleClick = () => {
        socket.emit("message", {
            name: "Nishant",
            id: uuid4()
        });
    }



    return (
        <div className='container h-screen mx-auto my-auto'>
            <div className='w-full h-full flex'>
                <ChatSideBarPhone users={users} isSideBarOpen={isSideBarOpen} />
                <ChatSideBar users={users} />
                <ChatArea isSideBarOpen={isSideBarOpen} setIsSideBarOpen={setIsSideBarOpen} />
            </div>


        </div>
    )
}

export default ChatBase
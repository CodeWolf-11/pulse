"use client"

import React, { Dispatch, SetStateAction, useEffect, useMemo, useRef, useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { getSocket } from '@/lib/socket.config';
import { v4 as uuid4 } from "uuid";
import { useParams } from 'next/navigation';

function Chat({ group, messages, setMessages, chatUser }: { group: ChatGroupType, chatUser: GroupChatUserType, messages: MessageType[], setMessages: Dispatch<SetStateAction<MessageType[]>> }) {

    const [message, setMessage] = useState<string>("");
    const [oldMessages, setOldMessages] = useState<MessageType[]>([]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView();
    };

    let socket = useMemo(() => {
        const socket = getSocket();

        //make sure that below should be done before connection
        socket.auth = {
            room: group.id
        }
        return socket.connect();
    }, []);

    useEffect(() => {

        socket.on("message", (data: MessageType) => {
            setMessages((prevMessages) => [...prevMessages, data])
            scrollToBottom();
        });

        return () => {
            socket.close()
        }
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        const payload: MessageType = {
            id: uuid4(),
            created_at: new Date(Date.now()).toISOString(),
            name: chatUser.name,
            message: message,
            group_id: group.id
        }
        socket.emit("message", payload);

        setMessage("");


    }

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className='w-full bg-white dark:bg-slate-700 flex-grow text-black dark:text-white flex flex-col justify-between overflow-auto'>
            {/* chat window */}

            <div ref={messagesEndRef} className='flex-grow flex flex-col overflow-auto w-full p-4'>
                {
                    messages.map((message) => {
                        return (
                            <div className={`flex w-full  ${chatUser.name === message.name ? "justify-end" : ""}`}>

                                <div className={`flex flex-col min-w-[30%] max-w-[20rem] mt-2 rounded-lg ${chatUser.name === message.name ? "bg-blue-700 text-white self-end" : "bg-red-100 text-black"}`}>
                                    <p className='text-start p-2 text-sm'>
                                        {
                                            message.name == chatUser.name ? "you" : message.name
                                        }
                                    </p>

                                    <p className='text-start p-2 text-xl'>
                                        {
                                            message.message
                                        }
                                    </p>

                                </div>

                            </div>
                        )
                    })
                }
            </div>


            {/* input */}
            <form className='flex gap-3 p-4' onSubmit={handleSubmit}>
                <Input
                    value={message}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setMessage(e.target.value);
                    }}
                    className='shadow-lg border-2 dark:border-slate-500'
                    placeholder={"Enter the message"} />
                <Button>Send</Button>
            </form>
        </div>
    )
}

export default Chat
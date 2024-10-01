"use client"

import { getSocket } from '@/lib/socket.config'
import React, { useEffect, useMemo } from 'react'

function ChatBase() {

    let socket = useMemo(() => {
        const socket = getSocket();
        return socket.connect();
    }, []);

    useEffect(() => {

        socket.on("message", (data: any) => {
            console.log("The socket message is ", data);
        })

        return () => {
            socket.disconnect();
        }
    }, []);


    const handleClick = () => {

        socket.emit("message", {

        })
    }


    return (
        <div>ChatBase</div>
    )
}

export default ChatBase
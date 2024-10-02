"use client"

import { getSocket } from '@/lib/socket.config'
import React, { useEffect, useMemo } from 'react'
import { v4 as uuid4 } from "uuid";
import { Button } from '../ui/button';


function ChatBase() {

    let socket = useMemo(() => {
        const socket = getSocket();
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
        <div>
            <Button onClick={handleClick}>Send</Button>
        </div>
    )
}

export default ChatBase
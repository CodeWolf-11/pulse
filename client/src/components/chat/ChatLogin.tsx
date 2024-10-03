"use client"

import React, { Dispatch, SetStateAction } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


function ChatLogin({ open, setOpen }: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>> }) {
    return (
        <Dialog onOpenChange={setOpen} open={open}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Join the chat</DialogTitle>
                    <DialogDescription>
                        Enter the display name and passcode make sure that the display name is unique
                    </DialogDescription>

                    <form action="">

                    </form>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}

export default ChatLogin
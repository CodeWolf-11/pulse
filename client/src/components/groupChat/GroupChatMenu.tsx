"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import React from 'react'
import { Copy, EllipsisVertical, FilePenLine, Trash2 } from "lucide-react"
import { useState } from "react"
import DeleteModal from "./DeleteModal"
import EditGroupChat from "./EditGroupChat"
import { CustomUser } from "@/app/api/auth/[...nextauth]/options"
import ENV from "@/lib/env"
import { toast } from "sonner"

function GroupChatMenu({ user, chatgroup }: { user: CustomUser, chatgroup: ChatGroupType }) {
    const [open, setOpen] = useState<boolean>(false);
    const [openEdit, setOpenEdit] = useState<boolean>(false);
    return (
        <>
            <DeleteModal id={chatgroup.id} open={open} setOpen={setOpen} />
            <EditGroupChat user={user} chatgroup={chatgroup} open={openEdit} setOpen={setOpenEdit} />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>

                    <EllipsisVertical className="cursor-pointer" />

                </DropdownMenuTrigger>
                <DropdownMenuContent >
                    <DropdownMenuItem className="flex justify-between" onClick={() => setOpenEdit(true)}>
                        <span className="mr-2">Edit</span> <FilePenLine />

                    </DropdownMenuItem>

                    <DropdownMenuItem className="flex justify-between" onClick={() => {
                        window.navigator.clipboard?.writeText(`${ENV.APP_URL}/chats/${chatgroup.id}`);
                        toast.success("Link copied");
                    }}>
                        <span className="mr-2">Copy</span> <Copy />
                    </DropdownMenuItem>

                    <DropdownMenuItem className="flex justify-between " onClick={() => setOpen(true)} >
                        <button className="mr-2"  >Delete</button> <Trash2 className="text-red-600 " />
                    </DropdownMenuItem>

                </DropdownMenuContent>
            </DropdownMenu >

        </>

    )
}

export default GroupChatMenu
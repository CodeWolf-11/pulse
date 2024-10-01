"use client"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import React from 'react'
import { Copy, EllipsisVertical, FilePenLine, Trash2 } from "lucide-react"
import { useState } from "react"
import DeleteModal from "./DeleteModal"

function GroupChatMenu({ id }: { id: string }) {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <>
            <DeleteModal id={id} open={open} setOpen={setOpen} />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>

                    <EllipsisVertical className="cursor-pointer" />

                </DropdownMenuTrigger>
                <DropdownMenuContent >
                    <DropdownMenuItem className="flex justify-between">
                        <span className="text-xl mr-2">Edit</span> <FilePenLine />
                    </DropdownMenuItem>

                    <DropdownMenuItem className="flex justify-between">
                        <span className="text-xl mr-2">Copy</span> <Copy />
                    </DropdownMenuItem>

                    <DropdownMenuItem className="flex justify-between " onClick={() => setOpen(true)} >
                        <button className="text-xl mr-2"  >Delete</button> <Trash2 className="text-red-600 " />
                    </DropdownMenuItem>

                </DropdownMenuContent>
            </DropdownMenu >

        </>

    )
}

export default GroupChatMenu
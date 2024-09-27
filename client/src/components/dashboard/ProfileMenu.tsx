"use client"

import React, { useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import UserAvatar from './UserAvatar'
import LogoutModal from '../auth/LogoutModal'


function ProfileMenu({
    name,
    image
}: {
    name: string,
    image?: string
}) {

    const [open, setOpen] = useState<boolean>(false);
    return (
        <>
            <LogoutModal open={open} setOpen={setOpen} />
            <DropdownMenu>
                <DropdownMenuTrigger className='outline-none'>
                    <UserAvatar name={name} image={image} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setOpen(true)}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

        </>

    )
}

export default ProfileMenu
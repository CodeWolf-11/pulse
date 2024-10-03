"use client"

import React, { Dispatch, SetStateAction } from 'react'
import ThemeToggler from '../theme/ThemeToggler'
import { Button } from '../ui/button'
import { Users } from 'lucide-react'

function ChatArea({ isSideBarOpen, setIsSideBarOpen }: { isSideBarOpen: boolean, setIsSideBarOpen: Dispatch<SetStateAction<boolean>> }) {
    return (
        <>

            <div className='relative w-full md:w-2/3 h-full bg-gray-50 dark:bg-slate-700 dark:text-white'>
                <div className='absolute top-0 right-0 w-full bg-gray-100 text-black  dark:bg-slate-900 p-4 flex gap-2 items-center justify-end border-b-2'>
                    <ThemeToggler />

                    <Button className='md:hidden top-3 left-2 m-2' onClick={() => {
                        setIsSideBarOpen((prev) => !prev)
                        console.log("Clicked");
                    }}>
                        <Users />
                    </Button>

                </div>
            </div>

        </>
    )
}

export default ChatArea
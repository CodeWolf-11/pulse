"use client"
import React from 'react'

function ChatSideBar({ isSideBarOpen }: { isSideBarOpen: boolean }) {
    return (
        <>
            <div className={`absolute md:relative md:w-1/3 h-screen bg-gray-100 dark:bg-slate-900 border-r-2 flex flex-col z-10 ${isSideBarOpen ? "w-2/3" : "w-0 hidden transition-all"}`}>
                <p className='text-4xl font-extrabold  p-4 border-b-2 dark:text-white text-slate-900 w-full'>
                    Pulse
                </p>

                {
                    // list of users
                }
            </div>

        </>

    )
}

export default ChatSideBar;
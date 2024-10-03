import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

function Chat() {
    return (
        <div className='w-full bg-white dark:bg-slate-500 flex-grow text-black dark:text-white flex flex-col justify-between'>
            {/* chat window */}
            <div className='flex-grow flex flex-col'>
                {
                    //messages
                }
            </div>

            {/* input */}
            <div className='flex gap-3 p-4'>
                <Input></Input>
                <Button>Send</Button>
            </div>
        </div>
    )
}

export default Chat
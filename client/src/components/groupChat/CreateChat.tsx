"use client"

import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '../ui/button';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import { createChatSchema, createChatType } from '@/validations/groupChatValidation';
import { Input } from '../ui/input';

function CreateChat() {

    const [open, setOpen] = useState<boolean>(false);
    const { register,
        handleSubmit,
        formState: { errors, isLoading }
    } = useForm<createChatType>({
        resolver: zodResolver(createChatSchema)
    });

    //this will get the payload from handlesubmit
    const onSubmit = (payload: createChatType) => {
        console.log("The chat payload is", payload);
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button>
                    Create Group
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mt-4'>
                        <Input {...register("title")} placeholder='Enter the title' />
                        <Input {...register("passcode")} placeholder='Enter the title' />
                    </div>
                </form>

            </DialogContent>
        </Dialog>

    )
}

export default CreateChat
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import { createChatSchema, createChatType } from '@/validations/groupChatValidation';
import { Input } from '../ui/input';
import { MessageCirclePlus } from 'lucide-react';
import { CustomUser } from '@/app/api/auth/[...nextauth]/options';
import axios, { AxiosError } from 'axios';
import { toast } from 'sonner';
import { CHAT_GROUP_URL } from '@/lib/apiEndpoints';
import { revalidateTag } from 'next/cache';
import { revalidate } from '@/lib/revalidateUtil';

function CreateChat({ user }: { user: CustomUser }) {

    const [open, setOpen] = useState<boolean>(false);

    const { register,
        handleSubmit,
        formState: { errors, isLoading }
    } = useForm<createChatType>({
        resolver: zodResolver(createChatSchema)
    });

    //this will get the payload from handlesubmit
    const onSubmit = async (payload: createChatType) => {
        try {

            const { data } = await axios.post(CHAT_GROUP_URL, {
                ...payload,
                user_id: user.id
            }, {
                headers: {
                    Authorization: user.token
                }
            });

            if (data?.message) {
                setOpen(false);
                toast.success(data?.message);
                revalidate("dashboard");
            }

        } catch (error) {
            if (error instanceof AxiosError) {
                toast.error(error.response?.data.message);
            } else {
                toast.error("Something went wrong");
                console.log(error);
            }
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogTrigger asChild>
                <Button>
                    <MessageCirclePlus />
                </Button>
            </DialogTrigger>
            <DialogContent onInteractOutside={(e) => { e.preventDefault() }} className='dark:bg-slate-900 shadow-md bg-white rounded-lg text-black dark:text-white'>
                <DialogHeader>
                    <DialogTitle className='text-black dark:text-white font-extrabold '>Create A Chat</DialogTitle>
                    <DialogDescription>
                        Enter the title and set a passcode for the chat group
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mt-4'>
                        <Input {...register("title")} placeholder='Enter the title' />
                        <span className='text-red-600'>{errors?.title?.message}</span>
                    </div>

                    <div className="mt-4">
                        <Input {...register("passcode")} placeholder='Enter the passcode' />
                        <span className='text-red-600'>{errors?.passcode?.message}</span>
                    </div>

                    <div className='mt-4'>
                        <Button className='w-full' disabled={isLoading}>{isLoading ? "Processing..." : "Submit"}</Button>
                    </div>



                </form>

            </DialogContent>
        </Dialog>

    )
}

export default CreateChat
"use client"

import React, { Dispatch, SetStateAction, useEffect } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Input } from '../ui/input'
import { useForm } from 'react-hook-form'
import { Button } from '../ui/button'
import axios, { AxiosError } from 'axios'
import { CHAT_GROUP_USER } from '@/lib/apiEndpoints'
import { toast } from 'sonner'
import { revalidate } from '@/lib/revalidateUtil'


function ChatLogin({ open, setOpen, group, user, setUser }: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>>, group: ChatGroupType, user: GroupChatUserType | undefined, setUser: Dispatch<SetStateAction<GroupChatUserType | undefined>> }) {


    const { register, handleSubmit, formState: { isSubmitting } } = useForm<GroupUserPayloadType>()

    useEffect(() => {
        const data = localStorage.getItem(`${group.id}`);

        if (data) {
            const jsonData = JSON.parse(data);

            if (jsonData?.name && jsonData?.group_id) {
                setOpen(false);
                setUser(jsonData);
            }
        } else {
            setOpen(true);
        }
    }, []);

    const onSubmit = async (payload: GroupUserPayloadType) => {


        try {

            if (payload.passcode !== group.passcode) {
                toast.error("Please Enter the correct password");
                return;
            }

            const { data } = await axios.post(CHAT_GROUP_USER, {
                name: payload.name,
                group_id: group.id
            });

            setUser(data?.user);

            const value = JSON.stringify({
                name: payload.name,
                group_id: group.id
            });

            localStorage.setItem(`${group.id}`, value);

            toast.success("User created!");

            setOpen(false);

            revalidate("user");

        } catch (error) {

            if (error instanceof AxiosError) {
                toast.error(error?.response?.data?.message);
            } else {
                toast.error("Something went wrong");
            }

            setOpen(true);
        }


    }

    return (

        <Dialog onOpenChange={setOpen} open={open} >
            <div className='absolute h-screen w-screen bg-slate- top-0 bottom-0'>
                <DialogContent onInteractOutside={(e) => e.preventDefault()} className="[&>button]:hidden dark:bg-slate-900 rounded-lg bg-red-100">
                    <DialogHeader>
                        <DialogTitle>Join the chat</DialogTitle>
                        <DialogDescription>
                            Enter the display name and passcode make sure that the display name is unique
                        </DialogDescription>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='mt-2'>
                                <Input {...register("name")} placeholder='Enter the name' />
                            </div>

                            <div className='mt-2'>
                                <Input {...register("passcode")} placeholder='Enter the passcode' type='password' />
                            </div>

                            <Button className="w-full mt-3" disabled={isSubmitting}>{isSubmitting ? "Processing..." : "Submit"}</Button>
                        </form>
                    </DialogHeader>
                </DialogContent>
            </div>
        </Dialog >



    )
}

export default ChatLogin
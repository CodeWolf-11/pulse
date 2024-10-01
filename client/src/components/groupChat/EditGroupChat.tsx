"use client"

import React, { Dispatch, SetStateAction, useEffect } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useForm } from 'react-hook-form'
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { createChatSchema } from '@/validations/groupChatValidation';
import { CustomUser } from '@/app/api/auth/[...nextauth]/options';
import axios, { AxiosError } from 'axios';
import { toast } from 'sonner';
import { CHAT_GROUP_URL } from '@/lib/apiEndpoints';
import { title } from 'process';
import { revalidate } from '@/lib/revalidateUtil';


function EditGroupChat({ chatgroup, open, setOpen, user }: { chatgroup: ChatGroupType, open: boolean, setOpen: Dispatch<SetStateAction<boolean>>, user: CustomUser }) {
    const { register, handleSubmit, formState: { errors, isLoading }, setValue } = useForm<ChatGroupType>({
        resolver: zodResolver(createChatSchema)
    });

    const onSubmit = async (payload: ChatGroupType) => {
        try {

            const { data } = await axios.put(CHAT_GROUP_URL + `/${chatgroup.id}`, {
                title: payload.title,
                passcode: payload.passcode,
            }, {
                headers: {
                    Authorization: user.token
                }
            });

            toast.success(data?.message ?? "Details updated successfully");
            revalidate("dashboard");
            setOpen(false);

        } catch (error) {

            if (error instanceof AxiosError) {
                toast.error(error.response?.data?.message ?? error.message);
            } else {
                toast.error("Something went wrong");
            }
        }
    }

    useEffect(() => {
        setValue("title", chatgroup.title);
        setValue("passcode", chatgroup.passcode);
    }, []);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent onInteractOutside={(e) => e.preventDefault()} className='bg-white shadow-md dark:bg-slate-900 rounded-lg'>
                <DialogHeader>
                    <DialogTitle>Edit Chat Group</DialogTitle>
                    <DialogDescription>

                    </DialogDescription>


                </DialogHeader>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='mt-4'>
                        <Input {...register("title")} placeholder='Enter the title' />
                        <span className='text-red-600'>{errors?.title?.message}</span>
                    </div>

                    <div className='mt-4'>
                        <Input {...register("passcode")} placeholder='Enter the passcode' />
                        <span className='text-red-600'>{errors?.passcode?.message}</span>
                    </div>

                    <Button type={"submit"} className="mt-3 w-full" disabled={isLoading}>{isLoading ? "Processing..." : "Submit"}</Button>
                </form>
            </DialogContent>
        </Dialog>

    )
}

export default EditGroupChat
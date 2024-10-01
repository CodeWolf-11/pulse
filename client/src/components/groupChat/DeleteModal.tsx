"use client"

import { CustomSession } from "@/app/api/auth/[...nextauth]/options"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { CHAT_GROUP_URL } from "@/lib/apiEndpoints"
import { revalidate } from "@/lib/revalidateUtil"
import axios, { AxiosError } from "axios"
import { getServerSession } from "next-auth"
import { useSession } from "next-auth/react"
import React, { Dispatch, SetStateAction } from 'react'
import { toast } from "sonner"

function DeleteModal({ open, setOpen, id }: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>>, id: string }) {

    const { data }: { data: CustomSession | null } = useSession();
    const clickHandler: React.MouseEventHandler<HTMLButtonElement> = async (e) => {

        try {

            const res = await axios.delete(CHAT_GROUP_URL + `/${id}`, {
                headers: {
                    Authorization: data?.user?.token
                }
            });

            toast.success(res?.data?.message ?? "Chat group deleted successfully");
            revalidate("dashboard");

        } catch (error) {
            if (error instanceof AxiosError) {
                toast.error(error.response?.data?.message);
            } else {
                toast.error("Somethig went wrong!");
                console.log(error);
            }
        }
    }

    return (
        <AlertDialog open={open} onOpenChange={setOpen} >
            <AlertDialogContent className="dark:bg-slate-900 bg-white shadow-md">
                <AlertDialogHeader>
                    <AlertDialogTitle className="text-black dark:text-white">Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete your chat group
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className="text-black dark:text-white">Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={clickHandler}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}

export default DeleteModal
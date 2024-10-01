"use client"

import React, { Dispatch, SetStateAction } from 'react'
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

import { signOut } from 'next-auth/react'


function LogoutModal({ open, setOpen }: { open: boolean, setOpen: Dispatch<SetStateAction<boolean>> }) {
    return (
        <AlertDialog open={open} onOpenChange={setOpen} >
            <AlertDialogContent className='dark:bg-slate-900 bg-white shadow-md text-black'>
                <AlertDialogHeader>
                    <AlertDialogTitle className='text-black dark:text-white'>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will delete your current
                        session and you will have to login again
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className='dark:text-white'>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => signOut({
                        redirect: true,
                        callbackUrl: "/"
                    })}>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}

export default LogoutModal
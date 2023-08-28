'use client'

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"

import useSubscribeModal from "@/hooks/useSubscribeModal";
import { useUser } from "@/hooks/useUser";
import { postData } from "@/libs/helpers";
import toast from "react-hot-toast";

const AccountContent = () => {
    const router = useRouter();
    const subscribeModal = useSubscribeModal();
    const {user, isLoading, subscription } = useUser()

    const [loading, setLoading] = useState(false)
    useEffect(() => {
        if (!isLoading && user){
            router.replace('/')
        }

    }, [isLoading, user, router])

    const redirectToCustomerPortal = async () => {
        setLoading(true)
        try {
            const { url, error } = await postData({
                url: '/api/create-portal-link'
            })
            window.location.assign(url)
        }
        catch (error){
            if(error){
                toast.error((error as Error).message)
            }
        }

        setLoading(false)
    }
    
    return (
        <div className="mb-7 px-6">
            Account Content
        </div>
    )
}

export default AccountContent

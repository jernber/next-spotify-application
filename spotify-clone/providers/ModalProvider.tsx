"use client"

import { useEffect, useState } from "react"

import AuthModal from "@/components/AuthModal"
import UploadModal from "@/components/UploadModal"
import SubscribeModal from "@/components/SubscribeModal"

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false)
    // Preventing a hydration issue, this is used to prevent modals from being opened during server side rendering.
    
    useEffect(() => {
        setIsMounted(true)

    }, [])

    if (!isMounted){
        // Serverside code run here
        return null
    }
   
  return (
    <>
        <AuthModal />
        <UploadModal />
        <SubscribeModal />
    </>
  )
}

export default ModalProvider
"use client"

import { useEffect, useState } from "react"
import AuthModal from "@/components/AuthModal"

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
    </>
  )
}

export default ModalProvider
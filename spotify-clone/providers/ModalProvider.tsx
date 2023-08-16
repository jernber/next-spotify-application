"use client"

import { useEffect, useState } from "react"
import Modal from "@/components/Modal"

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
       <Modal />
    </>
  )
}

export default ModalProvider
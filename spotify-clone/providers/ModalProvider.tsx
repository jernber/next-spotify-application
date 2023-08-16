"use client"
import { useEffect, useState } from "react"

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false)

    // Preventing a hydration issue, this is used to prevent modals from being opened during server side rendering.
    
     useEffect(() => {
        setIsMounted(true)

    }, [])

    if (!isMounted){
        return null
    }
   
  return (
    <>
        Modals!
    </>
  )
}

export default ModalProvider
"use client";

import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx"
import { HiHome } from "react-icons/hi"
import { BiSearch } from "react-icons/bi"
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { FaUserAlt } from "react-icons/fa"
import { toast } from "react-hot-toast";

import Button from './Button'
import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import SubscribeModal from "./SubscribeModal";
import useSubscribeModal from "@/hooks/useSubscribeModal";

interface HeaderProps{
    children: React.ReactNode;
    className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
    const router = useRouter();
    const authModal = useAuthModal();
    const subModal = useSubscribeModal()

    const supabaseClient = useSupabaseClient();
    const { user } = useUser()

    const handleLogout = async () => {
        const { error } = await supabaseClient.auth.signOut();
        // TODO: Reset any playing songs
        router.refresh()

        if (error){
            toast.error(error.message)
        } else {
            toast.success('Logged out!')
        }
    }

  return (
    <div className={twMerge("h-fit bg-gradient-to-b from-emerald-800 p-6", className)}>
        <div className="w-full mb-4 flex items-center justify-between">
            <div className="hidden md:flex gap-x-2 items-center">
                <button className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition" onClick={() => router.back()}>
                    <RxCaretLeft size={35} className="text-white" />
                </button>
                <button className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition" onClick={() => router.forward()}>
                    <RxCaretRight size={35} className="text-white" />
                </button>
            </div>
            {/* Mobile Button Styling */}
            <div className="flex md:hidden gap-x-2 items-center">
                <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
                    <HiHome className="text-black" size={20} />
                </button>
                <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
                    <BiSearch className="text-black" size={20} />
                </button>
            </div>
            <div className="flex justify-between items-center gap-x-4">
                {/* Preparing for dynamic content based on logged in or logged out */}
                { user ? 
                    (
                    <div className="flex gap-x-4 items-center">
                        <Button onClick={handleLogout} className="bg-white px-6 py-2">
                            Logout
                        </Button>
                        <div className="" >
                            <Button className="px-6 py-2" onClick={subModal.onOpen}>
                                Subscribe
                            </Button>
                        </div>
                        <Button onClick={() => router.push('/account')} className="bg-white">
                            <FaUserAlt />
                        </Button>
                    </div>
                    ) : (
                            <>
                            
                                <div className="" >
                                    <Button className="bg-transparent text-neutral-300 font-medium" onClick={authModal.onOpen}>
                                        Sign Up
                                    </Button>
                                </div>
                                <div className="">
                                    <Button className="bg-white px-6 py-2" onClick={authModal.onOpen}>
                                        Log In
                                    </Button>
                                </div>
                            </>
                    )}
            </div>
        </div>
        {children}
    </div>
  )
}

export default Header
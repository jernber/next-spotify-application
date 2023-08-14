"use client";

import { twMerge } from "tailwind-merge";
import { useRouter } from "next/navigation";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx"
import { HiHome } from "react-icons/hi"
import { BiSearch } from "react-icons/bi"
import Button from './Button'
interface HeaderProps{
    children: React.ReactNode;
    className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
    const router = useRouter();

    const handleLogout = () => {
        //handle logout
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
                <>
                    <div className="" >
                        <Button className="bg-transparent text-neutral-300 font-medium" onClick={() => {}}>
                            Sign Up
                        </Button>
                    </div>
                    <div className="">
                        <Button className="bg-white px-6 py-2" onClick={() => {}}>
                            Log In
                        </Button>
                    </div>
                </>
            </div>
        </div>
    </div>
  )
}

export default Header
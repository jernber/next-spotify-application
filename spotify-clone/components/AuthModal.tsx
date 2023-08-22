"use client"

import Modal from "./Modal"

const AuthModal = () => {
  return (
    <Modal title="Welcome Back" description="Log into your account" isOpen onChange={() => {}}>
        Auth Modal Children!
    </Modal>
  )
}

export default AuthModal
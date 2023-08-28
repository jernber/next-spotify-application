'use client'

import Modal from "./Modal"

const SubscribeModal = () => {
    let content = (
        <div className="text-center">No Products available</div>
    )
    return (
        <Modal title="Only For Premium Users" description="Listen to music with Spotify Premium" isOpen onChange={() => {}}>
            {content}
        </Modal>
    )
}

export default SubscribeModal
import React, { useState } from 'react'
import { HiChat } from 'react-icons/hi'

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setIsOpen(true)}
        className="w-14 h-14 bg-[#818cf8] rounded-full flex items-center justify-center shadow-lg hover:bg-[#818cf8]/90 transition-colors"
      >
        <HiChat className="w-7 h-7 text-white" />
      </button>
    </div>
  )
}

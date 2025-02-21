import React, { useState } from 'react'
import { HiX } from 'react-icons/hi'

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-20 md:bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="w-[300px] bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-end p-4 border-b border-gray-200 dark:border-gray-700">
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <HiX className="w-5 h-5" />
            </button>
          </div>
          <div className="p-4 space-y-4">
            <div className="bg-[#818cf8]/10 rounded-2xl p-4 text-dark dark:text-white">
              Hey there! How can I help you today?
            </div>
            <div className="space-y-2">
              <button className="w-full px-4 py-2 text-left rounded-lg border border-[#818cf8]/20 text-dark dark:text-white hover:bg-[#818cf8]/10 transition-colors">
                Tell me about your work
              </button>
              <button className="w-full px-4 py-2 text-left rounded-lg border border-[#818cf8]/20 text-dark dark:text-white hover:bg-[#818cf8]/10 transition-colors">
                View projects
              </button>
              <button className="w-full px-4 py-2 text-left rounded-lg border border-[#818cf8]/20 text-dark dark:text-white hover:bg-[#818cf8]/10 transition-colors">
                Contact info
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-12 h-12 bg-[#818cf8] rounded-full flex items-center justify-center shadow-lg hover:bg-[#818cf8]/90 transition-colors text-xl"
          aria-label="Open AI chat"
        >
          ✨
        </button>
      )}
    </div>
  )
}

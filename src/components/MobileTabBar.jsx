import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiHome, HiBriefcase, HiSparkles, HiCode, HiMail } from 'react-icons/hi'

export default function MobileTabBar() {
  const location = useLocation()
  
  const tabs = [
    { path: '/', icon: HiHome, label: 'Home' },
    { path: '/work', icon: HiBriefcase, label: 'Work' },
    { path: '/adventures', icon: HiSparkles, label: 'Adventures' },
    { path: '/api', icon: HiCode, label: 'API' },
    { path: '/contact', icon: HiMail, label: 'Contact' }
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg md:hidden">
      <div className="flex justify-around items-center h-16 px-4 border-t border-gray-200 dark:border-gray-700">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = location.pathname === tab.path
          
          return (
            <Link
              key={tab.path}
              to={tab.path}
              className={`flex flex-col items-center justify-center w-16 py-1 ${
                isActive 
                  ? 'text-[#818cf8]' 
                  : 'text-gray-600 dark:text-gray-400'
              }`}
            >
              <Icon className={`w-6 h-6 ${
                isActive 
                  ? 'transform scale-110' 
                  : ''
              }`} />
              <span className="text-xs mt-1">{tab.label}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

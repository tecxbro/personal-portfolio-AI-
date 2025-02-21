import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { VscCode } from 'react-icons/vsc'
import { HiSun, HiMoon } from 'react-icons/hi'
import { useTheme } from '../context/ThemeContext'

export default function Navigation() {
  const { isDark, toggleTheme } = useTheme()
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="fixed w-full top-6 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg rounded-2xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <VscCode className="h-7 w-7 text-[#818cf8]" />
              <span className="text-dark dark:text-white text-xl font-medium">Darshan</span>
            </Link>

            <div className="flex items-center">
              <div className="flex items-center gap-8 mr-8 border-r border-gray-200 dark:border-gray-700 pr-8">
                <Link to="/work" className={`text-gray-600 dark:text-gray-300 hover:text-[#818cf8] transition-colors ${isActive('/work') ? 'text-[#818cf8]' : ''}`}>
                  Work/
                </Link>
                <Link to="/adventures" className={`text-gray-600 dark:text-gray-300 hover:text-[#818cf8] transition-colors ${isActive('/adventures') ? 'text-[#818cf8]' : ''}`}>
                  Adventures
                </Link>
                <Link to="/api" className={`text-gray-600 dark:text-gray-300 hover:text-[#818cf8] transition-colors ${isActive('/api') ? 'text-[#818cf8]' : ''}`}>
                  API
                </Link>
                <Link to="/contact" className={`text-gray-600 dark:text-gray-300 hover:text-[#818cf8] transition-colors ${isActive('/contact') ? 'text-[#818cf8]' : ''}`}>
                  Contact
                </Link>
              </div>
              <button 
                onClick={toggleTheme}
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <HiSun className="w-6 h-6 text-[#818cf8]" />
                ) : (
                  <HiMoon className="w-6 h-6 text-[#818cf8]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

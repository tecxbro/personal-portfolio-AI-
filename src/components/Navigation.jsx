import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { VscCode } from 'react-icons/vsc'
import { 
  HiSun, 
  HiMoon,
  HiHome,
  HiBriefcase,
  HiPhotograph,
  HiCode,
  HiMail,
} from 'react-icons/hi'
import { useTheme } from '../context/ThemeContext'

export default function Navigation() {
  const { isDark, toggleTheme } = useTheme()
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const mobileLinks = [
    { path: '/', icon: HiHome, label: 'Home' },
    { path: '/work', icon: HiBriefcase, label: 'Work' },
    { path: '/adventures', icon: HiPhotograph, label: 'Adventures' },
    { path: '/api', icon: HiCode, label: 'API' },
    { path: '/contact', icon: HiMail, label: 'Contact' },
  ]

  const desktopLinks = [
    { path: '/work', label: 'Work' },
    { path: '/adventures', label: 'Adventures' },
    { path: '/api', label: 'API' },
    { path: '/contact', label: 'Contact' },
  ]

  const Logo = () => (
    <Link to="/" className="flex items-center gap-2">
      <VscCode className="h-6 w-6 text-[#818cf8]" />
      <span className="text-dark dark:text-white text-lg font-medium">Darshan</span>
    </Link>
  )

  const ThemeToggle = () => (
    <button 
      onClick={toggleTheme}
      className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <HiSun className="w-5 h-5 text-[#818cf8]" />
      ) : (
        <HiMoon className="w-5 h-5 text-[#818cf8]" />
      )}
    </button>
  )

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between px-6 h-16">
            <Logo />
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Mobile Bottom Tab Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-around items-center h-16">
            {mobileLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex flex-col items-center justify-center w-full py-2 ${
                    isActive(link.path)
                      ? 'text-[#818cf8]'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  <Icon className={`w-6 h-6 mb-1 ${isActive(link.path) ? 'scale-110' : ''}`} />
                  <span className="text-xs">{link.label}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="fixed w-full top-6 z-50 hidden md:block">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg rounded-2xl px-6 py-4">
            <div className="flex items-center justify-between">
              <Logo />
              <div className="flex items-center">
                <div className="flex items-center gap-8 mr-8 border-r border-gray-200 dark:border-gray-700 pr-8">
                  {desktopLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`text-gray-600 dark:text-gray-300 hover:text-[#818cf8] transition-colors ${
                        isActive(link.path) ? 'text-[#818cf8]' : ''
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

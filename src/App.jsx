import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import CustomCursor from './components/CustomCursor'
import ChatBot from './components/ChatBot'
import Home from './pages/Home'
import Work from './pages/Work'
import Adventures from './pages/Adventures'
import ApiDemo from './pages/ApiDemo'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0f172a] theme-transition pb-16 pt-16 md:pt-0 md:pb-0">
      <CustomCursor />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/adventures" element={<Adventures />} />
        <Route path="/api" element={<ApiDemo />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ChatBot />
    </div>
  )
}

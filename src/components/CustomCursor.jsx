import React, { useEffect, useState, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    window.addEventListener('mousemove', updatePosition)
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', updatePosition)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[100] select-none"
      style={{
        transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
        fontSize: '24px',
      }}
    >
      💀
    </div>
  )
}

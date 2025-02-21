import React, { useState } from 'react'
import { HiRefresh } from 'react-icons/hi'

export default function ApiDemo() {
  const [image, setImage] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchRandomImage = async () => {
    setLoading(true)
    try {
      const response = await fetch('https://picsum.photos/800/400')
      if (response.ok) {
        setImage(response.url)
      }
    } catch (error) {
      console.error('Error fetching image:', error)
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen pt-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">API Demo</h2>
          <button
            onClick={fetchRandomImage}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 bg-[#818cf8] rounded-lg text-white hover:bg-[#818cf8]/90 transition-all duration-300 disabled:opacity-50"
          >
            <HiRefresh className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
            {loading ? 'Loading...' : 'Generate Random Image'}
          </button>
        </div>

        <div className="space-y-6">
          {image && (
            <div className="relative rounded-2xl overflow-hidden bg-gray-100 dark:bg-white/5 transition-all duration-300 hover:shadow-xl">
              <img 
                src={image} 
                alt="Random generated"
                className="w-full h-[400px] object-cover"
              />
            </div>
          )}

          <div className="text-gray-600 dark:text-gray-300">
            <p className="text-lg leading-relaxed">
              Click the button above to generate a random image using the Lorem Picsum API.
              Each click will fetch a new, unique image!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

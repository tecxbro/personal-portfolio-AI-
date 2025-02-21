import React from 'react'

export default function Adventures() {
  const adventures = [
    {
      title: 'Mountain Hiking',
      date: 'October 2023',
      location: 'Mount Rainier',
      image: '/adventures/hiking.jpg'
    },
    {
      title: 'Beach Day',
      date: 'August 2023',
      location: 'Pacific Coast',
      image: '/adventures/beach.jpg'
    },
    // Add more adventures here
  ]

  return (
    <div className="min-h-screen pt-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Adventures</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adventures.map((adventure, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={adventure.image}
                  alt={adventure.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <h3 className="text-white text-xl font-semibold mb-1">
                  {adventure.title}
                </h3>
                <p className="text-gray-200 text-sm">
                  {adventure.date} • {adventure.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
          <p className="text-lg">
            Exploring the world, one adventure at a time.
            From mountain peaks to coastal shores, documenting my journey through photographs.
          </p>
        </div>
      </div>
    </div>
  )
}

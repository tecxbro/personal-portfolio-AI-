import React from 'react'

export default function Work() {
  const projects = [
    {
      title: 'Wire Box',
      description: 'A modern file sharing platform',
      color: 'bg-pink-500',
    },
    {
      title: 'Figchat',
      description: 'Real-time design collaboration tool',
      color: 'bg-blue-500',
    },
    {
      title: 'Custoji',
      description: 'Custom emoji creator for teams',
      color: 'bg-yellow-500',
    },
  ]

  return (
    <div className="min-h-screen pt-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.title}
              className="bg-gray-100 dark:bg-white/5 rounded-2xl p-6 hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl ${project.color} opacity-20 mb-4`} />
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

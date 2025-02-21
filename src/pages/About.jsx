import React from 'react'

export default function About() {
  return (
    <div className="min-h-screen pt-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">About Me</h2>
        <div className="space-y-6 text-gray-600 dark:text-gray-300">
          <p className="text-lg leading-relaxed">
            I'm a passionate developer with a deep love for creating elegant solutions
            to complex problems. My journey in tech has been driven by curiosity and
            a constant desire to learn and evolve.
          </p>
          <p className="text-lg leading-relaxed">
            When I'm not coding, you can find me exploring new technologies, contributing
            to open-source projects, or sharing knowledge with the developer community.
          </p>
        </div>
      </div>
    </div>
  )
}

import React from 'react';

export default function Work() {
  const projects = [
    {
      title: 'Elevate Intern',
      description: 'Redesigned website and automated sales processes.',
      color: 'bg-pink-500',
    },
    {
      title: 'Plan.it - Chief Dating Officer',
      description: 'Designed and executed Instagram marketing campaigns.',
      color: 'bg-blue-500',
    },
    {
      title: 'Droza - Co-founder',
      description: 'Directed a team to design and deploy autonomous drones.',
      color: 'bg-yellow-500',
    },
    {
      title: 'VOLUN - Founder',
      description: 'Established and managed a volunteer team for STEM education.',
      color: 'bg-green-500',
    },
  ];

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
  );
}

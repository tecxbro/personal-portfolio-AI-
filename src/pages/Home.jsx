import React from 'react'

export default function Home() {
  const timeline = [
    { year: '2023', text: 'Lead Developer at GiveDirectly' },
    { year: '2020', text: 'Senior Software Engineer at Tech Corp' },
    { year: '2018', text: 'Full Stack Developer at StartupX' },
    { year: '2015', text: 'Frontend Developer at WebCo' },
  ]

  return (
    <div className="min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-[#818cf8] text-[120px] tracking-[0.2em]">
            Darshan.
          </h1>
          
          {/* Profile Image */}
          <div className="mt-12 mb-16">
            <div className="w-[350px] h-[350px] mx-auto rounded-full overflow-hidden border-4 border-[#818cf8]/20 transition-transform duration-300 hover:scale-105 hover:border-[#818cf8]/40">
              <img 
                src="/profile.jpg" 
                alt="Darshan"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="max-w-2xl mx-auto space-y-6 text-lg text-gray-600 dark:text-gray-300">
            <p>
              With 15 years of experience in software development, I've had the privilege
              of working on diverse and impactful projects across different domains.
            </p>
            <p>
              Currently, I'm leading technical initiatives at GiveDirectly, where we're
              leveraging technology to make direct cash transfers more efficient and accessible.
            </p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div 
                key={item.year}
                className="bg-[#818cf8]/10 dark:bg-[#818cf8]/20 rounded-[20px] p-4 hover:bg-[#818cf8]/20 dark:hover:bg-[#818cf8]/30 transition-all duration-300 transform hover:-translate-y-1"
                style={{
                  marginLeft: `${index * 40}px`,
                }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-gray-900 dark:text-white">{item.text}</span>
                  <span className="text-[#818cf8] font-mono">{item.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

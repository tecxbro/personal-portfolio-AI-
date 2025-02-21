import React from 'react';

export default function Home() {
  const timeline = [
    { year: '2024-2028', text: 'CS, University of California, Irvine' },
    { year: '2022-2024', text: 'International Baccalaureate Diploma at Neerja Modi School' },
    // Add more relevant timeline items
  ];

  return (
    <div className="min-h-screen pt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-[#818cf8] text-[20vw] md:text-[120px] tracking-normal md:tracking-[0.2em]">
            Darshan.
          </h1>

          {/* Profile Image */}
          <div className="mt-12 mb-16">
            <div className="w-[350px] h-[350px] mx-auto rounded-full overflow-hidden border-4 border-[#818cf8]/20 transition-transform duration-300 hover:scale-105 hover:border-[#818cf8]/40">
              <img
                src="/profile.jpg"
                alt="Darshan Golchha"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="max-w-2xl mx-auto space-y-6 text-lg text-gray-600 dark:text-gray-300">
            <p>
              Hello, I'm Darshan Golchha, a passionate computer engineering student.
            </p>
            <p>
              I'm interested in leveraging technology to solve real-world problems.
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
  );
}

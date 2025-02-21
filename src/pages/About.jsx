import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen pt-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">About Me</h2>
        <div className="space-y-6 text-gray-600 dark:text-gray-300">
          <p className="text-lg leading-relaxed">
            I am a computer engineering student at UC Irvine.
          </p>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8">Education</h3>
          <p className="text-lg">
            University of California, Irvine | September 2024 - June 2028
            <br />
            Bachelor of Computer Engineering
          </p>
          <p className="text-lg">
            Neerja Modi School, Jaipur, India | July 2022 - July 2024
            <br />
            International Baccalaureate Diploma
            <br />
            Key Subjects: Mathematics HL, Physics HL
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8">Skills</h3>
          <p className="text-lg">
            Technical Skills: Python, SQL, HTML, CSS, JavaScript, React, MS Excel (Advanced), Tableau
            <br />
            Marketing Tools: Google Analytics, Canva, Meta Ads Manager
            <br />
            Logistics Skills: Operations planning, Supply chain optimization, Scheduling algorithms
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8">Certifications</h3>
          <p className="text-lg">
            Python for Everybody Specialization – University of Michigan
            <br />
            Introduction to Computer Science – Harvard University
            <br />
            Supply Chain Management Basics – Coursera
          </p>

          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8">Achievements</h3>
          <p className="text-lg">
            Secured INR 60,000 state government grant for Droza.
            <br />
            Spearheaded fundraising campaigns, raising INR 3 lakh for community-building initiatives.
            <br />
            Awarded Best Prototype at Plaksha University for innovative drone logistics solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

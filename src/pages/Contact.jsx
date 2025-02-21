import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen pt-32 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Get in Touch</h2>
        <div className="space-y-6">
          <a
            href="mailto:golchhad@uci.edu"
            className="block p-6 bg-gray-100 dark:bg-white/5 rounded-2xl hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
            <p className="text-gray-600 dark:text-gray-400">golchhad@uci.edu</p>
          </a>

          <a
            href="tel:+1949"
            className="block p-6 bg-gray-100 dark:bg-white/5 rounded-2xl hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Phone</h3>
            <p className="text-gray-600 dark:text-gray-400">+1 949</p>
          </a>

          <a
            href="https://github.com/tecxbro"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-gray-100 dark:bg-white/5 rounded-2xl hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">GitHub</h3>
            <p className="text-gray-600 dark:text-gray-400">tecxbro</p>
          </a>

          <a
            href="https://linkedin.com/in/tecxbro"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-gray-100 dark:bg-white/5 rounded-2xl hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">LinkedIn</h3>
            <p className="text-gray-600 dark:text-gray-400">tecxbro</p>
          </a>
          
          <a
            href="https://instagram.com/tecxbro"
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-gray-100 dark:bg-white/5 rounded-2xl hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Instagram</h3>
            <p className="text-gray-600 dark:text-gray-400">tecxbro</p>
          </a>
        </div>
      </div>
    </div>
  );
}

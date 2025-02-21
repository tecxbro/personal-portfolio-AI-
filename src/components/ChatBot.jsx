
```jsx
import React, { useState } from 'react';
import { HiX, HiSparkles, HiArrowUp, HiRefresh } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hey there! Ask me something.', sender: 'bot' },
  ]);
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const { toggleTheme } = useTheme();
  const [loadingImage, setLoadingImage] = useState(false);

  const fetchRandomImage = async () => {
    setLoadingImage(true);
    try {
      const response = await fetch('https://picsum.photos/200/200');
      if (response.ok) {
        const imageUrl = response.url;
        const imageMessage = {
          text: (
            <div className="flex flex-col items-center">
              <img src={imageUrl} alt="Random" className="max-w-[200px] max-h-[200px]" />
              <button
                onClick={fetchRandomImage}
                disabled={loadingImage}
                className="flex items-center gap-2 px-4 py-2 bg-[#818cf8] rounded-lg text-white hover:bg-[#818cf8]/90 transition-all duration-300 disabled:opacity-50 mt-2"
              >
                <HiRefresh className={`w-4 h-4 ${loadingImage ? 'animate-spin' : ''}`} />
                Generate Random Image
              </button>
            </div>
          ),
          sender: 'bot',
        };
        setMessages(prevMessages => [...prevMessages, imageMessage]);
      } else {
        const botResponse = `Failed to fetch a random image. Status: ${response.status}`;
        setMessages(prevMessages => [...prevMessages, { text: botResponse, sender: 'bot' }]);
      }
    } catch (error) {
      console.error('Error fetching image:', error);
      const botResponse = `Error fetching a random image: ${error.message}`;
      setMessages(prevMessages => [...prevMessages, { text: botResponse, sender: 'bot' }]);
    } finally {
      setLoadingImage(false);
    }
  };

  const handleSendMessage = async () => {
    if (input.trim() !== '') {
      const newMessage = { text: input, sender: 'user' };
      setMessages(prevMessages => [...prevMessages, newMessage]);

      let botResponse = '';

      if (input.toLowerCase().includes('light mode') || input.toLowerCase().includes('dark mode')) {
        toggleTheme();
        botResponse = `Theme toggled!`;
        setMessages(prevMessages => [...prevMessages, { text: botResponse, sender: 'bot' }]);
      }
      else if (
        input.toLowerCase().includes('who is darshan') ||
        input.toLowerCase().includes('who made this site')
      ) {
        botResponse =
          "Hello, I'm Darshan Golchha, a passionate computer engineering student. I'm interested in leveraging technology to solve real-world problems.";
        setMessages(prevMessages => [...prevMessages, { text: botResponse, sender: 'bot' }]);
      } else if (
        input.toLowerCase().includes('what projects') ||
        input.toLowerCase().includes('what work has he done')
      ) {
        botResponse =
          'I have done projects Droza, Plan.it, VOLUN, would you like to know about a specific project?';
        setMessages(prevMessages => [...prevMessages, { text: botResponse, sender: 'bot' }]);
      } else if (input.toLowerCase().includes('droza')) {
        botResponse = 'Directed a team to design and deploy autonomous drones.';
        setMessages(prevMessages => [...prevMessages, { text: botResponse, sender: 'bot' }]);
      } else if (input.toLowerCase().includes('planit') || input.toLowerCase().includes('plan.it')) {
        botResponse = 'Designed and executed Instagram marketing campaigns.';
        setMessages(prevMessages => [...prevMessages, { text: botResponse, sender: 'bot' }]);
      } else if (input.toLowerCase().includes('volun')) {
        botResponse = 'Established and managed a volunteer team for STEM education.';
        setMessages(prevMessages => [...prevMessages, { text: botResponse, sender: 'bot' }]);
      } else if (input.toLowerCase().includes('contact details')) {
        botResponse = 'Contact me on golchhad@uci.edu';
        setMessages(prevMessages => [...prevMessages, { text: botResponse, sender: 'bot' }]);
      } else if (input.toLowerCase().includes('instagram')) {
        botResponse = '@tecxbro';
        setMessages(prevMessages => [...prevMessages, { text: botResponse, sender: 'bot' }]);
      } else if (
        input.toLowerCase().includes('educational background') ||
        input.toLowerCase().includes('where did you study')
      ) {
        botResponse =
          'I am currently studying Computer Engineering at the University of California, Irvine (2024-2028). I also hold an International Baccalaureate Diploma from Neerja Modi School.';
        setMessages(prevMessages => [...prevMessages, { text: botResponse, sender: 'bot' }]);
      } else if (
        input.toLowerCase().includes('technical skills') ||
        input.toLowerCase().includes('technologies do you know')
      ) {
        botResponse =
          'I am proficient in Python, SQL, HTML, CSS, JavaScript, React, MS Excel (Advanced), and Tableau.';
        setMessages(prevMessages => [...prevMessages, { text: botResponse, sender: 'bot' }]);
      } else if (input.toLowerCase().includes('marketing tools')) {
        botResponse = 'I have experience with Google Analytics, Canva, and Meta Ads Manager.';
        setMessages(prevMessages => [...prevMessages, { text: botResponse, sender: 'bot' }]);
      } else if (input.toLowerCase().includes('logistics skills')) {
        botResponse = 'I have skills in operations planning, supply chain optimization, and scheduling algorithms.';
        setMessages(prevMessages => [...prevMessages, { text: botResponse, sender: 'bot' }]);
      } else if (input.toLowerCase().includes('certifications')) {
        botResponse =
          'I have certifications in Python for Everybody (University of Michigan), Introduction to Computer Science (Harvard University), and Supply Chain Management Basics (Coursera).';
        setMessages(prevMessages => [...prevMessages, { text: botResponse, sender: 'bot' }]);
      } else if (input.toLowerCase().includes('achievements')) {
        botResponse =
          'I secured a state government grant for Droza, spearheaded fundraising campaigns, and was awarded Best Prototype at Plaksha University.';
        setMessages(prevMessages => [...prevMessages, { text: botResponse, sender: 'bot' }]);
      } else if (input.toLowerCase().includes('leadership experience')) {
        botResponse =
          'I served as Vice President of the Astronomy Club and President of Information Technology for Neerja Modi School Model United Nations.';
        setMessages(prevMessages => [...prevMessages, { text: botResponse, sender: 'bot' }]);
      } else if (input.toLowerCase().includes('passionate about')) {
        botResponse = 'I am passionate about leveraging technology to solve real-world problems and making a positive impact on the world.';
        setMessages(prevMessages => [...prevMessages, { text: botResponse, sender: 'bot' }]);
      } else if (input.toLowerCase().includes('interests')) {
        botResponse = 'I am interested in software development, artificial intelligence, and entrepreneurship.';
        setMessages(prevMessages => [...prevMessages, { text: botResponse, sender: 'bot' }]);
      } else if (input.toLowerCase().includes('hobbies')) {
        botResponse = 'I enjoy stargazing, coding, and exploring new technologies.';
        setMessages(prevMessages => [...prevMessages, { text: botResponse, sender: 'bot' }]);
      } else if (
        input.toLowerCase().includes('give me a random image') ||
        input.toLowerCase().includes('generate me a random image') ||
        input.toLowerCase().includes('image') ||
        input.toLowerCase().includes('random image')
      
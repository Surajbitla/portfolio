import React, { useState, useEffect } from 'react';
import './Robot.css';

const Robot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([
    { 
      text: "Hi! I'm your AI assistant! I can help you learn more about Suraj. Try asking about:", 
      type: 'bot' 
    },
    { 
      text: "• Suraj's projects and experience\n• Education and skills\n• Publications and patents\n• Certifications and awards", 
      type: 'bot' 
    }
  ]);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      const aboutSection = document.getElementById('about');
      
      if (!heroSection || !aboutSection) return;

      const scrollPosition = window.scrollY;
      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
      
      // Show robot only after hero section
      if (scrollPosition >= heroBottom - 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();
    
    // Define responses for different topics
    const responses = {
      projects: {
        keywords: ['project', 'projects', 'work'],
        response: "Suraj has worked on several impressive projects including:\n• E-commerce Platform (ShopRight)\n• Real Estate Sales Analysis\n• DC Travel Guide\n• Enhanced Assisted Vision\nWhich project would you like to know more about?"
      },
      education: {
        keywords: ['education', 'study', 'university', 'degree'],
        response: "Suraj holds:\n• MS in Computer Science from Rowan University (GPA: 4/4)\n• BTech in Computer Science from Lovely Professional University\nHe specializes in Data Mining, Web Development, and AI."
      },
      skills: {
        keywords: ['skills', 'technologies', 'tech stack', 'programming'],
        response: "Suraj's key skills include:\n• Full Stack Development (Python, ReactJS, ASP.NET)\n• Cloud Technologies (AWS, Azure)\n• Machine Learning & AI\n• Database Management\nWould you like specific details about any of these areas?"
      },
      experience: {
        keywords: ['experience', 'work', 'job', 'career'],
        response: "Suraj's professional experience includes:\n• Graduate Research Assistant at Rowan University\n• Full Stack Engineer at Creditsafe Technology\n• Application Development Associate at Accenture"
      },
      publications: {
        keywords: ['publication', 'research', 'paper'],
        response: "Suraj has published research on:\n• Computation Offloading for Precision Agriculture\n• SplitTracer: A Cooperative Inference Evaluation Toolkit\nBoth were presented at IEEE ICFEC 2024."
      },
      certifications: {
        keywords: ['certification', 'certificate', 'courses'],
        response: "Suraj has 30+ certifications including:\n• IBM Data Science Professional Certificate\n• Multiple AWS and Azure certifications\n• NPTEL certifications with excellent performance"
      },
      default: "I can tell you about Suraj's projects, education, skills, experience, publications, or certifications. What would you like to know?"
    };

    // Find matching response
    for (const category in responses) {
      if (category === 'default') continue;
      if (responses[category].keywords.some(keyword => message.includes(keyword))) {
        return responses[category].response;
      }
    }

    return responses.default;
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: inputMessage, type: 'user' }]);
    
    // Get and add bot response
    const botResponse = getBotResponse(inputMessage);
    setTimeout(() => {
      setMessages(prev => [...prev, { text: botResponse, type: 'bot' }]);
    }, 500);

    setInputMessage('');
  };

  if (!isVisible) return null;

  return (
    <div className="robot-section">
      <div className="robot-greeting">
        <div className="greeting-bubble">Hi there! 👋</div>
        <img 
          src="/images/astro-bot-slow.gif" 
          alt="Friendly Robot" 
          className="robot-gif"
          onClick={() => setIsChatOpen(!isChatOpen)}
        />
      </div>

      {isChatOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <span>Chat with Portfolio Assistant</span>
            <button onClick={() => setIsChatOpen(false)}>×</button>
          </div>
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.type}`}>
                {msg.text.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage} className="chat-input">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask about Suraj's portfolio..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Robot; 
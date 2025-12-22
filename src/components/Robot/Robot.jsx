import React, { useState, useEffect } from 'react';
import './Robot.css';
import { motion } from 'framer-motion';
import { FaTimes, FaExpand, FaCompress, FaExternalLinkAlt, FaMicrophone, FaMicrophoneSlash, FaPaperPlane, FaChevronUp, FaChevronDown, FaRobot } from 'react-icons/fa';

const Robot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
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
  const [isListening, setIsListening] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      const aboutSection = document.getElementById('about');

      if (!heroSection || !aboutSection) return;

      const scrollPosition = window.scrollY;
      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;

      if (scrollPosition >= heroBottom - 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const navHeight = document.querySelector('.navbar').offsetHeight;

    if (section) {
      window.scrollTo({
        top: section.offsetTop - navHeight,
        behavior: 'smooth'
      });
    }
  };

  const getBotResponse = (userMessage) => {
    const message = userMessage.toLowerCase();

    const responses = {
      projects: {
        keywords: ['project', 'projects', 'work'],
        response: "Suraj has worked on several impressive projects including:\n• Trakvu (AI SaaS Platform)\n• Forgetting LLM System\n• SplitTracr (Distributed AI)\n• ShopRight E-Commerce\nWhich project would you like to know more about?",
        action: {
          text: "View All Projects",
          section: "projects"
        }
      },
      education: {
        keywords: ['education', 'study', 'university', 'degree'],
        response: "Suraj holds:\n• MS in Computer Science from Rowan University (GPA: 4.0/4.0)\n• B.Tech in Computer Science from Sreenidhi Institute\nHe specializes in AI, Data Mining, and Web Development.",
        action: {
          text: "View Education Details",
          section: "education"
        }
      },
      skills: {
        keywords: ['skills', 'technologies', 'tech stack', 'programming'],
        response: "Suraj is a Software Engineer with skills in:\n• Frontend: React 19, Redux, Tailwind\n• Backend: Node.js, Python, ASP.NET\n• AI/ML: LangChain, TensorFlow, PyTorch\n• Cloud: AWS, Docker, Kubernetes\nWould you like specific details?",
        action: {
          text: "View All Skills",
          section: "skills"
        }
      },
      experience: {
        keywords: ['experience', 'work', 'job', 'career'],
        response: "Suraj has 5+ years of experience:\n• Software Engineer at Kruse Construction\n• Grad Research Assistant at Rowan University\n• Full Stack Engineer at Creditsafe\n• App Dev Associate at Accenture",
        action: {
          text: "View Full Experience",
          section: "experience"
        }
      },
      publications: {
        keywords: ['publication', 'research', 'paper', 'patent'],
        response: "Suraj has published 2 IEEE papers on Split Computing & Edge AI, and holds a patent for an 'Intelligent Traffic Management System'.",
        action: {
          text: "View Publications",
          section: "publications"
        }
      },
      certifications: {
        keywords: ['certification', 'certificate', 'courses'],
        response: "Suraj holds key certifications from:\n• AWS (Solutions Architect)\n• Microsoft (Azure Fundamentals)\n• IBM (Data Science)\n• University of Michigan (Python)",
        action: {
          text: "View Certifications",
          section: "certifications"
        }
      },
      default: {
        response: "Hi! I can tell you about Suraj's projects, education, skills, experience, publications, or certifications. What would you like to know?",
        action: null
      }
    };

    for (const category in responses) {
      if (category === 'default') continue;
      if (responses[category].keywords.some(keyword => message.includes(keyword))) {
        return responses[category];
      }
    }

    return responses.default;
  };

  const scrollToBottom = () => {
    const messagesDiv = document.querySelector('.chat-messages');
    if (messagesDiv) {
      messagesDiv.scrollTo({
        top: messagesDiv.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    setMessages(prev => [...prev, { text: inputMessage, type: 'user' }]);
    setInputMessage('');
    setIsTyping(true);
    setHasNewMessage(true);

    setTimeout(scrollToBottom, 100);

    const response = getBotResponse(inputMessage);
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: response.response,
        type: 'bot',
        action: response.action
      }]);
      setIsTyping(false);
      setTimeout(() => setHasNewMessage(false), 500);
      setTimeout(scrollToBottom, 100);
    }, 1000);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const startVoiceRecognition = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputMessage(transcript);
        handleSendMessage({ preventDefault: () => { } });
      };

      recognition.start();
    }
  };

  const suggestedQuestions = [
    "Tell me about suraj projects",
    "What are suraj skills?",
    "Show me suraj publications",
    "What certifications do suraj have?"
  ];

  const handleMessagesScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const scrolledFromBottom = scrollHeight - scrollTop - clientHeight;
    setShowScrollButton(scrolledFromBottom > 10);
  };

  useEffect(() => {
    const messagesDiv = document.querySelector('.chat-messages');
    if (messagesDiv) {
      const { scrollTop, scrollHeight, clientHeight } = messagesDiv;
      const scrolledFromBottom = scrollHeight - scrollTop - clientHeight;
      setShowScrollButton(scrolledFromBottom > 10);
    }
  }, [messages]);

  useEffect(() => {
    if (isChatOpen) {
      setTimeout(scrollToBottom, 100);
    }
  }, [isChatOpen]);

  const handleSuggestedQuestion = (question) => {
    setMessages(prev => [...prev, { text: question, type: 'user' }]);
    const response = getBotResponse(question);
    setIsTyping(true);
    setHasNewMessage(true);

    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: response.response,
        type: 'bot',
        action: response.action
      }]);
      setIsTyping(false);
      setTimeout(() => setHasNewMessage(false), 500);
      setTimeout(scrollToBottom, 100);
    }, 1000);
  };

  if (!isVisible) return null;

  return (
    <div className="robot-section">
      <div className="robot-greeting">
        <div className="greeting-bubble">Hi there! 👋</div>
        <motion.div
          className="robot-avatar-wrapper"
          onClick={() => setIsChatOpen(!isChatOpen)}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="robot-avatar-glow"></div>
          <FaRobot className="robot-icon" />
        </motion.div>
      </div>

      {isChatOpen && (
        <div className={`chat-window ${isMaximized ? 'maximized' : ''}`}>
          <div className="chat-header">
            <span>Chat with Portfolio Assistant</span>
            <div className="chat-controls">
              <button
                className="maximize-btn"
                onClick={() => setIsMaximized(!isMaximized)}
              >
                {isMaximized ? <FaCompress /> : <FaExpand />}
              </button>
              <button onClick={() => setIsChatOpen(false)}>
                <FaTimes />
              </button>
            </div>
          </div>
          <div
            className="chat-messages"
            onScroll={handleMessagesScroll}
          >
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.type}`}>
                {msg.text.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
                {msg.action && (
                  <button
                    className="action-link"
                    onClick={() => scrollToSection(msg.action.section)}
                  >
                    <FaExternalLinkAlt /> {msg.action.text}
                  </button>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="typing-indicator">
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
                <div className="typing-dot"></div>
              </div>
            )}
            {showScrollButton && (
              <button
                className="scroll-bottom-btn"
                onClick={scrollToBottom}
              >
                <FaChevronDown />
              </button>
            )}
          </div>
          {isMaximized && (
            <div className="suggested-questions">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  className="suggested-question-btn"
                  onClick={() => handleSuggestedQuestion(question)}
                >
                  {question}
                </button>
              ))}
            </div>
          )}
          <form onSubmit={handleSendMessage} className="chat-input">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask about Suraj's portfolio..."
            />
            <button
              type="button"
              className="voice-btn"
              onClick={startVoiceRecognition}
            >
              {isListening ? <FaMicrophoneSlash /> : <FaMicrophone />}
            </button>
            <button type="submit" className="voice-btn">
              {(!isMaximized) ? (
                <FaPaperPlane />
              ) : (
                <span className="send-text">Send</span>
              )}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Robot; 
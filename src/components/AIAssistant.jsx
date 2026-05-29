/**
 * AI Assistant Component
 * A fully functional AI chatbot for the portfolio website
 * Features: Floating button, glassmorphism UI, markdown support, animations
 */

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import { Sparkles, X, Send, Minimize2, Download, Trash2 } from "lucide-react";
import { sendMessageToAI } from "../services/grogAPI";
import { quickActions } from "../data/portfolioContext";

/**
 * Markdown component for rendering AI responses
 */
const MarkdownRenderer = ({ content }) => {
  return (
    <div className="prose prose-invert text-sm leading-relaxed max-w-none">
      <ReactMarkdown
        components={{
          p: ({ node, ...props }) => (
            <p className="mb-2 last:mb-0 text-gray-100" {...props} />
          ),
          strong: ({ node, ...props }) => (
            <strong className="font-semibold text-white" {...props} />
          ),
          em: ({ node, ...props }) => <em className="italic text-gray-200" {...props} />,
          code: ({ node, inline, ...props }) => (
            <code
              className={
                inline
                  ? "bg-gray-800 px-1.5 py-0.5 rounded text-cyan-300 font-mono text-xs"
                  : "block bg-gray-900 p-3 rounded-lg overflow-x-auto font-mono text-xs text-green-300 border border-gray-700 mb-2"
              }
              {...props}
            />
          ),
          ul: ({ node, ...props }) => (
            <ul className="list-disc list-inside mb-2 text-gray-100" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal list-inside mb-2 text-gray-100" {...props} />
          ),
          li: ({ node, ...props }) => <li className="mb-1" {...props} />,
          blockquote: ({ node, ...props }) => (
            <blockquote
              className="border-l-4 border-cyan-400 pl-3 italic text-gray-300 mb-2"
              {...props}
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

/**
 * Typing animation component
 */
const TypingAnimation = () => {
  return (
    <div className="flex space-x-1 p-3">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-2 h-2 bg-cyan-400 rounded-full"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 0.6,
            delay: i * 0.1,
            repeat: Infinity,
          }}
        />
      ))}
    </div>
  );
};

/**
 * Message bubble component
 */
const MessageBubble = ({ message, isUser }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}
    >
      <div
        className={`max-w-xs px-4 py-3 rounded-lg ${
          isUser
            ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-br-none shadow-lg"
            : "bg-gray-700 bg-opacity-70 text-gray-100 rounded-bl-none border border-indigo-500 border-opacity-30 shadow-md"
        }`}
      >
        {isUser ? (
          <p className="text-sm">{message.text}</p>
        ) : (
          <MarkdownRenderer content={message.text} />
        )}
        {message.timestamp && (
          <p className="text-xs mt-2 opacity-60">
            {new Date(message.timestamp).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        )}
      </div>
    </motion.div>
  );
};

/**
 * Quick action button
 */
const QuickActionButton = ({ action, onClick }) => {
  return (
    <motion.button
      onClick={() => onClick(action.prompt)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-4 py-2 bg-gradient-to-r from-indigo-700 to-purple-700 hover:from-indigo-600 hover:to-purple-600 border border-indigo-500 border-opacity-50 rounded-lg text-xs font-semibold text-white transition-all shadow-md"
    >
      {action.label}
    </motion.button>
  );
};

/**
 * Main AI Assistant Component
 */
export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(messages.length === 0);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  /**
   * Auto-scroll to latest message
   */
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  /**
   * Handle sending a message
   */
  const handleSendMessage = async (messageText = inputValue) => {
    if (!messageText.trim() || isLoading) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text: messageText,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setShowQuickActions(false);
    setIsLoading(true);

    try {
      // Get AI response
      const aiResponse = await sendMessageToAI(messageText, messages);

      // Add AI message
      const aiMessage = {
        id: Date.now() + 1,
        text: aiResponse,
        sender: "ai",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage = {
        id: Date.now() + 1,
        text: "Sorry, I encountered an error. Please try again.",
        sender: "ai",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
    }
  };

  /**
   * Handle keyboard enter key
   */
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  /**
   * Clear chat
   */
  const handleClearChat = () => {
    setMessages([]);
    setShowQuickActions(true);
  };

  /**
   * Download resume
   */
  const handleDownloadResume = () => {
    window.open(
      "https://drive.google.com/uc?export=download&id=1unTPxTlEE8ZDd44MTxkD6LDdjaVqC8OD",
      "_blank"
    );
  };

  /**
   * Handle quick action click
   */
  const handleQuickAction = (prompt) => {
    handleSendMessage(prompt);
  };

  // Floating button animation
  const floatingButtonVariants = {
    idle: {
      boxShadow: "0 0 30px rgba(0, 255, 200, 0.5), 0 0 60px rgba(139, 0, 255, 0.3), inset 0 0 30px rgba(0, 255, 200, 0.1)",
      y: 0,
    },
    hover: {
      scale: 1.15,
      boxShadow: "0 0 50px rgba(0, 255, 200, 0.8), 0 0 100px rgba(139, 0, 255, 0.6), inset 0 0 30px rgba(0, 255, 200, 0.2)",
      y: -5,
    },
  };

  // Chat window animation
  const chatWindowVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 20,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => {
          setIsOpen(!isOpen);
          setIsMinimized(false);
        }}
        whileHover="hover"
        initial="idle"
        animate="idle"
        variants={floatingButtonVariants}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-400 hover:via-purple-400 hover:to-pink-400 text-white rounded-full shadow-2xl flex items-center justify-center cursor-pointer z-40 border-2 border-cyan-300 border-opacity-70 transition-all duration-300 relative group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300 -z-10"></div>
        <Sparkles size={28} className="animate-spin text-white drop-shadow-lg" style={{ animationDuration: "3s" }} />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={chatWindowVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed bottom-24 right-6 w-96 h-screen sm:h-auto sm:max-h-[600px] bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900 backdrop-blur-xl rounded-2xl shadow-2xl border border-indigo-600 border-opacity-40 overflow-hidden z-50 flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 border-b border-indigo-700 border-opacity-50 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Sparkles size={18} className="text-indigo-300 animate-pulse" />
                <div>
                  <h3 className="font-bold text-white text-lg">AI Assistant</h3>
                  <p className="text-xs text-indigo-200">Powered by Grog AI</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsMinimized(true)}
                  className="p-2 hover:bg-indigo-700 hover:bg-opacity-50 rounded-lg transition-all text-indigo-300 hover:text-white"
                  title="Minimize"
                >
                  <Minimize2 size={18} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setIsOpen(false);
                    setIsMinimized(false);
                  }}
                  className="p-2 hover:bg-red-600 hover:bg-opacity-40 rounded-lg transition-all text-indigo-300 hover:text-red-300"
                  title="Close"
                >
                  <X size={18} />
                </motion.button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-gray-900 to-indigo-950 bg-opacity-80">
              {messages.length === 0 && !isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <p className="text-gray-400 text-sm">
                    👋 Hi! I'm Gaurav's AI Assistant. Ask me anything about his
                    projects, skills, or experience!
                  </p>
                </motion.div>
              )}

              {messages.map((message) => (
                <MessageBubble
                  key={message.id}
                  message={message}
                  isUser={message.sender === "user"}
                />
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-700 bg-opacity-60 rounded-lg rounded-bl-none border border-gray-600">
                    <TypingAnimation />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {showQuickActions && messages.length === 0 && !isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="border-t border-indigo-700 border-opacity-30 px-4 py-4 bg-gradient-to-b from-indigo-900 to-gray-800 bg-opacity-40 space-y-2"
              >
                <p className="text-xs text-indigo-300 mb-3 font-semibold">✨ Quick Actions:</p>
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.map((action, idx) => (
                    <QuickActionButton
                      key={idx}
                      action={action}
                      onClick={handleQuickAction}
                    />
                  ))}
                </div>
              </motion.div>
            )}

            {/* Action Buttons */}
            {messages.length > 0 && !isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="border-t border-indigo-700 border-opacity-30 px-4 py-3 bg-gradient-to-r from-gray-800 via-indigo-900 to-gray-800 bg-opacity-80 flex space-x-2"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownloadResume}
                  className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-lg text-xs font-semibold text-white transition-all shadow-lg"
                  title="Download Resume"
                >
                  <Download size={14} />
                  <span>Resume</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleClearChat}
                  className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 rounded-lg text-xs font-semibold text-white transition-all shadow-lg"
                  title="Clear Chat"
                >
                  <Trash2 size={14} />
                  <span>Clear</span>
                </motion.button>
              </motion.div>
            )}

            {/* Input Area */}
            <div className="border-t border-indigo-700 border-opacity-50 px-4 py-3 bg-gradient-to-r from-gray-800 via-indigo-900 to-gray-800 bg-opacity-80 backdrop-blur-md">
              <div className="flex space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-gray-700 bg-opacity-60 text-white placeholder-gray-400 rounded-lg px-4 py-2.5 text-sm border border-indigo-500 border-opacity-30 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-20 transition-all"
                  disabled={isLoading}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSendMessage()}
                  disabled={!inputValue.trim() || isLoading}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg px-4 py-2.5 transition-all shadow-lg font-semibold"
                >
                  <Send size={18} />
                </motion.button>
              </div>
              <p className="text-xs text-indigo-300 mt-2">
                💡 Press Enter to send • Shift+Enter for new line
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Minimized State */}
      <AnimatePresence>
        {isMinimized && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setIsMinimized(false)}
            className="fixed bottom-24 right-6 bg-gradient-to-r from-indigo-900 to-purple-900 border border-indigo-600 border-opacity-50 rounded-lg px-4 py-3 cursor-pointer z-50 hover:from-indigo-800 hover:to-purple-800 transition-all shadow-xl"
          >
            <p className="text-sm font-bold text-white">✨ AI Assistant</p>
            <p className="text-xs text-indigo-300">Click to open</p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

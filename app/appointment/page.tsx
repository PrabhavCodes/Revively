"use client"
import React, { useState, FormEvent, KeyboardEvent, useCallback } from 'react';

// Define a clear interface for message type
interface Message {
  sender: 'User' | 'AI';
  message: string;
}

// Predefined AI responses with some basic logic
const generateAIResponse = (userMessage: string): string => {
  // Convert message to lowercase for easier matching
  const message = userMessage.toLowerCase();

  // Mental health support response patterns
  const responses = [
    {
      keywords: ['sad', 'depression', 'down', 'unhappy'],
      responses: [
        "I hear that you're feeling low. It's okay to experience difficult emotions. Would you like to talk more about what's troubling you?",
        "Your feelings are valid. Sometimes acknowledging our emotions is the first step towards healing.",
        "Depression can feel overwhelming. Remember that you're not alone, and there are ways to work through these feelings."
      ]
    },
    {
      keywords: ['anxiety', 'stress', 'worried', 'nervous'],
      responses: [
        "Anxiety can be challenging. Let's try to break down what's causing you stress.",
        "It sounds like you're experiencing some anxiety. Can you tell me more about what's making you feel this way?",
        "Feeling anxious is difficult. Would you like to discuss some coping strategies?"
      ]
    },
    {
      keywords: ['help', 'support', 'talk', 'listen'],
      responses: [
        "I'm here to listen and support you. What would you like to discuss today?",
        "Thank you for reaching out. I'm committed to providing a compassionate ear.",
        "Every conversation is a step towards understanding and healing. How can I help you today?"
      ]
    },
    {
      keywords: ['happy', 'good', 'great', 'awesome'],
      responses: [
        "It's wonderful to hear you're feeling positive! Would you like to share what's bringing you joy?",
        "Happiness is a beautiful emotion. Tell me more about what's making you feel good.",
        "Celebrating positive moments is important for mental well-being. I'm glad you're experiencing a good day!"
      ]
    }
  ];

  // Find matching response
  for (const pattern of responses) {
    if (pattern.keywords.some(keyword => message.includes(keyword))) {
      return pattern.responses[Math.floor(Math.random() * pattern.responses.length)];
    }
  }

  // Fallback generic responses
  const genericResponses = [
    "That's interesting. Could you tell me more?",
    "I'm listening. How does that make you feel?",
    "Thank you for sharing. Would you like to elaborate?",
    "I appreciate you opening up. What else would you like to discuss?"
  ];

  return genericResponses[Math.floor(Math.random() * genericResponses.length)];
};

const ChatPage: React.FC = () => {
  // State to store the list of messages with explicit typing
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'AI', message: 'Hello! How can I support your mental health today?' }
  ]);
  
  // State to store the current message input
  const [currentMessage, setCurrentMessage] = useState<string>('');
  
  // State to handle loading and error conditions
  const [isLoading, setIsLoading] = useState(false);

  // Handle sending a message with improved type safety
  const handleSendMessage = (e?: FormEvent) => {
    // Prevent default form submission if event is passed
    if (e) {
      e.preventDefault();
    }

    // Trim and validate message
    const trimmedMessage = currentMessage.trim();
    if (trimmedMessage === '') return;

    // Add user message
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: 'User', message: trimmedMessage },
    ]);

    // Simulate AI thinking
    setIsLoading(true);

    // Use setTimeout to simulate AI response generation
    setTimeout(() => {
      // Generate AI response
      const aiResponse = generateAIResponse(trimmedMessage);

      // Add AI response
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'AI', message: aiResponse }
      ]);

      // Reset loading state
      setIsLoading(false);
    }, 1000);

    // Clear the input field
    setCurrentMessage('');
  };

  // Handle keyboard enter key to send message
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">MindCare Chat</h1>
          <nav>
            <a href="/" className="text-gray-700 hover:text-blue-600 px-4">
              Home
            </a>
            <a href="/schedule" className="text-gray-700 hover:text-blue-600 px-4">
              Schedule
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 py-16">
        <h2 className="text-3xl font-extrabold text-blue-900 text-center">
          AI Mental Health Support
        </h2>

        {/* Chat Display */}
        <div className="mt-8 max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="space-y-4 overflow-y-auto max-h-80">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === 'User' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`p-4 rounded-lg max-w-xs ${
                    msg.sender === 'User'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  <p>{msg.message}</p>
                </div>
              </div>
            ))}
            
            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-200 text-gray-800 p-4 rounded-lg">
                  Typing...
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Message Input Section */}
        <form onSubmit={handleSendMessage} className="mt-6 flex items-center">
          <input
            type="text"
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            disabled={isLoading}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="ml-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 disabled:opacity-50"
          >
            Send
          </button>
        </form>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6 mt-auto">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 MindCare. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ChatPage;
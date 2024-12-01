"use client"
import React, { useState } from 'react';

interface Discussion {
  userName: string;
  content: string;
  date: string;
}

const DiscussionPage: React.FC = () => {
  // State to store the list of discussions
  const [discussions, setDiscussions] = useState<Discussion[]>([
    {
      userName: 'John Doe',
      content: 'I overcame my anxiety by practicing mindfulness and breathing exercises every day.',
      date: '2024-11-25',
    },
    {
      userName: 'Jane Smith',
      content: 'Talking to a professional helped me manage my depression and regain my motivation.',
      date: '2024-11-24',
    },
  ]);

  // State for input fields
  const [newDiscussion, setNewDiscussion] = useState<string>('');
  const [userName, setUserName] = useState<string>('');

  // Handle new discussion submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!userName || !newDiscussion.trim()) return;

    const newDiscussionEntry: Discussion = {
      userName,
      content: newDiscussion.trim(),
      date: new Date().toLocaleDateString(),
    };

    setDiscussions([...discussions, newDiscussionEntry]);

    // Clear the input fields after submission
    setUserName('');
    setNewDiscussion('');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Community Discussion</h1>
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
          How Did You Overcome Your Challenges?
        </h2>

        {/* Existing Discussions */}
        <div className="mt-8 space-y-8">
          {discussions.map((discussion, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between mb-4">
                <h3 className="text-xl font-semibold text-blue-800">{discussion.userName}</h3>
                <span className="text-sm text-gray-500">{discussion.date}</span>
              </div>
              <p className="text-gray-800">{discussion.content}</p>
            </div>
          ))}
        </div>

        {/* New Discussion Form */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">Share Your Story</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Your Name:</label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your name (optional)"
              />
            </div>
            <div>
              <label className="block text-gray-700">Your Experience:</label>
              <textarea
                value={newDiscussion}
                onChange={(e) => setNewDiscussion(e.target.value)}
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Share how you overcame your challenges..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Share Story
            </button>
          </form>
        </div>
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

export default DiscussionPage;

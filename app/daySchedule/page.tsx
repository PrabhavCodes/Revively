"use client"
import React, { useState, useMemo } from 'react';

// Define types for better type safety
interface SchedulePhase {
  [phase: string]: string[];
}

interface ScheduleData {
  [day: string]: SchedulePhase;
}

const SchedulePage: React.FC = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const;

  // Hardcoded data for the schedule of each day
  const scheduleData: ScheduleData = {
    Monday: {
      Morning: ['Meditation', 'Light Exercise'],
      Afternoon: ['Lunch with family', 'Read a book'],
      Evening: ['Therapy session', 'Walk in the park'],
      Night: ['Journal thoughts', 'Prepare for tomorrow'],
    },
    Tuesday: {
      Morning: ['Yoga', 'Healthy breakfast'],
      Afternoon: ['Work on a project', 'Call a friend'],
      Evening: ['Cook a healthy meal', 'Watch a movie'],
      Night: ['Practice gratitude', 'Sleep early'],
    },
    Wednesday: {
      Morning: ['Mindful breathing', 'Morning walk'],
      Afternoon: ['Meet a friend', 'Work on hobbies'],
      Evening: ['Relaxing music', 'Take a bath'],
      Night: ['Reflect on the day', 'Plan for tomorrow'],
    },
    Thursday: {
      Morning: ['Stretching exercises', 'Healthy smoothie'],
      Afternoon: ['Go for a run', 'Have a light lunch'],
      Evening: ['Creative activity', 'Watch a documentary'],
      Night: ['Gratitude journaling', 'Read a book'],
    },
    Friday: {
      Morning: ['Yoga session', 'Journal positive thoughts'],
      Afternoon: ['Complete work tasks', 'Break for nature walk'],
      Evening: ['Cook a new recipe', 'Call family member'],
      Night: ['Watch a show', 'Sleep early'],
    },
    Saturday: {
      Morning: ['Sleep in', 'Take time for self-care'],
      Afternoon: ['Outdoor activity', 'Connect with a friend'],
      Evening: ['Relaxing walk', 'Prepare a healthy dinner'],
      Night: ['Self-reflection', 'Early bedtime'],
    },
    Sunday: {
      Morning: ['Sleep in', 'Practice deep breathing'],
      Afternoon: ['Attend a class or workshop', 'Read a new book'],
      Evening: ['Prep meals for the week', 'Call loved ones'],
      Night: ['Wind down with a relaxing activity', 'Go to bed early'],
    },
  };

  const [currentDayIndex, setCurrentDayIndex] = useState(0);

  // Use useMemo to memoize current day and schedule calculations
  const currentDay = useMemo(() => days[currentDayIndex], [currentDayIndex]);
  const schedule = useMemo(() => 
    scheduleData[currentDay] || {
      Morning: [],
      Afternoon: [],
      Evening: [],
      Night: [],
    }, 
    [currentDay]
  );

  // Improved navigation functions with more explicit typing
  const handlePrevDay = () => {
    setCurrentDayIndex((prevIndex) => (prevIndex - 1 + days.length) % days.length);
  };

  const handleNextDay = () => {
    setCurrentDayIndex((prevIndex) => (prevIndex + 1) % days.length);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">MindCare</h1>
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
          {currentDay} Schedule
        </h2>
        <p className="mt-4 text-lg text-gray-700 text-center">
          Plan your day to improve your mental well-being.
        </p>

        {/* Schedule */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(schedule).map(([phase, tasks]) => (
            <div key={phase} className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold text-blue-600">{phase}</h3>
              <ul className="mt-4 space-y-2">
                {tasks.map((task, index) => (
                  <li key={`${phase}-${index}`} className="text-gray-700 flex items-start">
                    <span className="mr-2">-</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-between items-center">
          <button
            onClick={handlePrevDay}
            aria-label="Previous day"
            className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Previous
          </button>
          <span className="text-gray-700 font-semibold">{currentDay}</span>
          <button
            onClick={handleNextDay}
            aria-label="Next day"
            className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Next
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6 mt-auto">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 MindCare. All rights reserved.</p>
          <p className="mt-2">
            <a href="#contact" className="text-blue-400 underline">
              Contact Us
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SchedulePage;
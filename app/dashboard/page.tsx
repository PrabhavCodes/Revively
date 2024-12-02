"use client";
import React from "react";
import Link from "next/link";

const DashboardPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Dashboard</h1>
          <nav>
            <a href="/" className="text-gray-700 hover:text-blue-600 px-4">
              Logout
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 py-16">
        <h2 className="text-3xl font-extrabold text-blue-900 text-center mb-8">
          Welcome to Your Dashboard
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Link href="/discussion">
            <div className="block bg-white p-6 rounded-lg shadow-md text-center hover:bg-blue-50 cursor-pointer">
              <h3 className="text-xl font-bold text-blue-700">Discussions</h3>
              <p className="text-gray-600">Join the community discussions.</p>
            </div>
          </Link>
          <Link href="/appointment">
            <div className="block bg-white p-6 rounded-lg shadow-md text-center hover:bg-blue-50 cursor-pointer">
              <h3 className="text-xl font-bold text-blue-700">Appointment</h3>
              <p className="text-gray-600">Book your appointments.</p>
            </div>
          </Link>
          <Link href="/daySchedule">
            <div className="block bg-white p-6 rounded-lg shadow-md text-center hover:bg-blue-50 cursor-pointer">
              <h3 className="text-xl font-bold text-blue-700">Day Schedule</h3>
              <p className="text-gray-600">Manage your daily schedule.</p>
            </div>
          </Link>
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

export default DashboardPage;

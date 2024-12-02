import React from 'react';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Revively</h1>
          <nav>
            <a
              href="#features"
              className="text-gray-700 hover:text-blue-600 px-4"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-blue-600 px-4"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 px-4"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow container mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-extrabold text-blue-900">
          Online Psychiatry, Completely Anonymous
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Take control of your mental well-being without revealing your identity.
          Safe, secure, and private.
        </p>
        <div className="mt-6">
          <a
            href="/get-started"
            className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Get Started
          </a>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-bold text-blue-800 text-center">
            Why Choose MindCare?
          </h3>
          <div className="mt-8 grid md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h4 className="text-lg font-semibold text-blue-600">Complete Anonymity</h4>
              <p className="mt-2 text-gray-700">
                No personal details required. Stay secure and anonymous throughout your journey.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h4 className="text-lg font-semibold text-blue-600">Expert Practitioners</h4>
              <p className="mt-2 text-gray-700">
                Work with licensed psychiatrists and therapists who are here to help.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h4 className="text-lg font-semibold text-blue-600">Accessible Anywhere</h4>
              <p className="mt-2 text-gray-700">
                Secure communication available on any device, anywhere in the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-bold text-blue-800 text-center">
            What Our Users Say
          </h3>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 shadow-md rounded-lg p-6">
              <p className="italic text-gray-700">
                "MindCare has been life-changing. The anonymity made me feel
                comfortable seeking help."
              </p>
              <h4 className="mt-4 text-blue-600 font-semibold">- Anonymous User</h4>
            </div>
            <div className="bg-gray-50 shadow-md rounded-lg p-6">
              <p className="italic text-gray-700">
                "The experts here are professional and understanding. Highly
                recommended!"
              </p>
              <h4 className="mt-4 text-blue-600 font-semibold">- Jane D.</h4>
            </div>
            <div className="bg-gray-50 shadow-md rounded-lg p-6">
              <p className="italic text-gray-700">
                "Being anonymous while talking about my struggles was a relief.
                Thank you, MindCare."
              </p>
              <h4 className="mt-4 text-blue-600 font-semibold">- Alex R.</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6 mt-auto">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 MindCare. All rights reserved.</p>
          <p>
            <a href="#contact" className="text-blue-400 underline">
              Contact Us
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

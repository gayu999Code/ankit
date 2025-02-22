import React from 'react';
import { Shield, AlertTriangle, Brain, Lock, ArrowRight, Laptop } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from 'C:/Users/sbc/Downloads/DALL·E 2025-02-21 20.59.12 - A futuristic cybersecurity-themed hero image in shades of blue, showcasing an AI-powered digital shield protecting a user from scam calls and fraud. T.webp';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">ScamShield AI</span>
            </div>
            <div className="flex items-center space-x-4">
            <Link to='/community'>
                    <button className="px-4 py-2 text-indigo-600 hover:text-indigo-700 font-medium">
                        Community
                    </button>
                </Link>
                <Link to='/auth'>
                    <button className="px-4 py-2 text-indigo-600 hover:text-indigo-700 font-medium">
                        Login
                    </button>
                </Link>
                <Link to='/auth'>
                    <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium transition-colors">
                        Sign Up
                    </button>
                </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-indigo-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
              AI-Powered Call Analysis for Fraud Detection
            </h1>
            <div className="w-16 border-b-4 border-indigo-600 mb-6"></div>
            <p className="text-xl text-gray-600 mb-8">
              Protecting Users from Fraudulent Calls with Cutting-Edge AI Technology
            </p>
            <div className="flex space-x-4">
              <Link to='/auth'>
                <button className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium transition-colors inline-flex items-center space-x-2">
                  <span>Get Started Free</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </Link>
              <button className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 font-medium transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImage}
              alt="AI Security Visualization"
              className="rounded-2xl shadow-2xl w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-transparent rounded-2xl" />
          </div>
        </div>
        </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            In an era where cyber fraud is on the rise, protecting sensitive information during phone conversations has never been more critical. Our AI-driven system is designed to analyze call recordings and detect suspicious activities, ensuring user safety and security.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our advanced AI model listens for and flags potential threats, including:
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-indigo-50 p-6 rounded-xl">
              <AlertTriangle className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="font-semibold text-lg mb-3">Requests for Sensitive Information</h3>
              <p className="text-gray-600">Detects attempts to extract OTPs, CVVs, passwords, or banking details.</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-xl">
              <Laptop className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="font-semibold text-lg mb-3">Remote Access App Installation Requests</h3>
              <p className="text-gray-600">Identifies prompts to install applications like AnyDesk, TeamViewer, and other remote access tools.</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-xl">
              <Brain className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="font-semibold text-lg mb-3">Social Engineering Tactics</h3>
              <p className="text-gray-600">Recognizes manipulation techniques such as urgency, fear tactics, and impersonation.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our AI?</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <Lock className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Real-time Threat Detection</h3>
                <p className="text-gray-600">Stay ahead of scammers with instant alerts.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <Brain className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">High Accuracy & Intelligence</h3>
                <p className="text-gray-600">Trained on real-world fraud cases.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <Shield className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">User Privacy First</h3>
                <p className="text-gray-600">Secure processing without storing personal conversations.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Safe, Stay Secure</h2>
            <p className="text-lg text-gray-700 mb-8">
              Empower yourself with AI-driven fraud detection. Whether for personal safety or enterprise security, our system is your first line of defense against fraudulent calls.
            </p>
            <Link to='/auth'>
                <button className="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium transition-colors inline-flex items-center space-x-2">
                  <span>Get Started Today</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>© 2024 ScamShield AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
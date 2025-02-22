import { useState } from 'react';
import { Shield, Mail, Lock, User, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
// type AuthPage = 'login' | 'signup';

function Auth() {
const [currentPage, setCurrentPage] = useState('login');

const LoginForm = () => (
<div className="w-full max-w-md">
<h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Welcome Back</h2>
<p className="text-gray-600 text-center mb-8">Enter your credentials to access your account</p>


  <form className="space-y-6">
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
        Email Address
      </label>
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="email"
          id="email"
          className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
          placeholder="Enter your email"
        />
      </div>
    </div>

    <div>
      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
        Password
      </label>
      <div className="relative">
        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="password"
          id="password"
          className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
          placeholder="Enter your password"
        />
      </div>
    </div>

    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <input
          type="checkbox"
          id="remember"
          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
        />
        <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
          Remember me
        </label>
      </div>
      <button type="button" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
        Forgot password?
      </button>
    </div>

    <Link to='/home2'>
    <button
      type="submit"
      className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
      Sign In
      <ArrowRight className="ml-2 h-5 w-5" />
    </button>
    </Link>
  </form>

  <p className="mt-8 text-center text-sm text-gray-600">
    Don&apos;t have an account?{' '}
    <button
      onClick={() => setCurrentPage('signup')}
      className="font-medium text-indigo-600 hover:text-indigo-500"
    >
      Sign up now
    </button>
  </p>
</div>
);

const SignupForm = () => (
<div className="w-full max-w-md">
<h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Create Account</h2>
<p className="text-gray-600 text-center mb-8">Join us to protect your calls from fraud</p>


  <form className="space-y-6">
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
        Full Name <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          id="name"
          required
          className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
          placeholder="Enter your full name"
        />
      </div>
    </div>

    <div>
      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
        Phone Number <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="tel"
          id="phone"
          required
          pattern="[0-9]{10}"
          className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
          placeholder="Enter your phone number"
        />
      </div>
    </div>

    <div>
      <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700 mb-2">
        Email Address <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="email"
          id="signup-email"
          required
          className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
          placeholder="Enter your email"
        />
      </div>
    </div>

    <div>
      <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700 mb-2">
        Password <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="password"
          id="signup-password"
          required
          minLength={8}
          className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
          placeholder="Create a password"
        />
      </div>
    </div>

    <div>
      <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-2">
        Confirm Password <span className="text-red-500">*</span>
      </label>
      <div className="relative">
        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="password"
          id="confirm-password"
          required
          minLength={8}
          className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
          placeholder="Confirm your password"
        />
      </div>
    </div>

    <div className="flex items-center">
      <input
        type="checkbox"
        id="terms"
        required
        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
      />
      <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
        I agree to the{' '}
        <a href="#" className="text-indigo-600 hover:text-indigo-500">
          Terms of Service
        </a>{' '}
        and{' '}
        <a href="#" className="text-indigo-600 hover:text-indigo-500">
          Privacy Policy
        </a>
        <span className="text-red-500 ml-1">*</span>
      </label>
    </div>

    <button
      type="submit"
      className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Create Account
      <ArrowRight className="ml-2 h-5 w-5" />
    </button>
  </form>

  <p className="mt-8 text-center text-sm text-gray-600">
    Already have an account?{' '}
    <button
      onClick={() => setCurrentPage('login')}
      className="font-medium text-indigo-600 hover:text-indigo-500"
    >
      Sign in
    </button>
  </p>
</div>
);

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
</div>
</div>
</nav>


  {/* Main Content */}
  <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-12rem)]">
      {currentPage === 'login' ? <LoginForm /> : <SignupForm />}
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

export default Auth;
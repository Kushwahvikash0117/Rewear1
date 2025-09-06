import React from 'react';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDF4F2]">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-[#D94F4F] text-center mb-6">Create Your ReWear Account</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" placeholder="you@example.com" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password" placeholder="••••••••" className="w-full px-4 py-2 border border-gray-300 rounded-md" />
          </div>
          <button type="submit" className="w-full bg-[#D94F4F] hover:bg-[#bf3f3f] text-white font-semibold py-2 rounded-md">
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-[#D94F4F] hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;

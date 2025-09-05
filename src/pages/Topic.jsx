import React from "react";
import { Link } from "react-router-dom";
import { FaPython } from "react-icons/fa";

export default function PythonDashboard() {
  return (
    <div className="min-h-screen bg-sky-100 flex justify-center items-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-lg text-center">
        {/* Python Icon */}
        <div className="flex justify-center mb-6">
          <FaPython className="text-8xl text-yellow-500" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to Python Practising
        </h1>

        {/* Description */}
        <p className="text-gray-600 mb-8">
          Practice Python problems, strengthen your Data Structures & Algorithms skills, 
          and prepare for interviews with hands-on coding.
        </p>

        {/* Continue Button */}
        <Link
          to="/ide/python"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
        >
          Continue
        </Link>
      </div>
    </div>
  );
}

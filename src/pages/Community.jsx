// src/pages/Community.jsx
import React from "react";
import { FaDiscord, FaWhatsapp, FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Community() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-sky-100 bg-opacity-70">
      <div className="bg-white rounded-xl shadow-lg p-10 max-w-2xl w-full text-center relative">
        {/* Close button (optional) */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-lg"
          onClick={() => window.history.back()}
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold mb- text-black">Join our Communities</h2>

        {/* Communities section */}
        <div className="flex justify-center gap-16 mb-10">
          <a
            href="https://discord.gg/your-link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <FaDiscord className="text-6xl text-indigo-500 hover:scale-110 transition-transform" />
            <span className="mt-2 text-gray-700">Server</span>
          </a>
          <a
            href="https://chat.whatsapp.com/your-link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <FaWhatsapp className="text-6xl text-green-600 hover:scale-110 transition-transform" />
            <span className="mt-2 text-gray-700">Newsletter</span>
          </a>
        </div>

        {/* Follow us section */}
        <h3 className="text-lg font-medium mb-4 text-black">Follow us via</h3>
        <div className="flex justify-center gap-6 text-3xl">
          <a href="https://www.linkedin.com/in/juttiga-gowtham-a5bb4b290/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-blue-700 hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.instagram.com/_mr.nani._/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-pink-600 hover:scale-110 transition-transform" />
          </a>
          <a href="https://x.com/GowthamJuttiga" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-sky-500 hover:scale-110 transition-transform" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-blue-600 hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}

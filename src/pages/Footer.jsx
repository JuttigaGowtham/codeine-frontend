
import { FaWhatsapp, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useState } from "react";

function Footer() {
  const [showCard, setShowCard] = useState(false);
  return (
    <footer className="bg-sky-100 text-gray-800 relative">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-xl font-bold">Codeine</h2>
          <p className="mt-2 text-sm text-gray-600">
            Your all-in-one coding platform for learning,
            practicing, and excelling in technical interviews.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="/home" className="hover:text-yellow-500">Home</a></li>
            <li><a href="/video" className="hover:text-yellow-500">Video Tutorials</a></li>
            <li><a href="/leaderboard" className="hover:text-yellow-500">Leaderboard</a></li>
            <li><a href="/profile" className="hover:text-yellow-500">Profile</a></li>
            <li><a href="/register" className="hover:text-yellow-500">Register</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold">Resources</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="/contests" className="hover:text-yellow-500">Coding Contests</a></li>
            <li><a href="/community" className="hover:text-yellow-500">Community Forum</a></li>
            <li><a href="/interview" className="hover:text-yellow-500">Interview Prep</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex space-x-4 mt-3">
            <a href="+919346253766"><FaWhatsapp className="w-6 h-6 hover:text-yellow-500" /></a>
            <a href="https://x.com/GowthamJuttiga"><FaTwitter className="w-6 h-6 hover:text-yellow-500" /></a>
            <a href="https://www.linkedin.com/in/juttiga-gowtham-a5bb4b290/"><FaLinkedin className="w-6 h-6 hover:text-yellow-500" /></a>
            <a href="https://www.instagram.com/_mr.nani._/"><FaInstagram className="w-6 h-6 hover:text-yellow-500" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 text-center py-4 text-sm text-gray-600">
        <p>© 2025 Codeine. All rights reserved.</p>
        <p className="mt-1">
          Designed, Developed & Maintained by
          <span
            className="font-semibold text-gray-800 cursor-pointer hover:text-yellow-500"
            onClick={() => setShowCard(true)}
          >
            {' '}Gowtham Juttiga
          </span>
        </p>
      </div>

      {/* About Me Card */}
      {showCard && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
          <div className="bg-white rounded-xl shadow-2xl p-8 max-w-sm w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl font-bold"
              onClick={() => setShowCard(false)}
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-2 text-yellow-600">About Me</h2>
            <p className="text-gray-700 mb-4">
              Hi, I'm Gowtham Juttiga!<br />
              Passionate developer, designer, and creator of Codeine.<br />
              4th yeat BTECH Student at KIET College,Kakinada.<br />
              Connect with me on social media!
            </p>
            <div className="flex space-x-4 mt-2">
              <a href="https://x.com/GowthamJuttiga"><FaTwitter className="w-6 h-6 hover:text-yellow-500" /></a>
              <a href="https://www.linkedin.com/in/juttiga-gowtham-a5bb4b290/"><FaLinkedin className="w-6 h-6 hover:text-yellow-500" /></a>
              <a href="https://www.instagram.com/_mr.nani._/"><FaInstagram className="w-6 h-6 hover:text-yellow-500" /></a>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
export default Footer;

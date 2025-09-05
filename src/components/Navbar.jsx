import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  HomeIcon,
  VideoCameraIcon,
  TrophyIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/home", icon: <HomeIcon className="h-5 w-5" /> },
    { name: "Sources", path: "/video", icon: <VideoCameraIcon className="h-5 w-5" /> },
    { name: "Leaderboard", path: "/leaderboard", icon: <TrophyIcon className="h-5 w-5" /> },
    { name: "Profile", path: "/profile", icon: <UserCircleIcon className="h-5 w-5" /> },
  ];

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="bg-black border border-black shadow-lg sticky top-0 z-50 backdrop-blur-md" style={{ boxShadow: '0 4px 32px 0 rgba(0,0,0,0.15)', border: '1.5px solid rgba(255,255,255,0.25)', borderRadius: 0 }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-xl sm:text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600 cursor-pointer"
          onClick={() => navigate("/home")}
        >
          Codeine
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`relative flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                location.pathname === link.path
                  ? "text-yellow-400"
                  : "text-gray-300 hover:text-yellow-400"
              }`}
            >
              {link.icon}
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 rounded"
                />
              )}
            </Link>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-black bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-md"
          >
            <ArrowRightOnRectangleIcon className="h-5 w-5" />
            Logout
          </motion.button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-300 hover:text-yellow-400 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Dropdown with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black border-t border-gray-800 px-4 py-3 space-y-3"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  location.pathname === link.path
                    ? "text-yellow-400"
                    : "text-gray-300 hover:text-yellow-400"
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}

            <button
              onClick={() => {
                handleLogout();
                setIsOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-black bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 shadow-md"
            >
              <ArrowRightOnRectangleIcon className="h-5 w-5" />
              Logout
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

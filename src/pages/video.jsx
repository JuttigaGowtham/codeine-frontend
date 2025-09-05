import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PythonTutorial from "../pages/PythonTutorial";

export default function VideoPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Reusable Card Component
  const VideoCard = ({ title, description, videoSrc, onClick, image, buttonText = "Watch Now" }) => (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="bg-white rounded-3xl shadow-lg border border-gray-200 flex flex-col overflow-hidden hover:shadow-2xl transition"
    >
      {/* Video or Image */}
      <div className="w-full">
        {videoSrc ? (
          <iframe
            className="w-full h-56 md:h-64 lg:h-72"
            src={videoSrc}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <img
            src={image}
            alt={title}
            className="w-full h-56 md:h-64 lg:h-72 object-cover"
          />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6">
        <h1 className="text-2xl font-bold mb-2 text-yellow-500">{title}</h1>
        <p className="text-gray-700 text-sm flex-grow">{description}</p>

        {/* Action Button */}
        <motion.button
          onClick={onClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 w-full py-2 px-4 bg-yellow-500 text-white font-semibold rounded-xl shadow-md hover:bg-yellow-600 transition"
        >
          {buttonText}
        </motion.button>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-sky-50 to-sky-200 text-gray-900 px-4 py-12">
      {/* Page Heading */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl md:text-7xl font-extrabold text-yellow-500 mb-3">
          Coding Video Resources
        </h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Learn Python with top tutorials, playlists & interactive resources.
          Whether you’re a beginner or brushing up, these videos will guide you
          step-by-step.
        </p>
      </motion.div>

      {/* Video Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl mx-auto">
        <VideoCard
          title="Bro Code - Python"
          description="Learn Python from scratch by Bro Code. Perfect for students & interview prep."
          videoSrc="https://www.youtube.com/embed/ix9cRaBkVe0?si=7rBxE6X2uAJFRpEW"
          onClick={() =>
            window.open("https://www.youtube.com/watch?v=ix9cRaBkVe0", "_blank")
          }
        />

        <VideoCard
          title="Telusko - Python"
          description="Dive deep into Python concepts with structured tutorials from Telusko."
          videoSrc="https://www.youtube.com/embed/videoseries?list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3"
          onClick={() =>
            window.open(
              "https://www.youtube.com/playlist?list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3",
              "_blank"
            )
          }
        />

        {/* Third Card with "Read Me" button */}
        <VideoCard
          title="Python Tutorial"
          description="Explore beginner to advanced Python theory with diagrams, code, and more."
          image="/assests/python.jpeg"
          buttonText="Read Python Tutorial"
          onClick={() => setIsModalOpen(true)}
        />
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative bg-white max-w-5xl w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl p-6 text-black"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.4 }}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-4 text-xl text-gray-600 hover:text-red-500 transition"
              >
                ✖
              </button>
              <PythonTutorial />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

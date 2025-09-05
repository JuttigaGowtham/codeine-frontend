import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 
import IDE from '../components/IDE.jsx';
import RegisterPage from './RegisterPage.jsx';
import VideoPage from './video.jsx';
import contest from './contest.jsx';
import videoImg from "../assets/video.png";
import ideImg from "../assets/ide.jpg";
import contestImg from "../assets/contest.jpg";
import communityImg from "../assets/community.jpg"
import interviewImg from "../assets/interview.jpg"
import TopicsDashboard  from './Topic.jsx';



const CodeIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const TerminalSquareIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 8l-4 4 4 4" />
    <path d="M10 16h4" />
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
  </svg>
);

const BookOpenCheckIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z" />
    <path d="m16 12 2 2 4-4" />
    <path d="M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3" />
  </svg>
);

const TrophyIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);

const UsersIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const ChevronRightIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

// ===== Main App Component =====
function App() {
  return (
    <div className="bg-sky-400 text-gray-900 font-sans">
      <main>
        <HeroSection />
        <FeaturesSection />
        <CTASection />
      </main>
    </div>
  );
}

// ===== Hero Section =====
const HeroSection = () => {
  const [code, setCode] = useState('');
  const fullCode = `function findFactorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * findFactorial(num - 1);
}

console.log(findFactorial(5)); // Output: 120`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setCode(fullCode.substring(0, i));
      i++;
      if (i > fullCode.length) {
        i = 0;
      }
    }, 100);
    return () => clearInterval(interval);
  }, [fullCode]);

  return (
    <section className="py-20 sm:py-28 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-500">
              Become a software engineer at a top product-based company
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
              Solve real-world problems, compete in challenges, and prepare for your dream tech interviews with our interactive coding platform.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="/topics" className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg text-lg transition-all transform hover:scale-105 flex items-center justify-center">
                Start Practising
                <ChevronRightIcon className="ml-2 h-5 w-5" />
              </a>
              <a href="IDE" className="w-full sm:w-auto bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-8 rounded-lg text-lg transition-colors">
                Explore Problems
              </a>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-300">
              <div className="flex items-center space-x-1.5">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-sm text-gray-500">Factorial.js</span>
            </div>
            <pre className="text-sm sm:text-base text-left">
              <code className="text-gray-800 whitespace-pre-wrap">{code}
                <span className="animate-pulse">|</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};
// ===== Features Section =====
const FeaturesSection = () => {
  const features = [
    {
      image: videoImg,
      title: "Python video tutorials",
      description:
        "Access thousands of problems categorized by difficulty and topic, from basic algorithms to complex data structures.",
      button: {
        text: "Watch Now",
        link: "/video",
      },
    },
    {
      image: ideImg,
      title: "In-Browser IDE",
      description:
        "Code, compile, and test your solutions in over 15+ popular programming languages without leaving your browser.",
       button: {
        text: "Start practising",
        link: "/topics",
      },
    },
    {
      image: contestImg,
      title: "Coding Contests",
      description:
        "Challenge yourself and compete with a global community of developers in our regular coding contests.",
       button: {
        text: "Start contest",
        link: "/contest",
      },
    },
    {
      image: interviewImg,
      title: "Interview Prep Kits",
      description:
        "Prepare for technical interviews with company-specific question sets and mock interview sessions.",
       button: {
        text: "Interview kit",
        link: "/contest",
      },
    },
       {
      image: communityImg,
      title: "Supportive Community",
      description:
        "Get help, share knowledge, and collaborate with fellow learners and mentors in our active discussion forums.",
       button: {
        text: "Join our community",
        link: "/Community",
      },
    },
  ];

  return (
    <section id="features" className="bg-sky-100 py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Everything You Need to Succeed
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform is packed with features designed to accelerate your
            learning and career growth.
          </p>
        </div>

        <div className="space-y-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-10 p-8 bg-white rounded-xl shadow-lg min-h-[350px] 
                ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            >
              {/* Image */}
              <div className="flex-shrink-0 flex items-center justify-center bg-sky-50 p-6 rounded-full shadow-md">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-75 w-75 object-contain"
                />
              </div>

              {/* Text */}
              <div
                className={`flex-1 flex flex-col justify-center items-center gap-4 ${
                  index % 2 !== 0
                    ? "text-center md:text-left"
                    : "text-center md:text-right"
                }`}
              >
                <h3 className="text-3xl font-bold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>

                {/* Button (only if defined) */}
                {feature.button && (
                  <a
                    href={feature.button.link}
                    className="mt-4 inline-block px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition"
                  >
                    {feature.button.text}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



// ===== CTA Section ====

const CTASection = () => (
  <section
    id="register"
    className="relative py-20 sm:py-24 bg-gradient-to-br from-sky-100 via-blue-50 to-sky-200 overflow-hidden"
  >
    {/* Dotted background */}
    <div className="absolute inset-0 bg-dots opacity-20"></div>

    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl p-10 sm:p-16 text-center shadow-2xl"
      >
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl sm:text-4xl font-extrabold text-black"
        >
          Ready to Start Your Learning Journey?
        </motion.h2>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-lg text-indigo-100 max-w-2xl mx-auto"
        >
          Join thousands of students building skills, solving coding challenges,
          and preparing for a successful career
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
        >
          <a
            href="RegisterPage"
            className="bg-white text-yellow-600 font-bold py-4 px-10 rounded-lg text-lg shadow-md transition-all transform hover:scale-105 hover:bg-yellow-50"
          >
            Sign Up for Free
          </a>
          <a
            href="ExploreCourses"
            className="bg-yellow-700 text-white font-bold py-4 px-10 rounded-lg text-lg shadow-md transition-all transform hover:scale-105 hover:bg-yellow-800"
          >
            Explore Courses
          </a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default App;

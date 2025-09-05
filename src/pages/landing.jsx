import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiArrowRight, FiHome, FiHelpCircle, FiUser, FiLogOut, FiBarChart2 } from "react-icons/fi";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export default function Home() {
  const color = useMotionValue(COLORS_TOP[0]);
  const navigate = useNavigate();

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
    >
      {/* Top Navbar with react-icons */}
      <nav className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-md border-b border-gray-800 z-20">
        <div className="flex justify-around items-center py-2">
          <button className="flex flex-col items-center text-gray-200 hover:text-blue-400 focus:outline-none">
            <FiHome className="h-6 w-6 mb-1" />
            <span className="text-xs">Home</span>
          </button>
          <button className="flex flex-col items-center text-gray-200 hover:text-blue-400 focus:outline-none" onClick={() => navigate("/questions") }>
            <FiHelpCircle className="h-6 w-6 mb-1" />
            <span className="text-xs">Questions</span>
          </button>
          <button className="flex flex-col items-center text-gray-200 hover:text-blue-400 focus:outline-none">
            <FiUser className="h-6 w-6 mb-1" />
            <span className="text-xs">Profile</span>
          </button>
          <button className="flex flex-col items-center text-gray-200 hover:text-yellow-400 focus:outline-none" onClick={() => navigate("/leaderboard") }>
            <FiBarChart2 className="h-6 w-6 mb-1" />
            <span className="text-xs">Leaderboard</span>
          </button>
          <button
            className="flex flex-col items-center text-gray-200 hover:text-red-400 focus:outline-none"
            onClick={() => {
              localStorage.clear();
              navigate("/login");
            }}
          >
            <FiLogOut className="h-6 w-6 mb-1" />
            <span className="text-xs">Logout</span>
          </button>
        </div>
      </nav>
      <div className="relative z-10 flex flex-col items-center">
        <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
          Hi there, I'm your assistant
        </span>
        <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
          Increase your coding by over 90%
        </h1>
        <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, et,
          distinctio eum impedit nihil ipsum modi.
        </p>
        <motion.button
          style={{ border, boxShadow }}
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }}
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
          onClick={() => navigate("/ide")}
        >
          Start your coding journey
          <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
        </motion.button>
      </div>
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
}

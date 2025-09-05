import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaMedal, FaTrophy, FaFireAlt, FaCheckCircle } from "react-icons/fa";

export default function Profile() {
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [email, setEmail] = useState("");
  const [leaderboard, setLeaderboard] = useState({ rank: "-", problemsSolved: 0, streak: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    setName(localStorage.getItem("name") ?? "User");
    setRollNo(localStorage.getItem("rollNo") ?? "");
    setEmail(localStorage.getItem("email") ?? "");
  }, []);

  useEffect(() => {
    if (!rollNo) {
      setIsLoading(false);
      return;
    }
    fetch("https://codeine-backend.onrender.com/leaderboard")
      .then((res) => res.json())
      .then((data) => {
        setLeaderboardData(data);
        const idx = data.findIndex((u) => u.rollNo === rollNo);
        if (idx !== -1) {
          setLeaderboard({
            rank: idx + 1,
            problemsSolved: data[idx].problemsSolved,
            streak: data[idx].streak,
          });
        }
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, [rollNo]);

  const progress = Math.min((leaderboard.problemsSolved / 100) * 100, 100);

  const achievements = [];
  if (leaderboard.streak >= 7)
    achievements.push({ label: "🔥 7+ Day Streak", icon: <FaFireAlt className="text-orange-500" /> });
  if (leaderboard.rank <= 10)
    achievements.push({ label: "🏆 Top 10 Coder", icon: <FaTrophy className="text-yellow-500" /> });
  if (leaderboard.problemsSolved >= 50)
    achievements.push({ label: "✅ 50+ Problems", icon: <FaCheckCircle className="text-green-500" /> });

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-100 via-sky-200 to-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-yellow-500 border-solid"></div>
        <p className="mt-4 text-gray-800 font-semibold text-lg">Loading Profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-sky-100 via-white to-blue-50 text-gray-900 px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-3xl shadow-2xl border border-gray-200 flex flex-col items-center w-full max-w-5xl p-6 sm:p-10"
      >
        {/* Hero Section */}
        <div className="flex flex-col sm:flex-row items-center gap-6 w-full mb-10">
          <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-5xl font-bold ring-4 ring-offset-2 ring-yellow-400 shadow-lg">
            {name.charAt(0).toUpperCase()}
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-4xl font-extrabold">{name}</h1>
            <p className="text-gray-500 text-lg">{rollNo || "No Roll Number"}</p>
            <p className="text-gray-600">{email}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mb-10">
          {[
            { key: "Rank", value: leaderboard.rank, color: "text-yellow-600", icon: <FaMedal /> },
            { key: "Problems Solved", value: leaderboard.problemsSolved, color: "text-green-600", icon: <FaCheckCircle /> },
            { key: "Streak", value: `${leaderboard.streak} days`, color: "text-orange-600", icon: <FaFireAlt /> },
          ].map((stat) => (
            <motion.div
              key={stat.key}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200 shadow-md"
            >
              <div className="flex justify-center text-2xl mb-2">{stat.icon}</div>
              <h2 className="text-gray-500 text-sm">{stat.key}</h2>
              <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Circular Progress with Description */}
<div className="flex flex-col sm:flex-row items-center justify-center w-full mb-10 gap-8">
  {/* Progress Circle */}
  <div className="flex flex-col items-center">
    <h3 className="text-xl font-bold mb-4">Progress Overview</h3>
    <motion.div
      initial={{ strokeDashoffset: 440 }}
      animate={{ strokeDashoffset: 440 - (440 * progress) / 100 }}
      transition={{ duration: 1.5 }}
      className="relative w-40 h-40"
    >
      <svg className="w-40 h-40 transform -rotate-90">
        <circle
          cx="80"
          cy="80"
          r="70"
          stroke="gray"
          strokeWidth="10"
          fill="transparent"
          className="opacity-20"
        />
        <motion.circle
          cx="80"
          cy="80"
          r="70"
          stroke="url(#gradient)"
          strokeWidth="10"
          fill="transparent"
          strokeDasharray="440"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-green-600">
        {progress.toFixed(0)}%
      </div>
    </motion.div>
    <p className="text-sm text-gray-500 mt-3">
      {leaderboard.problemsSolved} / 100 problems solved
    </p>
  </div>

  {/* Description Section */}
  <div className="text-center sm:text-left max-w-md">
    <h4 className="text-lg font-semibold text-gray-800 mb-2">Your Coding Journey......</h4>
    <p className="text-gray-600 leading-relaxed">
      You're steadily progressing through your problem-solving goals. 
      Stay consistent with daily practice to improve your skills and climb higher on the leaderboard. 
      Every solved problem takes you one step closer to mastery!
    </p>
  </div>
</div>


        {/* Achievements */}
        <div className="w-full mb-10">
          <h3 className="text-xl font-bold mb-4">Achievements</h3>
          <div className="flex flex-wrap gap-3">
            {achievements.length > 0 ? (
              achievements.map((a) => (
                <motion.div
                  key={a.label}
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-300 shadow-sm"
                >
                  {a.icon} <span>{a.label}</span>
                </motion.div>
              ))
            ) : (
              <span className="px-4 py-2 rounded-full bg-gray-100 text-gray-400 border border-gray-300">
                Keep Going 
              </span>
            )}
          </div>
        </div>

        {/* Mini Leaderboard Preview */}
        <div className="w-full">
          <h3 className="text-xl font-bold mb-4">Leaderboard Snapshot</h3>
          <div className="bg-gray-50 rounded-xl border border-gray-200 shadow-sm divide-y divide-gray-200">
            {leaderboardData.slice(0, 5).map((u, i) => (
              <div
                key={u.rollNo}
                className={`flex justify-between items-center px-4 py-3 ${
                  u.rollNo === rollNo ? "bg-yellow-100 font-bold" : ""
                }`}
              >
                <span>
                  {i + 1}. {u.name}
                </span>
                <span className="text-sm text-gray-600">{u.problemsSolved} solved</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

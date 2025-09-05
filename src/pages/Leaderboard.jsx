import { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { FaMedal, FaFire } from "react-icons/fa";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Leaderboard() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [lastUpdated, setLastUpdated] = useState(null);
  const [sortBy, setSortBy] = useState("rank");

  const quotes = [
    "Code is like humor. When you have to explain it, it’s bad.",
    "First, solve the problem. Then, write the code.",
    "Dream in code, build in passion, deploy in success.",
    "Your only limit is your imagination — and maybe semicolons.",
    "Every bug you fix is a step closer to mastery.",
  ];
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setQuoteIndex((prev) => (prev + 1) % quotes.length),
      5000
    );
    return () => clearInterval(interval);
  }, [quotes.length]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get("https://codeine-backend.onrender.com/leaderboard");
        setData(res.data);
        setLastUpdated(
          new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
        );
      } catch (err) {
        setError("Failed to fetch leaderboard data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  const filteredData = useMemo(() => {
    let list = [...data];
    if (searchTerm) {
      list = list.filter(
        (u) =>
          u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          u.rollNo.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (sortBy === "solved") list.sort((a, b) => b.problemsSolved - a.problemsSolved);
    if (sortBy === "streak") list.sort((a, b) => b.streak - a.streak);
    return list;
  }, [data, searchTerm, sortBy]);

  const getMedal = (rank) => {
    if (rank === 1) return <FaMedal className="text-[#FFD700] text-3xl" />;
    if (rank === 2) return <FaMedal className="text-[#C0C0C0] text-3xl" />;
    if (rank === 3) return <FaMedal className="text-[#CD7F32] text-3xl" />;
    return <span className="font-semibold">#{rank}</span>;
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-sky-50 to-sky-200 text-gray-900">

      <main className="flex-1 px-4 py-8">
        {isLoading && (
          <div className="flex items-center justify-center h-screen">
            <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {!isLoading && !error && (
          <div className="max-w-6xl mx-auto space-y-10">
            {/* Branding Header */}
            <div className="flex flex-col items-center text-center px-4">
              <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-600 drop-shadow-lg">
                Codeine Leaderboard
              </h1>
              <p className="text-gray-600 mt-2 text-sm sm:text-base">
                Top performers • Last updated: {lastUpdated}
              </p>
              <motion.p
                key={quoteIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-yellow-600 mt-4 text-lg italic font-medium"
              >
                “{quotes[quoteIndex]}”
              </motion.p>
            </div>

            {/* Search & Sort */}
            <div className="flex flex-col sm:flex-row gap-4 px-4">
              <div className="relative flex-1">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by name or roll number..."
                  className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border rounded-lg bg-white text-gray-700 focus:ring-2 focus:ring-yellow-500"
              >
                <option value="rank">Sort by Rank</option>
                <option value="solved">Sort by Solved</option>
                <option value="streak">Sort by Streak</option>
              </select>
            </div>

            {/* Podium */}
            <div className="flex flex-col sm:flex-row sm:justify-center sm:items-end gap-8 mt-10 px-4">
              {filteredData.slice(0, 3).map((u, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative flex flex-col items-center text-center bg-white border-2 shadow-xl px-10 pt-12 pb-8 rounded-2xl w-full sm:w-80 h-[380px] ${
                    i === 0
                      ? "border-yellow-400 scale-110"
                      : i === 1
                      ? "border-gray-400"
                      : "border-orange-400"
                  }`}
                >
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-yellow-500 to-yellow-600 flex items-center justify-center text-3xl font-bold text-white shadow-md mb-4">
                    {u.name.charAt(0)}
                  </div>
                  <p className="mt-3 font-semibold text-2xl">{u.name}</p>
                  <p className="text-gray-600 text-sm">Roll No: {u.rollNo}</p>

                  {/* Circular Progress Bar */}
                  <div className="w-24 h-24 mt-4">
                    <CircularProgressbar
                      value={u.problemsSolved}
                      maxValue={100}
                      text={`${u.problemsSolved}`}
                      styles={buildStyles({
                        pathColor: "#22c55e",
                        textColor: "#15803d",
                        trailColor: "#e5e7eb",
                        textSize: "16px",
                        strokeLinecap: "round",
                      })}
                    />
                  </div>
                  <p className="text-green-600 text-xs mt-1">
                    Problems Solved
                  </p>

                  {/* Streak */}
                  <p
                    className={`text-sm mt-2 flex items-center gap-1 ${
                      u.streak > 0 ? "text-orange-600" : "text-gray-500"
                    }`}
                  >
                    <FaFire className="w-4 h-4" /> {u.streak} Day Streak
                  </p>

                  <span className="absolute -top-6 text-4xl">
                    {getMedal(i + 1)}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-xl bg-white border shadow-lg mx-4">
              <table className="w-full text-left min-w-[500px]">
                <thead className="bg-gray-100 sticky top-0">
                  <tr>
                    <th className="px-4 py-3 text-yellow-600">Rank</th>
                    <th className="px-4 py-3 text-blue-600">Name</th>
                    <th className="px-4 py-3 text-green-600">Roll No</th>
                    <th className="px-4 py-3 text-pink-600">Solved</th>
                    <th className="px-4 py-3 text-orange-600">Streak</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((u, i) => (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className={`hover:bg-yellow-50 transition ${
                        u.name === "Your Name" ? "bg-yellow-100" : ""
                      }`}
                    >
                      <td className="px-4 py-3">{getMedal(i + 1)}</td>
                      <td className="px-4 py-3 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-500 to-yellow-600 flex items-center justify-center text-black font-bold">
                          {u.name.charAt(0)}
                        </span>
                        {u.name}
                      </td>
                      <td className="px-4 py-3">{u.rollNo}</td>
                      <td className="px-4 py-3">{u.problemsSolved}</td>
                      <td
                        className={`px-4 py-3 flex items-center gap-1 ${
                          u.streak > 0 ? "text-orange-600" : "text-gray-500"
                        }`}
                      >
                        <FaFire className="w-4 h-4" /> {u.streak}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

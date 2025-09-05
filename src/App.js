import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { problems } from "./data/problems";
import IDE from "./components/IDE";
import Problem from "./components/Problem";
import Register from "./pages/RegisterPage";
import Login from "./pages/LoginPage";
import Leaderboard from "./pages/Leaderboard";
import VideoPage from "./pages/video";
import Home from "./pages/home";
import Profile from "./pages/profile.jsx";
import Layout from "./components/Layout";
import TopicsDashboard from "./pages/Topic";
import CommunityPage from "./pages/Community";
import ContestPage from "./pages/contest";

export default function App() {
  const [currentProblem, setCurrentProblem] = useState(problems[0]);
  const [solved, setSolved] = useState([]);
  const [initialRoute, setInitialRoute] = useState("/");

  const rollNo = localStorage.getItem("rollNo");
  const isRegistered = localStorage.getItem("registered");

  const fetchSolvedProblems = useCallback(async () => {
    if (!rollNo) return;
    try {
      const res = await axios.get(`https://codeine-backend-1.onrender.com/user/${rollNo}`);
      setSolved(res.data.solvedProblems || []);
    } catch (error) {
      console.error("Error fetching solved problems", error);
      setSolved([]);
    }
  }, [rollNo]);

  useEffect(() => {
    if (!isRegistered) {
      setInitialRoute("/register");
    } else if (!rollNo) {
      setInitialRoute("/login");
    } else {
      setInitialRoute("/home");
    }
  }, [isRegistered, rollNo]);

  useEffect(() => {
    if (!rollNo) return;
    fetchSolvedProblems();
    const savedProblemId = parseInt(localStorage.getItem("currentProblemId"), 10);
    const problem = problems.find((p) => p.id === savedProblemId);
    if (problem) {
      setCurrentProblem(problem);
    }
  }, [rollNo, fetchSolvedProblems]);

  const setProblem = (p) => {
    setCurrentProblem(p);
    localStorage.setItem("currentProblemId", p.id);
  };

  const handleNextProblem = async () => {
    await fetchSolvedProblems();
    const index = problems.findIndex((p) => p.id === currentProblem.id);
    const next = problems[index + 1];
    if (next) {
      setProblem(next);
    } else {
      alert("🎉 You finished all problems!");
    }
  };

  return (
    <Router>
      <Routes>
        {/* Redirect root path to initial route */}
        <Route path="/" element={<Navigate to={initialRoute} replace />} />

        {/* Auth pages */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Protected pages with Layout */}
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/topics" element={<TopicsDashboard />} /> 
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/contest" element={<ContestPage />} />

          {/* IDE */}
          <Route
            path="/ide/:topic"
            element={
              <IDE
                problem={currentProblem}
                starterCode={currentProblem.starterCode}
                testCases={currentProblem.testCases}
                problemId={currentProblem.id}
                onNextProblem={handleNextProblem}
              />
            }
          />

          <Route path="/questions" element={<Problem problem={currentProblem} />} />
        </Route>

        {/* Catch-all: redirect unknown routes */}
        <Route path="*" element={<Navigate to={initialRoute} replace />} />
      </Routes>
    </Router>
  );
}

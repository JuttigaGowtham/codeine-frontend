import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import loginImage from "../assets/login.jpg";

export default function Login() {
  const [rollNo, setRollNo] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (isLoading) return;
    setIsLoading(true);
    setMsg("");

    try {
      const res = await axios.post("https://codeine-backend.onrender.com/auth/login", {
        rollNo,
        password,
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("rollNo", res.data.rollNo);
      localStorage.setItem("name", res.data.name);
      window.location.href = "/home";
    } catch (err) {
      setMsg(err.response?.data?.message || "Error");
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-sky-100 px-4">
      {/* Full Page Loader */}
      {isLoading && (
        <div className="absolute inset-0 bg-sky-100 bg-opacity-50 flex flex-col items-center justify-center z-50">
          <div className="w-16 h-16 border-4 border-[#1e90ff] border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-white font-semibold text-lg">Logging in...</p>
        </div>
      )}

      <div className="bg-sky-100 rounded-3xl shadow-2xl border border-gray-700 flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-gradient-to-br from-sky-100 via-sky-100 to-sky-100 p-8">
          <img
            src={loginImage}
            alt="Login Illustration"
            className="w-40 sm:w-56 md:w-72 lg:w-80 xl:w-96 mb-4 md:mb-6"
          />
          {/* <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black text-center">
            Unlock Your <br />
            Coding <span className="text-yellow">Performance <span className="text-yellow-500">With</span> codeine</span>
          </h2> */}
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-extrabold text-black mb-2 text-center">
              Welcome to <span className="text-yellow-500">Codeine</span>
            </h2>
            <p className="text-black  mb-8 text-sm text-center">
              Unlock Your Coding Performance
            </p>

            {/* Form Fields */}
            <div className="mb-4">
              <label className="block text-black mb-1 ml-1" htmlFor="rollNo">
                Roll Number
              </label>
              <input
                id="rollNo"
                className="w-full px-4 py-2 rounded-lg bg-sky-100 border border-black focus:outline-none focus:ring-2 focus:ring-[] mb-4 text-black placeholder-gray-400"
                placeholder="Enter Roll Number"
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
                autoComplete="username"
              />

              <label className="block text-black mb-1 ml-1" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="w-full px-4 py-2 rounded-lg bg-sky-100 border border-black focus:outline-none focus:ring-2 focus:ring-[] mb-2 text-black placeholder-gray-400"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />

              <div className="flex justify-end mb-4">
                <button className="text-sm text-yellow-500 hover:underline focus:outline-none">
                  Forgot password?
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 rounded-lg mb-6 transition-colors duration-200 text-lg shadow disabled:opacity-60"
              onClick={handleLogin}
              disabled={isLoading}
            >
              Login
            </button>

            {/* Footer Links */}
            <div className="w-full text-center text-gray-400 text-sm">
              Don&apos;t have an account?{" "}
              <Link to="/register" className="text-yellow-500 font-semibold hover:underline">
                Register
              </Link>
            </div>

            {/* Error Message */}
            {msg && <p className="mt-4 text-red-400 text-center w-full">{msg}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import registerImage from "../assets/register.jpg";

export default function Register() {
  const [rollNo, setRollNo] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  // Loading animation removed
  const navigate = useNavigate();

  const handleRegister = async () => {
  // Loading animation removed
    try {
      const res = await axios.post("https://codeine-backend-1.onrender.com/auth/register", { rollNo, name, password });
      setMsg(res.data.message);
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setMsg(err.response?.data?.message || "Error");
  }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-sky-100 px-4">
  {/* Loading animation removed */}
      <div className="bg-sky-100 rounded-3xl shadow-2xl border border-gray-700 flex flex-col md:flex-row w-full max-w-4xl overflow-hidden">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-gradient-to-br from-sky-100 via-sky-100 to-sky-100 p-8">
          <img src={registerImage} alt="Sign Up" className="w-40 sm:w-56 md:w-72 lg:w-80 xl:w-96 mb-4 md:mb-6" />
          {/* <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black text-center">
            Unlock Your <br /> Coding <span className="text-yellow-500">Performance <span className="text-black">With</span> codeine</span>
          </h2> */}
        </div>
        {/* Form Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-extrabold text-black mb-2 text-center">Create your <span className="text-yellow-500">Account</span></h2>
            <p className="text-black mb-8 text-sm text-center">Register to unlock your coding performance</p>
            {/* Inputs */}
            <label className="block text-black mb-1 ml-1" htmlFor="rollNo">Roll Number</label>
            <input id="rollNo" className="w-full px-4 py-2 rounded-lg bg-sky-100 border border-gray-700 focus:ring-2 focus:ring-[] mb-4 text-black" placeholder="Enter Roll Number" value={rollNo} onChange={(e) => setRollNo(e.target.value)} />
            <label className="block text-black mb-1 ml-1" htmlFor="name">Name</label>
            <input id="name" className="w-full px-4 py-2 rounded-lg bg-sky-100 border border-gray-700 focus:ring-2 focus:ring-[] mb-4 text-black" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
            <label className="block text-black mb-1 ml-1" htmlFor="password">Password</label>
            <input id="password" type="password" className="w-full px-4 py-2 rounded-lg bg-sky-100 border border-gray-700 focus:ring-2 focus:ring-[] mb-4 text-black" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleRegister} className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg mb-6 transition-colors text-lg shadow">Register</button>
            <div className="text-center text-gray-400 text-sm">Already have an account? <a href="/login" className="text-yellow-500 hover:underline">Login</a></div>
            {msg && <p className="mt-4 text-center text-green-400">{msg}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

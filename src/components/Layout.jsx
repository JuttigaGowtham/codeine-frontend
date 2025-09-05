import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Info from "../pages/Footer.jsx"; // ✅ Import Footer.jsx but use as Info

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-sky-100 via-sky-100 to-sky-100 text-white">
      {/* Navbar always at top */}
      <Navbar />

      {/* Page content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer always at bottom */}
      <footer className="mt-8">
        <Info />
      </footer>
    </div>
  );
}

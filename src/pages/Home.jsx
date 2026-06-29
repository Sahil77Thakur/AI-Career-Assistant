import { useEffect, useState } from "react";
import ResumeUpload from "../components/ResumeUpload";
import Footer from "../components/Footer";
import AuroraBackground from "../components/AuroraBackground";

function Home() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className="min-h-screen relative overflow-x-hidden text-slate-800 dark:text-slate-100 transition-colors duration-500"
    >
      {/* Moving Aurora Background */}
      <AuroraBackground />

      {/* Header Container */}
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-16 pt-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              🤖 AI Career Assistant
            </h1>
            <p className="mt-2 text-slate-600 dark:text-slate-300 font-medium">
              AI Resume Evaluation • Skill Gap Analysis • Interview Preparation
            </p>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`px-5 py-3 rounded-xl font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 outline-none cursor-pointer ${
              darkMode
                ? "bg-amber-400 hover:bg-amber-305 text-slate-950"
                : "bg-slate-900 hover:bg-slate-800 text-white"
            }`}
          >
            {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        {/* Upload & Dashboard Section */}
        <div className="flex justify-center pb-16">
          <div className="w-full flex justify-center">
            <ResumeUpload />
          </div>
        </div>
      </div>

      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default Home;

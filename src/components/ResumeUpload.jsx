import { useState, useEffect } from "react";
import ScoreCard from "./dashboard/ScoreCard";
import ResultsDashboard from "./dashboard/ResultsDashboard";
import UploadZone from "./ui/UploadZone";
import Hero from "./Hero";
import FloatingParticles from "./FloatingParticles";

function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [jobRole, setJobRole] = useState("");
  const [company, setCompany] = useState("Generic");
  const [workField, setWorkField] = useState("Information Technology");
  const [analysisType, setAnalysisType] = useState("General");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleFileChange(e) {
    setFile(e.target.files[0]);
  }

  async function handleAnalyze() {
    if (!file || loading) return;

    const formData = new FormData();
    formData.append("resume", file);
    formData.append("jobRole", `${company} - ${jobRole}`);

    try {
      setLoading(true);
   const API_URL = "https://resume-assistant-api.onrender.com";
const response = await fetch(`${API_URL}/analyze`, {
  method: "POST",
  body: formData,
});

      const data = await response.json();
      console.log(data);
      setResult(data);
    } catch (error) {
      console.error(error);
      alert("Upload failed. Make sure backend server is running.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <FloatingParticles />

      <div className="relative z-10 w-full max-w-5xl mx-auto p-4">
        <div className="rounded-3xl p-8 md:p-12 backdrop-blur-3xl bg-white/70 dark:bg-slate-900/70 border border-white/50 dark:border-slate-700/60 shadow-2xl">
          
          <Hero />
          <UploadZone file={file} setFile={setFile} />

          {/* Work Field */}
          <div className="mb-6">
            <label className="flex items-center gap-2 font-semibold mb-2 text-gray-900 dark:text-slate-100">
              <span className="text-xl">💼</span> Work Field
            </label>
            <select
              value={workField}
              onChange={(e) => setWorkField(e.target.value)}
              className="w-full rounded-2xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100 p-4 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900/60 focus:border-blue-500 outline-none transition-all"
            >
              <option>Information Technology</option>
              <option>Education</option>
              <option>Healthcare</option>
              <option>Finance</option>
              <option>Engineering</option>
              <option>Government</option>
              <option>Banking</option>
              <option>Legal</option>
              <option>Sales</option>
              <option>Marketing</option>
              <option>Human Resources</option>
              <option>Design</option>
              <option>Media & Content</option>
              <option>Business</option>
              <option>Hospitality</option>
              <option>Manufacturing</option>
              <option>Research</option>
              <option>Student / Fresher</option>
              <option>Other</option>
            </select>
          </div>

          {/* Analysis Type */}
          <div className="mb-6">
            <label className="block font-semibold mb-2 text-gray-900 dark:text-slate-100">
              Analysis Type
            </label>
            <select
              value={analysisType}
              onChange={(e) => setAnalysisType(e.target.value)}
              className="w-full rounded-2xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100 p-4 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900/60 focus:border-blue-500 outline-none transition-all"
            >
              <option>General</option>
              <option>Company Specific</option>
              <option>Job Description</option>
            </select>
          </div>

          {analysisType === "Company Specific" && (
            <div className="mb-6">
              <label className="block font-semibold mb-2 text-gray-900 dark:text-slate-100">
                Target Company
              </label>
              <select
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full rounded-2xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100 p-4 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900/60 focus:border-blue-500 outline-none transition-all"
              >
                <option>Google</option>
                <option>Microsoft</option>
                <option>Amazon</option>
                <option>Meta</option>
                <option>Apple</option>
                <option>Netflix</option>
                <option>TCS</option>
                <option>Infosys</option>
                <option>Wipro</option>
                <option>Accenture</option>
                <option>Cognizant</option>
                <option>Startup</option>
              </select>
            </div>
          )}

          <input
            type="text"
            placeholder="Target Job Role (Optional)"
            value={jobRole}
            onChange={(e) => setJobRole(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && file && !loading) handleAnalyze();
            }}
            className="w-full rounded-2xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100 p-4 mb-6 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900/60 focus:border-blue-500 outline-none transition-all"
          />

          <button
            onClick={handleAnalyze}
            disabled={!file || loading}
            className={`w-full py-4 rounded-2xl font-semibold text-white transition-all ${
              !file || loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 dark:hover:bg-blue-500"
            }`}
          >
            {loading ? "⏳ Analyzing Resume..." : "🤖 Analyze Resume"}
          </button>

          {loading && (
            <div className="mt-6 text-center text-blue-600 dark:text-blue-400 font-semibold">
              🤖 AI is analyzing your resume...
            </div>
          )}

             {result && (
          <div className="mt-12 border-t border-gray-200 dark:border-slate-700 pt-10">
            <ResultsDashboard result={result} />

            {/* Fallback Recommended Improvements (only if not shown in ResultsDashboard) */}
            {result.improvements && result.improvements.length > 0 && (
              <div className="mt-10">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  🚀 Recommended Improvements
                </h3>
                <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-slate-300">
                  {result.improvements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
        </div>
      </div>
    </>
  );
}

export default ResumeUpload;
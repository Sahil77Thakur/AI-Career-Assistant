function Hero() {
  return (
    <div className="text-center mb-10">

      <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-5">
        🤖 Powered by Gemini AI
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
          AI Career Assistant
        </span>
      </h1>

      <p className="mt-5 max-w-2xl mx-auto text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
        Upload your resume and receive intelligent career insights,
        AI resume evaluation, interview preparation, and a personalized
        learning roadmap.
      </p>

      <div className="flex flex-wrap justify-center gap-3 mt-8">

        <span className="px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 font-medium">
          ✅ AI Evaluation
        </span>

        <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium">
          💼 Skill Gap Analysis
        </span>

        <span className="px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-medium">
          🎤 Interview Questions
        </span>

        <span className="px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 font-medium">
          🚀 Career Roadmap
        </span>

      </div>

    </div>
  );
}

export default Hero;

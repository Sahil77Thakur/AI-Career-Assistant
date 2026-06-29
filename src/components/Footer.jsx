function Footer() {
  return (
    <footer
      className="
        mt-20
        border-t
        border-slate-300/60
        dark:border-slate-700/60
        bg-white/95
        dark:bg-slate-950/95
        backdrop-blur-xl
        transition-all
        duration-500
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row justify-between gap-10">

          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              🤖 AI Career Assistant
            </h2>

            <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-md">
              Intelligent resume evaluation, skill gap analysis,
              interview preparation, and personalized learning
              roadmap powered by AI.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-3">
              Features
            </h3>

            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
              <li>📄 Resume Evaluation</li>
              <li>🎯 Skill Gap Analysis</li>
              <li>💼 Interview Questions</li>
              <li>📚 Learning Roadmap</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-800 dark:text-slate-100 mb-3">
              Technology
            </h3>

            <ul className="space-y-2 text-slate-600 dark:text-slate-400">
              <li>⚛ React</li>
              <li>🚀 Express</li>
              <li>🤖 Google Gemini</li>
              <li>🎨 Tailwind CSS</li>
            </ul>
          </div>

        </div>

        <div className="mt-10 border-t border-slate-300/50 dark:border-slate-700/50 pt-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-slate-500 dark:text-slate-400 text-sm">
            © 2026 AI Career Assistant. All rights reserved.
          </p>

          <p className="text-slate-500 dark:text-slate-400 text-sm mt-4 md:mt-0">
            Built for VIBE2SHIP Hackathon ❤️
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;

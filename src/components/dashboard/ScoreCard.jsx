function ScoreCard({ score }) {
  const value = Number(score) || 0;

  let color = "text-red-650 dark:text-red-450";
  let bgColor = "bg-red-55/60 dark:bg-red-950/20";
  let progressColor = "bg-gradient-to-r from-rose-500 to-red-600 shadow-[0_0_12px_rgba(239,68,68,0.4)]";
  let status = "Significant Improvement Needed";

  if (value >= 85) {
    color = "text-emerald-600 dark:text-emerald-450";
    bgColor = "bg-emerald-50/60 dark:bg-emerald-950/20";
    progressColor = "bg-gradient-to-r from-teal-400 to-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.4)]";
    status = "Excellent";
  } else if (value >= 70) {
    color = "text-amber-600 dark:text-amber-450";
    bgColor = "bg-amber-50/60 dark:bg-amber-950/20";
    progressColor = "bg-gradient-to-r from-amber-400 to-yellow-500 shadow-[0_0_12px_rgba(245,158,11,0.4)]";
    status = "Good";
  } else if (value >= 50) {
    color = "text-orange-600 dark:text-orange-450";
    bgColor = "bg-orange-50/60 dark:bg-orange-950/20";
    progressColor = "bg-gradient-to-r from-orange-400 to-amber-500 shadow-[0_0_12px_rgba(249,115,22,0.4)]";
    status = "Needs Improvement";
  }

  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl shadow-xl border border-slate-200/50 dark:border-slate-800/50 p-8 hover:shadow-2xl transition-all duration-300 text-slate-850 dark:text-slate-100">

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
          🤖 AI Evaluation
        </h2>

        <div className={`px-4 py-2 rounded-full font-semibold text-sm ${bgColor} ${color}`}>
          {status}
        </div>
      </div>

      <div className="flex flex-col items-center">

        <div className={`text-7xl font-black ${color}`}>
          {value}
        </div>

        <p className="text-slate-500 dark:text-slate-400 mt-2">
          Score out of 100
        </p>

      </div>

      <div className="mt-8">

        <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400 mb-2">
          <span>Resume Strength</span>
          <span>{value}%</span>
        </div>

        <div className="w-full h-4 bg-slate-200/60 dark:bg-slate-800/80 rounded-full overflow-hidden p-[2px] border border-slate-300/10 dark:border-slate-700/10">

          <div
            className={`${progressColor} h-full rounded-full transition-all duration-1000 ease-out`}
            style={{ width: `${value}%` }}
          />

        </div>

      </div>

      <div className="grid grid-cols-3 gap-4 mt-8 text-center">

        <div className="bg-slate-50 dark:bg-slate-950/40 border border-slate-100/50 dark:border-slate-800/30 rounded-xl p-4">
          <div className="text-xl">📄</div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-medium">
            Resume
          </p>
        </div>

        <div className="bg-slate-50 dark:bg-slate-950/40 border border-slate-100/50 dark:border-slate-800/30 rounded-xl p-4">
          <div className="text-xl">🎯</div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-medium">
            AI Match
          </p>
        </div>

        <div className="bg-slate-50 dark:bg-slate-950/40 border border-slate-100/50 dark:border-slate-800/30 rounded-xl p-4">
          <div className="text-xl">🚀</div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 font-medium">
            Career
          </p>
        </div>

      </div>

    </div>
  );
}

export default ScoreCard;

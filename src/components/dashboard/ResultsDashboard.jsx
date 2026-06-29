import ScoreCard from "./ScoreCard";

function renderItem(item) {
  if (typeof item === "string") return item;

  if (item?.description) {
    return (
      <>
        <p className="font-semibold text-slate-800 dark:text-slate-200">{item.description}</p>

        {item.deduction !== undefined && (
          <span className="inline-block mt-1 bg-red-50 dark:bg-red-950/20 text-red-650 dark:text-red-400 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-red-200/40 dark:border-red-800/20">
            Deduction: -{item.deduction}
          </span>
        )}
      </>
    );
  }

  return JSON.stringify(item);
}

function Card({ title, icon, children }) {
  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl shadow-xl p-6 md:p-8 border border-slate-200/50 dark:border-slate-800/50 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 text-slate-800 dark:text-slate-100">
      <h2 className="text-xl font-bold mb-5 flex items-center gap-2 text-slate-900 dark:text-white">
        <span className="text-2xl">{icon}</span>
        {title}
      </h2>

      <div>
        {children}
      </div>
    </div>
  );
}

export default function ResultsDashboard({ result }) {
  if (!result) return null;

  return (
    <div className="mt-10 space-y-8">

      <ScoreCard score={result.ats_score} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <Card title="Strengths" icon="✅">
          <ul className="space-y-4">
            {result.strengths?.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 text-xs font-bold mt-[2px]">✓</span>
                <div className="text-slate-700 dark:text-slate-300">
                  {renderItem(item)}
                </div>
              </li>
            ))}
          </ul>
        </Card>

        <Card title="Weaknesses" icon="⚠️">
          <ul className="space-y-4">
            {result.weaknesses?.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-rose-100 dark:bg-rose-955/50 text-rose-600 dark:text-rose-400 text-xs font-bold mt-[2px]">⚠</span>
                <div className="text-slate-700 dark:text-slate-300">
                  {renderItem(item)}
                </div>
              </li>
            ))}
          </ul>
        </Card>

      </div>

      {result.resume_summary && (
        <Card title="Resume Summary" icon="📄">
          <p className="leading-7 text-slate-700 dark:text-slate-300 font-medium">
            {result.resume_summary}
          </p>
        </Card>
      )}

      {result.overall_feedback && (
        <Card title="Overall Feedback" icon="💡">
          <p className="leading-7 text-slate-700 dark:text-slate-300 font-medium">
            {result.overall_feedback}
          </p>
        </Card>
      )}

      {((result.missing_technical_skills && result.missing_technical_skills.length > 0) || 
        (result.missing_skills && result.missing_skills.length > 0)) && (
        <Card title="Missing Skills" icon="💻">
          <div className="flex flex-wrap gap-2.5">
            {(result.missing_technical_skills || result.missing_skills).map((skill, index) => (
              <span
                key={index}
                className="bg-blue-50/55 dark:bg-blue-950/20 border border-blue-200/50 dark:border-blue-800/30 text-blue-700 dark:text-blue-300 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors hover:bg-blue-100/50 dark:hover:bg-blue-900/40"
              >
                {typeof skill === "string"
                  ? skill
                  : skill.skill || JSON.stringify(skill)}
              </span>
            ))}
          </div>
        </Card>
      )}

      {result.interview_questions?.length > 0 && (
        <Card title="Interview Prep Questions" icon="🎤">
          <div className="space-y-4">
            {result.interview_questions.map((question, index) => {
              const text = typeof question === "string" ? question : question.question || JSON.stringify(question);
              return (
                <div key={index} className="flex gap-3.5 items-start bg-slate-50 dark:bg-slate-950/30 p-4 rounded-2xl border border-slate-100 dark:border-slate-800/40">
                  <span className="flex-shrink-0 flex items-center justify-center px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 text-xs font-black uppercase tracking-wider mt-[2px]">Q{index+1}</span>
                  <p className="font-semibold text-slate-800 dark:text-slate-200">{text}</p>
                </div>
              );
            })}
          </div>
        </Card>
      )}

      {result.learning_roadmap?.length > 0 && (
        <Card title="Learning Roadmap" icon="🚀">
          <div className="relative border-l border-blue-200 dark:border-blue-900/50 ml-3 pl-6 space-y-6 py-2">
            {result.learning_roadmap.map((step, index) => {
              const text = typeof step === "string" ? step : step.step || JSON.stringify(step);
              return (
                <div key={index} className="relative">
                  <span className="absolute -left-[33px] top-1 flex items-center justify-center w-5 h-5 rounded-full bg-blue-600 ring-4 ring-white dark:ring-slate-900 text-[10px] text-white font-black">
                    {index + 1}
                  </span>
                  <p className="font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">{text}</p>
                </div>
              );
            })}
          </div>
        </Card>
      )}

    </div>
  );
}

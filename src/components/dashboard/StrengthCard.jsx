import Badge from "./Badge";

function StrengthCard({ strengths = [] }) {
  if (!strengths.length) return null;

  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl shadow-xl p-6 border border-slate-200/50 dark:border-slate-800/50 hover:shadow-2xl transition-all duration-300 text-slate-800 dark:text-slate-100">

      <h2 className="text-2xl font-bold mb-5 flex items-center gap-2 text-slate-900 dark:text-white">
        ✅ Strengths
      </h2>

      <div className="flex flex-wrap gap-3">
        {strengths.map((item, index) => {
          const text =
            typeof item === "string"
              ? item.replace(/\*\*/g, "")
              : item.description || "";

          return (
            <Badge
              key={index}
              text={text}
              color="green"
            />
          );
        })}
      </div>

    </div>
  );
}

export default StrengthCard;

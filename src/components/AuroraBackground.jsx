function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none transition-colors duration-700 bg-gradient-to-br from-blue-50 via-slate-100 to-purple-50 dark:from-slate-950 dark:via-zinc-950 dark:to-slate-950">
      
      {/* Blob 1 */}
      <div 
        className="absolute top-[-25%] left-[-20%] w-[950px] h-[950px] 
                   rounded-full bg-teal-400/25 dark:bg-teal-500/15 
                   blur-[110px] animate-aurora1"
      />

      {/* Blob 2 */}
      <div 
        className="absolute top-[5%] right-[-15%] w-[880px] h-[880px] 
                   rounded-full bg-indigo-500/25 dark:bg-indigo-400/15 
                   blur-[115px] animate-aurora2"
      />

      {/* Blob 3 */}
      <div 
        className="absolute bottom-[-20%] left-[0%] w-[800px] h-[800px] 
                   rounded-full bg-rose-400/25 dark:bg-pink-400/15 
                   blur-[105px] animate-aurora3"
      />

      {/* Blob 4 */}
      <div 
        className="absolute bottom-[-30%] right-[-25%] w-[1000px] h-[1000px] 
                   rounded-full bg-purple-500/25 dark:bg-purple-400/15 
                   blur-[125px] animate-aurora4"
      />
    </div>
  );
}

export default AuroraBackground;
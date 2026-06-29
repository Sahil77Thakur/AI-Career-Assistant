import Badge from "./Badge";

function WeaknessCard({ improvements = [] }){
  if (!weaknesses.length) return null;

  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300">

      <h2 className="text-2xl font-bold mb-5 flex items-center gap-2">
        🚀 Recommended Improvements
      </h2>

      <div className="flex flex-wrap gap-3">

        {improvements.map((item, index) => {

          let text = "";

          if (typeof item === "string") {
            text = item.replace(/\*\*/g, "");
          } else {
            text = item.reason || item.description || "";
          }

          return (
            <Badge
              key={index}
              text={text}
              color="red"
            />
          );

        })}

      </div>

    </div>
  );
}

export default WeaknessCard;
import React from "react";

const Indicator: React.FC<{ total: number; activeIndex: number }> = ({
  total,
  activeIndex,
}) => {
  return (
    <div className="flex justify-center mt-4 space-x-2">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`w-2 h-2 rounded-full transition-colors ${
            index === activeIndex
              ? "bg-gradient-to-r to-amber-200 from-red-300"
              : "bg-zinc-200"
          } ${total <= 1 ? "hidden" : ""}`}
        />
      ))}
    </div>
  );
};

export default Indicator;

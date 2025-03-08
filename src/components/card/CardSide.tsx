import React from "react";
import { CardSideProps } from "../../interfaces/components/card/CardSide.interface";

const CardSide: React.FC<CardSideProps> = ({
  isBack,
  isHovered,
  children,
  gradientFrom,
  gradientTo,
}) => {
  return (
    <div
      className={`absolute w-full h-full rounded-lg shadow-lg p-6 flex flex-col justify-between bg-gradient-to-r text-white`}
      style={{
        backfaceVisibility: "hidden",
        transform: isBack ? "rotateY(180deg)" : "rotateY(0deg)",
        boxShadow: isHovered
          ? "0 15px 30px rgba(0, 0, 0, 0.4)"
          : "0 4px 6px rgba(0, 0, 0, 0.1)",
        backgroundImage: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})`,
      }}
    >
      {children}

      <div className="w-full flex justify-end">
        <div className="h-4 w-16 bg-white bg-opacity-20 rounded-full"></div>
      </div>
    </div>
  );
};

export default CardSide;

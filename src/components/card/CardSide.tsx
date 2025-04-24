import React from "react";
import { CardSideProps } from "../../interfaces/components/card/CardSide.interface";

const CardSide: React.FC<CardSideProps> = ({ isBack, children }) => {
  return (
    <div
      className={`absolute w-full h-full rounded-lg shadow-2xl shadow-neutral-400 p-6 flex flex-col justify-between bg-gradient-to-r from-amber-400 from-10% via-orange-400 via-70% to-rose-400`}
      style={{
        backfaceVisibility: "hidden",
        transform: isBack ? "rotateY(180deg)" : "rotateY(0deg)",
      }}
    >
      {children}
    </div>
  );
};

export default CardSide;

import React from "react";
import { TypeCheckBoxProps } from "../../interfaces/components/project/TypeCheckBox.interface";
import { typeStatics } from "../../../statics/project/typeCheck.static";

const TypeChechBox: React.FC<TypeCheckBoxProps> = ({
  selectedType,
  onTypeChange,
  isVisible,
}) => {
  return (
    <div
      className={`flex w-72 text-zinc-500 bg-neutral-100 justify-between text-md px-2 py-2 rounded-full fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50 transition-opacity duration-500 ${
        isVisible ? "opacity-95" : "opacity-0 pointer-events-none"
      }`}
    >
      <div>
        <div
          className={`cursor-pointer font-pretendard transition-all duration-300 ease-in-out w-16 h-10 text-center flex items-center justify-center ${
            selectedType === "all"
              ? "rounded-full bg-white text-zinc-800"
              : "hover:text-zinc-700"
          }`}
          onClick={() => onTypeChange("all")}
        >
          {typeStatics.all}
        </div>
      </div>
      <div>
        <div
          className={`cursor-pointer font-pretendard transition-all duration-300 ease-in-out w-24 h-10 text-center flex items-center justify-center ${
            selectedType === "personal"
              ? "rounded-full bg-white text-zinc-800"
              : "hover:text-zinc-700"
          }`}
          onClick={() => onTypeChange("personal")}
        >
          {typeStatics.personal}
        </div>
      </div>
      <div>
        <div
          className={`cursor-pointer font-pretendard transition-all duration-300 ease-in-out w-20 h-10 text-center flex items-center justify-center ${
            selectedType === "team"
              ? "rounded-full bg-white text-zinc-800"
              : "hover:text-zinc-700"
          }`}
          onClick={() => onTypeChange("team")}
        >
          {typeStatics.team}
        </div>
      </div>
    </div>
  );
};

export default TypeChechBox;

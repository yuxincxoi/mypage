import React from "react";
import { TypeCheckBoxProps } from "../../interfaces/components/project/TypeCheckBox.interface";
import { typeStatics } from "../../../statics/project/typeCheck.static";

const TypeChechBox: React.FC<TypeCheckBoxProps> = ({
  selectedType,
  onTypeChange,
}) => {
  return (
    <div className="flex w-72 mx-auto justify-between text-md bg-neutral-100 px-2 py-2 rounded-full opacity-95">
      <div>
        <div
          className={`cursor-pointer text-black font-pretendard transition-all duration-500 ease-in-out w-16 h-10 text-center ${
            selectedType === "all"
              ? "rounded-full py-2 bg-white"
              : "text-zinc-500 leading-10"
          }`}
          onClick={() => onTypeChange("all")}
        >
          {typeStatics.all}
        </div>
      </div>
      <div>
        <div
          className={`cursor-pointer text-black font-pretendard transition-all duration-500 ease-in-out w-24 h-10 pr-1 text-center ${
            selectedType === "personal"
              ? "rounded-full py-2 bg-white"
              : "text-zinc-500 leading-10"
          }`}
          onClick={() => onTypeChange("personal")}
        >
          {typeStatics.personal}
        </div>
      </div>
      <div>
        <div
          className={`cursor-pointer text-black font-pretendard transition-all duration-500 ease-in-out w-20 h-10 text-center ${
            selectedType === "team"
              ? "rounded-full py-2 bg-white"
              : "text-zinc-500 leading-10"
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

import React from "react";
import { TypeCheckBoxProps } from "../../interfaces/components/project/TypeCheckBox.interface";
import { typeStatics } from "../../../statics/project/typeCheck.static";

const TypeChechBox: React.FC<TypeCheckBoxProps> = ({
  selectedType,
  onTypeChange,
}) => {
  return (
    <div className="flex w-72 mx-auto text-black justify-between text-md bg-neutral-100 px-2 py-2 rounded-full opacity-95">
      <div>
        <div
          className={`cursor-pointer font-pretendard transition-all duration-500 ease-in-out w-16 h-10 text-center flex items-center justify-center ${
            selectedType === "all" ? "rounded-full bg-white" : "text-zinc-500"
          }`}
          onClick={() => onTypeChange("all")}
        >
          {typeStatics.all}
        </div>
      </div>
      <div>
        <div
          className={`cursor-pointer font-pretendard transition-all duration-500 ease-in-out w-24 h-10 text-center flex items-center justify-center ${
            selectedType === "personal"
              ? "rounded-full bg-white"
              : "text-zinc-500"
          }`}
          onClick={() => onTypeChange("personal")}
        >
          {typeStatics.personal}
        </div>
      </div>
      <div>
        <div
          className={`cursor-pointer font-pretendard transition-all duration-500 ease-in-out w-20 h-10 text-center flex items-center justify-center ${
            selectedType === "team" ? "rounded-full bg-white" : "text-zinc-500"
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

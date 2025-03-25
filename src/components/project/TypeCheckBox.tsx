import React from "react";
import { TypeCheckBoxProps } from "../../interfaces/components/project/TypeCheckBox.interface";
import { typeStatics } from "../../../statics/project/typeCheck.static";

const TypeChechBox: React.FC<TypeCheckBoxProps> = ({
  selectedType,
  onTypeChange,
}) => {
  return (
    <div className="flex w-80 mx-auto justify-between text-2xl">
      <div>
        <div
          className={`cursor-pointer ${
            selectedType === "all"
              ? "font-pretendardBold"
              : "text-gray-300 font-pretendardExtraLight"
          } transition-all duration-300 ease-in-out`}
          onClick={() => onTypeChange("all")}
        >
          {typeStatics.all}
        </div>
        <div
          className={`
              w-2 h-2 rounded-full transition-all duration-300 ease-in-out mt-1 mx-auto
              ${
                selectedType === "all"
                  ? "bg-gradient-to-t from-cyan-500 to-amber-400 via-red-400"
                  : ""
              }
            `}
        ></div>
      </div>
      <div>
        <div
          className={`cursor-pointer ${
            selectedType === "personal"
              ? "font-pretendardBold"
              : "text-gray-300 font-pretendardExtraLight"
          } transition-all duration-300 ease-in-out`}
          onClick={() => onTypeChange("personal")}
        >
          {typeStatics.personal}
        </div>
        <div
          className={`
              w-2 h-2 rounded-full transition-all duration-300 ease-in-out mt-1 mx-auto
              ${
                selectedType === "personal"
                  ? "bg-gradient-to-t from-cyan-500 to-amber-400 via-red-400"
                  : ""
              }
            `}
        ></div>
      </div>
      <div>
        <div
          className={`cursor-pointer ${
            selectedType === "team"
              ? "font-pretendardBold"
              : "text-gray-300 font-pretendardExtraLight"
          } transition-all duration-300 ease-in-out`}
          onClick={() => onTypeChange("team")}
        >
          {typeStatics.team}
        </div>
        <div
          className={`
              w-2 h-2 rounded-full transition-all duration-300 ease-in-out mt-1 mx-auto
              ${
                selectedType === "team"
                  ? "bg-gradient-to-t from-cyan-500 to-amber-400 via-red-400"
                  : ""
              }
            `}
        ></div>
      </div>
    </div>
  );
};

export default TypeChechBox;

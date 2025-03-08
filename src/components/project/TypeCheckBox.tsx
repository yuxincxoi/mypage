import React from "react";
import { TypeCheckBoxProps } from "../../interfaces/components/project/TypeCheckBox.interface";
import { typeStatics } from "../../../statics/project/typeCheck.static";

const TypeChechBox: React.FC<TypeCheckBoxProps> = ({
  selectedType,
  onTypeChange,
}) => {
  return (
    <div className="flex w-80 mx-auto justify-between text-2xl">
      <div
        className={`cursor-pointer ${
          selectedType === "all" ? "font-semibold" : "font-thin"
        } transition-all duration-300 ease-in-out`}
        onClick={() => onTypeChange("all")}
      >
        {typeStatics.all}
      </div>
      <div
        className={`cursor-pointer ${
          selectedType === "personal" ? "font-semibold" : "font-thin"
        } transition-all duration-300 ease-in-out`}
        onClick={() => onTypeChange("personal")}
      >
        {typeStatics.personal}
      </div>
      <div
        className={`cursor-pointer ${
          selectedType === "team" ? "font-semibold" : "font-thin"
        } transition-all duration-300 ease-in-out`}
        onClick={() => onTypeChange("team")}
      >
        {typeStatics.team}
      </div>
    </div>
  );
};

export default TypeChechBox;

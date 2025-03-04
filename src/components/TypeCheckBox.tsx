import React from "react";
import { TypeCheckBoxProps } from "../interfaces/components/TypeCheckBox.interface";

const TypeChechBox: React.FC<TypeCheckBoxProps> = ({
  selectedType,
  onTypeChange,
}) => {
  return (
    <div className="flex w-80 mx-auto justify-between text-2xl">
      <div
        className={`cursor-pointer ${
          selectedType === "all" ? "font-semibold" : "font-thin"
        }`}
        onClick={() => onTypeChange("all")}
      >
        All
      </div>
      <div
        className={`cursor-pointer ${
          selectedType === "personal" ? "font-semibold" : "font-thin"
        }`}
        onClick={() => onTypeChange("personal")}
      >
        Personal
      </div>
      <div
        className={`cursor-pointer ${
          selectedType === "team" ? "font-semibold" : "font-thin"
        }`}
        onClick={() => onTypeChange("team")}
      >
        Team
      </div>
    </div>
  );
};

export default TypeChechBox;

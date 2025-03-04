import React from "react";
import { TypeCheckBoxProps } from "../interfaces/components/TypeCheckBox.interface";

const TypeChechBox: React.FC<TypeCheckBoxProps> = ({
  selectedType,
  onTypeChange,
}) => {
  return (
    <div className="flex w-80 mx-auto justify-between text-2xl font-thin">
      <div className="hover:font-semibold">All</div>
      <div className="hover:font-semibold">Personal</div>
      <div className="hover:font-semibold">Team</div>
    </div>
  );
};

export default TypeChechBox;

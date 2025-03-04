import React from "react";

const TypeChechBox: React.FC = () => {
  return (
    <div className="flex w-80 mx-auto justify-between text-2xl font-thin">
      <div className="hover:font-semibold">All</div>
      <div className="hover:font-semibold">Personal</div>
      <div className="hover:font-semibold">Team</div>
    </div>
  );
};

export default TypeChechBox;

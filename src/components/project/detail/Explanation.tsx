import React from "react";
import { ExplanationProps } from "../../../interfaces/components/project/detail/Explanation.interface";

const Explanation: React.FC<ExplanationProps> = ({ projects }) => {
  return (
    <div className="mt-10 mb-7 flex items-center whitespace-pre-wrap font-pretendard">
      {projects.exp}
    </div>
  );
};

export default Explanation;

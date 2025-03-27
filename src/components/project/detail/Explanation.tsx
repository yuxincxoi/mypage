import React from "react";
import { ExplanationProps } from "../../../interfaces/components/project/detail/Explanation.interface";

const Explanation: React.FC<ExplanationProps> = ({ projects }) => {
  return (
    <div className="my-14 whitespace-pre-wrap font-pretendard text-center">
      {projects.exp}
    </div>
  );
};

export default Explanation;

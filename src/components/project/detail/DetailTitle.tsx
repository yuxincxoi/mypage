import React from "react";
import { DetailTitleProps } from "../../../interfaces/components/project/detail/DetailTitle.interface";

const DetailTitle: React.FC<DetailTitleProps> = ({ projects }) => {
  return (
    <div className="text-4xl text-center font-pretendardBold">
      {projects.title}
    </div>
  );
};

export default DetailTitle;

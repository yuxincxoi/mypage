import React from "react";
import { DetailTitleProps } from "../../../interfaces/components/project/detail/DetailTitle.interface";

const DetailTitle: React.FC<DetailTitleProps> = ({ projects, className }) => {
  return (
    <div className={className}>
      <div className="text-4xl font-pretendardBold">{projects.title}</div>
      <div className="text-sm font-pretendardExtraLight text-neutral-500">
        {projects.subTitle}
      </div>
    </div>
  );
};

export default DetailTitle;

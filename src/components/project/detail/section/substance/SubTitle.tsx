import React from "react";
import { SubTitleProps } from "../../../../../interfaces/components/project/detail/section/substance/SubTitle.interface";

const SubTitle: React.FC<SubTitleProps> = ({ subTitle, className }) => {
  return (
    <p
      className={`font-pretendardSemiBold text-black text-lg mb-2 ${className}`}
    >
      {subTitle}
    </p>
  );
};

export default SubTitle;

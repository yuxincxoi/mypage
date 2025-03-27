import React from "react";
import { ParagraphProps } from "../../../../../interfaces/components/project/detail/section/substance/Paragraph.interface";

const Paragraph: React.FC<ParagraphProps> = ({ para, className }) => {
  return <p className={`mb-4 font-pretendard ${className}`}>{para}</p>;
};

export default Paragraph;

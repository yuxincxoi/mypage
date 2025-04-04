import React from "react";
import { ParagraphProps } from "../../../../../interfaces/components/project/detail/section/substance/Paragraph.interface";

const Paragraph: React.FC<ParagraphProps> = ({ para, className }) => {
  return (
    <ul className="list-disc list-outside marker:text-xs">
      <li className={`mb-4 font-pretendard ${className}`}>{para}</li>
    </ul>
  );
};

export default Paragraph;

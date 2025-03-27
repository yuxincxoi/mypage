import React from "react";
import { SubstanceProps } from "../../../../../interfaces/components/project/detail/section/substance/Substance.interface";
import Paragraph from "./Paragraph";
import SubTitle from "./SubTitle";

export const BasicSubstance: React.FC<SubstanceProps> = ({ para }) => {
  return <Paragraph para={para[0]} />;
};

export const TroubleShootingSubstance: React.FC<SubstanceProps> = ({
  subTitle = [],
  para,
}) => {
  return (
    <div className="font-pretendard p-1">
      <SubTitle subTitle={subTitle[0]} />
      <Paragraph para={para[0]} />
      <SubTitle subTitle={subTitle[1]} />
      <Paragraph para={para[1]} />
      <SubTitle subTitle={subTitle[2]} />
      <Paragraph para={para[2]} />
    </div>
  );
};

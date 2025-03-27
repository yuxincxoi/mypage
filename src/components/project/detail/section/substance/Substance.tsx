import React from "react";
import { SubstanceProps } from "../../../../../interfaces/components/project/detail/section/substance/Substance.interface";
import Paragraph from "./Paragraph";
import SubTitle from "./SubTitle";

export const BasicSubstance: React.FC<SubstanceProps> = ({ para }) => {
  return <Paragraph para={para} />;
};

export const TroubleShootingSubstance: React.FC<SubstanceProps> = ({
  subTitle = "",
  para,
}) => {
  return (
    <>
      <SubTitle subTitle={subTitle} />
      <Paragraph para={para} />
    </>
  );
};

import React from "react";
import { SectionProps } from "../../../../interfaces/components/project/detail/section/Section.interface";
import {
  BasicSubstance,
  TroubleShootingSubstance,
} from "./substance/Substance";

const Section: React.FC<SectionProps> = ({
  className,
  sectionTitle,
  isBasic,
  para,
  subTitle,
}) => {
  return (
    <>
      <p className={`text-3xl font-pretendardSemiBold text-black ${className}`}>
        {sectionTitle}
      </p>
      {isBasic ? (
        <BasicSubstance para={para} />
      ) : (
        <TroubleShootingSubstance subTitle={subTitle} para={para} />
      )}
    </>
  );
};

export default Section;

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
  isChar,
  para,
  subTitle,
}) => {
  return (
    <div className={`${className}`}>
      <p className="text-3xl font-pretendardBold text-black mb-4">
        {sectionTitle}
      </p>
      {isBasic ? (
        <BasicSubstance isChar={isChar} para={para} />
      ) : (
        <TroubleShootingSubstance subTitle={subTitle} para={para} />
      )}
    </div>
  );
};

export default Section;

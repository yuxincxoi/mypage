import React from "react";
import { ProjectIconProps } from "../interfaces/components/ProjectIcon.interface";

const ProjectIcon: React.FC<ProjectIconProps> = ({
  projectTitle,
  style,
  onClick,
  isBlurred = false,
  projectType,
}) => {
  return (
    <div
      className={`w-52 h-52 bg-slate-600 rounded-full flex items-center justify-center flex-col group absolute transition-transform ${
        isBlurred ? "opacity-90 blur-sm" : "opacity-100 blur-none"
      } transition-all duration-500 ease-in-out animate-float`}
      style={style}
      onClick={isBlurred ? undefined : onClick}
      data-type={projectType}
    >
      <div
        className={`text-center ${
          isBlurred ? "hidden" : "hidden group-hover:block"
        }`}
      >
        <p>{projectTitle}</p>
        <p>자세히 보기</p>
      </div>
    </div>
  );
};

export default ProjectIcon;

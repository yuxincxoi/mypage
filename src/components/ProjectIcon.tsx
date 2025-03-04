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
      className="w-52 h-52 bg-slate-600 rounded-full flex items-center justify-center flex-col group absolute transition-transform"
      style={style}
      onClick={onClick}
    >
      <div className="hidden group-hover:block text-center">
        <p>{projectTitle}</p>
        <p>자세히 보기</p>
      </div>
    </div>
  );
};

export default ProjectIcon;

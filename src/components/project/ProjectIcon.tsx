import React from "react";
import { ProjectIconProps } from "../../interfaces/components/project/ProjectIcon.interface";
import { projectIconStatics } from "../../../statics/project/projectIcon.static";

const ProjectIcon: React.FC<ProjectIconProps> = ({
  projectTitle,
  projectSubTitle,
  projectId,
  style,
  onClick,
  isBlurred = false,
  projectType,
}) => {
  return (
    <div
      className={`w-60 h-72 rounded-lg flex items-center justify-center flex-col group border-[1px] border-zinc-300 hover:shadow-lg transition-shadow duration-300
  ${
    isBlurred
      ? "opacity-90 blur-lg cursor-default"
      : "opacity-100 blur-none cursor-pointer"
  }
  relative break-inside-avoid mb-4`}
      style={style}
      onClick={isBlurred ? undefined : onClick}
      data-type={projectType}
    >
      <div className="w-40 h-40 bg-zinc-300 absolute -bottom-10 -right-10 opacity-0 group-hover:opacity-100 ease-in-out transition-all duration-700 pointer-events-none z-20"></div>
      <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
      <div className="w-full h-full p-8 relative z-10 overflow-hidden">
        <div className="font-pretendardSemiBold text-2xl text-black">
          {projectTitle}
        </div>
        <div className="font-pretendardExtraLight text-md text-zinc-500">
          {projectSubTitle}
        </div>
        <div className="w-40 h-40 bg-zinc-300 absolute -bottom-10 -right-10"></div>
      </div>
    </div>
  );
};

export default ProjectIcon;

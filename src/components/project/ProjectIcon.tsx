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
      className={`w-80 h-60 rounded-lg flex items-center justify-center flex-col group border-[1px] border-zinc-300 hover:shadow-lg transition-shadow duration-300
        ${
          isBlurred
            ? "opacity-90 blur-lg cursor-default"
            : "opacity-100 blur-none cursor-pointer"
        } transition-opacity duration-1000 ease-in-out`}
      onClick={isBlurred ? undefined : onClick}
      data-type={projectType}
    >
      <div className="w-full h-full p-8 relative">
        <div className="font-pretendardSemiBold text-2xl text-black">
          {projectTitle}
        </div>
        <div className="font-pretendardExtraLight text-md text-zinc-500">
          {projectSubTitle}
        </div>

        <div className="w-16 h-16 bg-zinc-300 absolute bottom-10 right-10"></div>
      </div>
    </div>
  );
};

export default ProjectIcon;

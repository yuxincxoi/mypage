import React from "react";
import { ProjectIconProps } from "../../interfaces/components/project/ProjectIcon.interface";
import { projectIconStatics } from "../../../statics/project/projectIcon.static";

const ProjectIcon: React.FC<ProjectIconProps> = ({
  projectTitle,
  projectId,
  style,
  onClick,
  isBlurred = false,
  projectType,
}) => {
  return (
    <div
      className={`w-52 h-52 rounded-full flex items-center justify-center flex-col group absolute shadow-lg 
        ${
          isBlurred
            ? "opacity-90 blur-lg cursor-default"
            : "opacity-100 blur-none cursor-pointer"
        } transition duration-1000 ease-in-out`}
      style={{
        ...style,
        backgroundImage: `url(/img/project${projectId}/cover.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={isBlurred ? undefined : onClick}
      data-type={projectType}
    >
      <div
        className={`absolute inset-0 bg-zinc-400 opacity-0 group-hover:opacity-95 transition-all duration-500 rounded-full`}
      ></div>
      <div
        className={`text-center font-pretendard text-white z-10 ${
          isBlurred ? "hidden" : "hidden group-hover:block"
        }`}
      >
        <p>{projectTitle}</p>
        <p className="mt-4">{projectIconStatics.showDetail}</p>
      </div>
    </div>
  );
};

export default ProjectIcon;

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
      className={`w-52 h-52 bg-slate-600 rounded-full flex items-center justify-center flex-col group absolute shadow-lg ${
        isBlurred
          ? "opacity-90 blur-lg cursor-default"
          : "opacity-100 blur-none cursor-pointer"
      } transition-all duration-1000 ease-in-out animate-float`}
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
        className={`text-center ${
          isBlurred ? "hidden" : "hidden group-hover:block"
        }`}
      >
        <p>{projectTitle}</p>
        <p>{projectIconStatics.showDetail}</p>
      </div>
    </div>
  );
};

export default ProjectIcon;

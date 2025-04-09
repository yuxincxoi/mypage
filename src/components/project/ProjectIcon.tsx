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
  const radius = 110;
  const centerX = 110;
  const centerY = 104;

  return (
    <div
      className={`w-80 h-60 rounded-md flex items-center justify-center flex-col group border-[1px] border-zinc-300 
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
    ></div>
  );
};

export default ProjectIcon;

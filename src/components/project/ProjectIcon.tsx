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
      className={`w-60 h-[230px] rounded-lg flex items-center justify-center flex-col group border-[1px] border-zinc-300 hover:shadow-lg transition-shadow duration-300 z-10
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
      <div
        className="w-44 h-44 absolute bg-contain bg-no-repeat bg-center -bottom-7 -right-8 opacity-0 group-hover:opacity-100 ease-in-out transition-all duration-500 pointer-events-none z-20"
        style={{
          backgroundImage: `url(/img/project${projectId}/cover.png)`,
        }}
      ></div>
      <div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
      <div className="w-full h-full px-6 py-5 relative z-10 overflow-hidden">
        <div className="font-pretendardSemiBold text-2xl text-black">
          {projectTitle}
        </div>
        <div className="font-pretendardExtraLight text-md leading-5 text-zinc-500 whitespace-pre-wrap">
          {projectSubTitle}
        </div>
        <div
          className="w-44 h-44 absolute -bottom-7 -right-8 bg-contain bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(/img/project${projectId}/cover.png)`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ProjectIcon;

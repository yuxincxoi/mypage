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
    } overflow-hidden relative`}
      onClick={isBlurred ? undefined : onClick}
      data-type={projectType}
    >
      {/* 배경 이미지 */}
      <div
        className={`absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-50  transition-all duration-500`}
        style={{
          backgroundImage: `url(/img/project${projectId}/cover.png)`,
        }}
      ></div>
      {/* 오버레이 */}
      <div className="absolute inset-0 bg-zinc-100 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
      {/* 내용 */}
      <div className="w-full h-full p-8 relative z-10">
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

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
      <div className="w-52 h-52 rounded-full shadow-lg absolute top-0 left-0" />
      <svg
        width="220"
        height="220"
        viewBox="0 0 220 220"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          overflow: "visible",
          display: isBlurred ? "none" : "block",
        }}
      >
        <circle
          cx={centerX}
          cy={centerY}
          r={radius}
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeOpacity="0.7"
        />
        <path
          id={`textPath-${projectId}`}
          d={`M ${centerX - radius}, ${centerY} A ${radius},${radius} 0 0,1 ${
            centerX + radius
          },${centerY}`}
          fill="none"
          stroke="none"
        />

        <text className="font-pretendard text-black text-sm">
          <textPath
            xlinkHref={`#textPath-${projectId}`}
            startOffset="50%"
            textAnchor="middle"
          >
            {projectTitle} ::: {projectSubTitle}
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default ProjectIcon;

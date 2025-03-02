import React from "react";
import { ProjectIconProps } from "../interfaces/components/ProjectIcon.interface";

const ProjectIcon: React.FC<ProjectIconProps> = ({ projectTitle }) => {
  return (
    <div>
      <p>{projectTitle}</p>
      <p>자세히 보기</p>
    </div>
  );
};

export default ProjectIcon;

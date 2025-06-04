import { projectStatics } from "../../statics/project/project.static";
import { Project } from "../interfaces/components/project/Project.interface";

export const getNormalizedProjects = (): Project[] => {
  return Object.values(projectStatics).map((project) => ({
    id: project.id,
    title: project.title,
    subTitle: project.subTitle,
    type: project.type,
    stack: project.stack || [],
    exp: project.exp || "",
    img: project.img || [],
    function: project.function.map((item: string | string[]) =>
      Array.isArray(item) ? item : [item]
    ),
    character: project.character || [],
    troubleShooting: {
      trouble: project.troubleShooting?.trouble || "",
      shooting: project.troubleShooting?.shooting || "",
      result: project.troubleShooting?.result || "",
    },
    comment: project.comment || "",
  }));
};

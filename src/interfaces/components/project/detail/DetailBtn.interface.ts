import { Project } from "../Project.interface";

export interface DetailBtnProps {
  project: Project;
  openModal: (project: Project) => void;
}

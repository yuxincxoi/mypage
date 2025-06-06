import { Project } from "../Project.interface";

export interface DetailBtnBarProps {
  project: Project;
  openModal: (project: Project) => void;
}

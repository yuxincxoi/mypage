import { Project } from "./Project.interface";

export interface ProjectIconGridProps {
  projects: Project[];
  selectedType: string;
  onProjectClick: (projectId: number) => void;
  sectionRef: React.RefObject<HTMLDivElement>;
  listRef: React.RefObject<HTMLDivElement>;
}

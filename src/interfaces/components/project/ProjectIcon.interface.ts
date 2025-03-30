export interface ProjectIconProps {
  projectTitle: string;
  projectSubTitle: string;
  projectId: number;
  style?: React.CSSProperties;
  onClick?: () => void;
  isBlurred?: boolean;
  projectType: string;
}

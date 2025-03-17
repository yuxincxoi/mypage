export interface ProjectIconProps {
  projectTitle: string;
  projectId: number;
  style?: React.CSSProperties;
  onClick?: () => void;
  isBlurred?: boolean;
  projectType: string;
}

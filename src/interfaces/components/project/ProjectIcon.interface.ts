export interface ProjectIconProps {
  projectTitle: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  isBlurred?: boolean;
  projectType: string;
}

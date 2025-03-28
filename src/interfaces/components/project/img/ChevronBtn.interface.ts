export interface ChevronBtnProps {
  direction: "left" | "right";
  onClick: () => void;
  isHidden: boolean;
  className?: string;
  strokeWidth: number;
}

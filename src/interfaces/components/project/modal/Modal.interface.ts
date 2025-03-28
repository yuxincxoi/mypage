export interface ModalProps {
  images: string[];
  selectedImageIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  comment: string[];
}

export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  alt_description: string | null;
  description: string | null;
}

export interface SelectImg {
  urls: {
    regular: string;
  };
  alt_description?: string | null;
  likes?: number;
}

export interface ImageCardProps {
  readonly cardData: Image;
  readonly isOpen: (imgData: SelectImg) => void;
}

export interface ErrorMessageProps {
  error: unknown;
}

export interface ImageGalleryProps {
  readonly data: Image[];
  readonly isOpen: (imgData: SelectImg) => void;
}

export interface ImageModalProps {
  modal: boolean;
  modalClose: () => void;
  selectedImage: SelectImg;
}

export interface LoadMoreBtnProps {
  onLoadMore: () => void;
}

export interface SearchBarProps {
  onSubmit: (value: string) => void;
}

export interface SearchResponseProps {
  total_pages: number;
  results: Image[];
}

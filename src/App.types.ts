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

import ImageCard from "../ImageCard/ImageCard";
import { ImageGalleryProps } from "../../App.types";
import s from "./ImageGallery.module.scss";

const ImageGallery = ({ data, isOpen }: ImageGalleryProps) => (
  <ul className={s.imageList}>
    {data.map((card) => (
      <ImageCard key={card.id} cardData={card} isOpen={isOpen} />
    ))}
  </ul>
);

export default ImageGallery;

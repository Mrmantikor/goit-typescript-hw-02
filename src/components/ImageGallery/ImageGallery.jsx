import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.scss";

const ImageGallery = ({ data, isOpen }) => {
  return (
    <ul className={s.imageList}>
      {data.map((card) => (
        <ImageCard key={card.id} cardData={card} isOpen={isOpen} />
      ))}
    </ul>
  );
};

export default ImageGallery;

import s from "./ImageCard.module.scss";

const ImageCard = ({ cardData, isOpen }) => {
  return (
    <li className={s.imgCard} onClick={() => isOpen(cardData)}>
      <img
        className={s.img}
        src={cardData.urls.small}
        alt={cardData.alt_description}
      />
    </li>
  );
};

export default ImageCard;

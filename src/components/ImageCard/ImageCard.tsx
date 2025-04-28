import { memo } from "react";
import { ImageCardProps } from "../../App.types";
import s from "./ImageCard.module.scss";

const ImageCard = ({ cardData, isOpen }: ImageCardProps) => (
  <li className={s.imgCard} onClick={() => isOpen(cardData)}>
    <img
      className={s.img}
      src={cardData.urls.small}
      alt={cardData.alt_description ?? "Image"}
    />
  </li>
);

export default memo(ImageCard);

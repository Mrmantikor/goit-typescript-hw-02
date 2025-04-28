import ReactModal from "react-modal";
import { SlLike } from "react-icons/sl";
import { ImageModalProps } from "../../App.types";
import s from "./ImageModal.module.scss";

const ImageModal = ({ modal, modalClose, selectedImage }: ImageModalProps) => {
  const { urls, alt_description, likes } = selectedImage;

  return (
    <ReactModal
      isOpen={modal}
      onRequestClose={modalClose}
      overlayClassName={s.modalBack}
      className={s.modal}
      ariaHideApp={false}
    >
      <img src={urls.regular} alt={alt_description ?? "Image"} />
      <div className={s.text}>
        <p>
          <SlLike className={s.icon} size={24} />
          {likes}
        </p>
        <p>{alt_description}</p>
      </div>
    </ReactModal>
  );
};

export default ImageModal;

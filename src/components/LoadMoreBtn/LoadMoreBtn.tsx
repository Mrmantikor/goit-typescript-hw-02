import { LoadMoreBtnProps } from "../../App.types";
import s from "./LoadMoreBtn.module.scss";
import { FaArrowDown } from "react-icons/fa";

const LoadMoreBtn = ({ onLoadMore }: LoadMoreBtnProps) => (
  <div className={s.loadMoreBtnDiv}>
    <button className={s.btnLoadMore} type="button" onClick={onLoadMore}>
      Load more <FaArrowDown />
    </button>
  </div>
);

export default LoadMoreBtn;

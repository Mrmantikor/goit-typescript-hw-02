import s from "./LoadMoreBtn.module.scss";
import { FaArrowDown } from "react-icons/fa";
const LoadMoreBtn = ({ onLoadMore }) => {
  const handleClick = () => {
    onLoadMore();
  };

  return (
    <div className={s.loadMoreBtnDiv}>
      <button className={s.btnLoadMore} type="button" onClick={handleClick}>
        Load more <FaArrowDown />
      </button>
    </div>
  );
};

export default LoadMoreBtn;

import { ThreeDots } from "react-loader-spinner";
import s from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={s.loader}>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
};

export default Loader;

import { useId } from "react";
import styles from "./SearchBox.module.scss";

const SearchBox = ({ value, onFilter }) => {
  const searchId = useId();

  return (
    <div className={styles["search-box"]}>
      <label className={styles["search-label"]} htmlFor={searchId}>
        Find contacts by name
      </label>
      <input
        onChange={(e) => onFilter(e.target.value)}
        className={styles["search-field"]}
        id={searchId}
        type="search"
        inputMode="search"
        value={value}
      />
    </div>
  );
};

export default SearchBox;

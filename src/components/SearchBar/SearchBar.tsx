import s from "./SearchBar.module.scss";
import toast, { Toaster } from "react-hot-toast";
import { TbSearch } from "react-icons/tb";
import { IconContext } from "react-icons";
import { SearchBarProps } from "../../App.types";

const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const input = form.elements.namedItem("search") as HTMLInputElement;
    const value = input.value.trim();

    value
      ? onSubmit(value)
      : toast.custom(
          <div className={s.toast}>
            You need to enter the text to find images
          </div>
        );

    form.reset();
  };

  return (
    <header className={s.header}>
      <form className={s.searchForm} onSubmit={handleSubmit}>
        <IconContext.Provider
          value={{ color: "#55883B", size: "35", className: "submitIcon" }}
        >
          <button className={s.submitButton} type="submit">
            <TbSearch />
          </button>
        </IconContext.Provider>
        <input
          className={s.formInput}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
      <Toaster containerStyle={{ top: 100 }} />
    </header>
  );
};

export default SearchBar;

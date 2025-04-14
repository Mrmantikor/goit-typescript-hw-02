import s from "./ErrorMessage.module.scss";
const ErrorMessage = ({ error }) => {
  return (
    <div className={s.error}>
      <p>Something went wrong!</p>
      <p>{`${error}`}</p>
    </div>
  );
};

export default ErrorMessage;

import { ErrorMessageProps } from "../../App.types";
import s from "./ErrorMessage.module.scss";

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    <div className={s.error}>
      <p>Something went wrong!</p>
      <p>{String(error)}</p>
    </div>
  );
};

export default ErrorMessage;

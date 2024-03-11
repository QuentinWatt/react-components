import { MouseEventHandler } from "react";
import Loader from "./Loader";
import "./Button.css";

interface Props {
  children: React.ReactNode;
  className?: string;
  loading?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "reset" | "submit";
}

const Button: React.FC<Props> = ({
  children,
  className = "",
  onClick = () => {},
  type = "button",
  loading = false,
}) => {
  return (
    <button className={`button ${className}`} type={type} onClick={onClick}>
      {loading ? <Loader /> : children}
    </button>
  );
};

export default Button;

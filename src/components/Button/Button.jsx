import style from "./Button.module.css";
import clsx from "clsx";

const Button = ({
  selected = false,
  type = "button",
  children,
  ...otherProps
}) => {
  return (
    <button
      className={clsx(style.btn, { [style.selected]: selected })}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;

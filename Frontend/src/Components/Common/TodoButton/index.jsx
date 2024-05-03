import React from "react";
import "./styles.css";
const TodoButton = ({
  children,
  onClick,
  className,
  disabled,
  type,
  id,
  style,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      id={id}
      style={style}
      disabled={disabled}
      className={`todo__btn ${className ? className : ""}`}
    >
      {children}
    </button>
  );
};

export default TodoButton;

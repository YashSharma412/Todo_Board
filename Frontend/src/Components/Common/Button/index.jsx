import React from "react";
import "./styles.css"
const Button = ({
  children,
  text,
  className,
  onClick,
  type,
  id,
  style,
  disabled,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      id={id}
      style={style}
      disabled={disabled}
      className={`btn ${className}`}
    >
      {children}
      {text}
    </button>
  );
};

export default Button;

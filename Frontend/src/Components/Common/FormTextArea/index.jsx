import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import "../FormField/styles.css";
const FormTextArea = ({
  type,
  id,
  placeholder,
  value,
  onChange,
  required = false,
  name,
  isPassword = false,
  labelTxt,
  className,
  style
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={`form__group ${required ? "starlabel" : ""} ${className}`}>
      <textarea
        className={`form__input textArea ${className}`}
        type={isPassword && showPassword ? "text" : type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        name={name}
      />
      <label htmlFor={id} className={`form__label ${className}`}>
        {labelTxt}
      </label>
      {isPassword && (
        <div
          className="password__eye_cont"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <FaEye className={`eye ${className}`} />
          ) : (
            <FaEyeSlash className={`eye ${className}`} />
          )}
        </div>
      )}
    </div>
  );
};

export default FormTextArea;

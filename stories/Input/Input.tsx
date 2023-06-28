import React, {
  ChangeEvent,
  CSSProperties,
  InputHTMLAttributes,
  useState,
} from "react";
import "./Input.scss";
import { validateEmail } from "../../utils/validationUtils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  errorMessage?: string;
  style?: CSSProperties;
  readOnly?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  name?: string;
  label?: string;
  labelRequired?: string;
  strictMode?: boolean;
  dataType?: string;
}

export const Input: React.FC<InputProps> = ({
  onChange,
  style,
  readOnly,
  placeholder,
  disabled,
  name,
  value,
  id,
  label,
  labelRequired,
  error,
  errorMessage,
  strictMode,
  dataType,
  ...props
}) => {
  const [validationError, setValidationError] = useState({
    hasError: false,
    message: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const dataType = event.target.dataset.type;
    console.log(name, value, `dataType - ${dataType}`);

    if (strictMode) {
      if (dataType === "email") {
        let error = validateEmail(value);
        console.log(error, "errror");

        if (error) {
          setValidationError({
            hasError: true,
            message: error,
          });
        } else {
          setValidationError({
            hasError: false,
            message: "",
          });
        }
      }
    } else {
      // Run onChange function
      if (onChange) {
        onChange(event);
      }
    }
  };

  return (
    <>
      {label ? (
        <div className="label">
          <label>
            {label}{" "}
            {labelRequired ? <span style={{ color: "red" }}>*</span> : null}
          </label>
        </div>
      ) : null}
      <input
        className={`input ${
          validationError.hasError || error ? "input-error" : ""
        }`}
        name={name}
        id={id}
        value={value}
        style={style}
        disabled={disabled}
        placeholder={placeholder ? placeholder : "No Placeholder found"}
        onChange={(event) => handleChange(event)}
        readOnly={readOnly}
        {...props}
        data-type={dataType}
      />

      <div className="error">
        {validationError.hasError && validationError.message}
        {error && errorMessage}
      </div>
    </>
  );
};


export default Input;

// className={["input", status].join(" ")}

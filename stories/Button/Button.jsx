import React, { useMemo } from "react";
import PropTypes from "prop-types";
import "./Button.scss";
import "./spinner.css";
import LoadingSpinner from "./spinner";

export const Button = ({
  type = "primary",
  className,
  size = "medium",
  label,
  style,
  loading,
  disabled = false,
  onClick,
  ...props
}) => {
  const buttonType = (type) => {
    switch (type) {
      case "primary":
        return "storybook-button--primary";
      case "secondary":
        return "storybook-button--secondary";
      case "danger":
        return "storybook-button--danger";
      default:
        return "storybook-button--primary";
    }
  };

  const mode = useMemo(() => buttonType(type), [type]);
  return (
    <button
      type="button"
      id="storybook-button"
      className={[
        className ? className : "",
        disabled && type === "primary"
          ? "storybook-button--primary--disabled"
          : disabled && type === "secondary"
          ? "storybook-button--secondary--disabled"
          : disabled && type === "danger"
          ? "storybook-button--danger--disabled"
          : "",
        "storybook-button",
        `storybook-button--${size}`,
        mode,
      ].join(" ")}
      style={style}
      loading={loading ? loading : false}
      {...props}
      disabled={loading === true ? true : disabled}
      onClick={() => onClick()}
    >
      {loading ? (
        <LoadingSpinner
          loading={loading}
          height={
            size === "small" ? "7.5px" : size === "medium" ? "9.5px" : "11.5px"
          }
          width={
            size === "small" ? "7.5px" : size === "medium" ? "9.5px" : "11.5px"
          }
        />
      ) : (
        label
      )}
    </button>
  );
};

// Button.defaultProps = {
//   backgroundColor: null,
//   type: "secondary",
//   size: 'medium',
//   onClick: undefined,
// };

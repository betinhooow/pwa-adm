import React from "react";

const Button = ({ onClick, children, ...rest }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      {...rest}
    >
      { children }
    </button>
  );
};

export default Button;

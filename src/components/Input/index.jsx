import React, { useRef, useEffect } from "react";
import { useField } from "@unform/core";

const Input = ({ name, placeholder, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <div>
      <input
        name={name}
        placeholder={placeholder}
        className="form-control"
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
      {error}
    </div>
  );
};

export default Input;

import React, { forwardRef } from "react";

export interface InputProps extends React.ComponentProps<"input"> {
  children?: React.ReactNode
}

export const Input = (inputProps: InputProps) => (
  <input {...Object.assign({}, inputProps, {
    className: "focus:outline-none border rounded w-full border-gray-800 border-2 p-2"
  })}></input>
);

export const InputWithRef = forwardRef((inputProps, ref) => (
  <Input {...Object.assign({}, {
    className: ""
  }, inputProps)}></Input>
));


export default Input;

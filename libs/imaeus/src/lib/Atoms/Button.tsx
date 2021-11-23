import React, { forwardRef } from "react";

export interface ButtonProps extends React.ComponentProps<"button"> {
  children?: React.ReactNode
}

export const Button = ( props: ButtonProps ) => {
  return <button className="bg-gray-100 text-gray-700" {...props}>{ props.children }</button>
}

export const ButtonWithRef = forwardRef<HTMLButtonElement, ButtonProps>(
  ( props: ButtonProps, ref) => {
    return <button ref={ref} className="bg-gray-100 text-gray-700" {...props}>{ props.children }</button>
  }
);

export default Button

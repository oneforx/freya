import React, { ForwardedRef, forwardRef } from "react"

export interface LabelProps extends React.ComponentProps<"label"> {
  children?: React.ReactNode | null,
  name: string
}

export const Label = (props: LabelProps) => (
  <label {...props}>{props.name}</label>
);

export const LabelWithRef = forwardRef<HTMLLabelElement, LabelProps>(
  (props, ref) => (
    <label ref={ref} {...props}>{props.name}</label>
  )
);

export const LabelMemoised = React.memo( Label );

export const LabelWithRefMemoised = React.memo( LabelWithRef );

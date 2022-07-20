import React, { createElement } from "react";

interface Tw {
  as: string,
  children: React.ReactChild | React.ReactNode
}

export const Tw = ({ as, children, ...props }: Tw) => {
  return createElement(as, props, children);;
}

export default Tw

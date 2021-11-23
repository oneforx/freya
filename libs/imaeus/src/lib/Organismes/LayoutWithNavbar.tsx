import React, { useState } from 'react'
import { Navbar, NavLinkProps,NavlinkDynamic } from "./Navbar";

export const LayoutWithNavbar = ({ children, links }: { children?: React.ReactNode | JSX.Element, links: NavLinkProps[] | NavlinkDynamic[]}) => {
  return (
    <div className="h-full flex flex-col-reverse md:flex-col">
      <Navbar links={links} />
      <div className="flex-1 flex flex-col mb-[52px] md:mb-0 overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default LayoutWithNavbar
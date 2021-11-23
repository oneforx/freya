import React from 'react'

interface LayoutProps {
    children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-full flex flex-col-reverse md:flex-col">
        {children}
    </div>
  );
};

export default Layout
import { createContext, ReactChildren } from 'react';
import './imaeus.css';

/* eslint-disable-next-line */
export interface ImaeusContextProps {
  accessKey?: string,
  children: React.ReactNode | ReactChildren
}
export type IImaeusContextStates = {
}

export const ImaeusContext = createContext<IImaeusContextStates>({});

export function ImaeusContextProvider ({ accessKey, children }: ImaeusContextProps) {
  return (
    <ImaeusContext.Provider value={{ accessKey }}>
      {children}
    </ImaeusContext.Provider>
  );
}

export default ImaeusContext;

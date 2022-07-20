import { React, createContext, ReactChildren } from 'react';
import './freya.css';

/* eslint-disable-next-line */
export interface FreyaContextProps {
  accessKey?: string,
  children: React.ReactNode | ReactChildren
}
export type IFreyaContextStates = {
}

export const FreyaContext = createContext<IFreyaContextStates>({});

export function FreyaContextProvider ({ accessKey, children }: FreyaContextProps) {
  return (
    <FreyaContext.Provider value={{ accessKey }}>
      {children}
    </FreyaContext.Provider>
  );
}

export default FreyaContext;

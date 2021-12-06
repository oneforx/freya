import { HookCallbacks } from "async_hooks";
import { useEffect } from "react";
import { Tw } from "./Tw";

interface IViewProps {
  onMount: () => void,
  onUnMount: () => void,
  children?: React.ReactNode
}

const View = ({ children, onMount, onUnMount }: IViewProps) => {

  useEffect(() => {
    if ( onMount ) onMount();
    return () => {
      if ( onUnMount ) onUnMount();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Tw as="div" >

    </Tw>
  );
}

export default View

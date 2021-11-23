import { useMemo } from "react"

export interface TextAreaProps extends React.ComponentProps<"textarea"> {
  children?: React.ReactNode
}

const TextArea = (props: TextAreaProps) => {
  const newProps = useMemo(() => {
    return { ...props }
  }, [ props ])
  return <textarea {...newProps} />
}

export default TextArea

import { InputProps, LabelProps } from "../Atoms/index"
import InputLabelFragment from "./InputLabelFragment"

export interface InputLabelProps {
  inputProps: InputProps,
  labelProps: LabelProps
}

export const InputLabel = ( props: InputLabelProps ) => {
  return <div className="relative mt-2">
    <InputLabelFragment inputProps={props.inputProps} labelProps={props.labelProps} />
  </div>
}

export default InputLabel
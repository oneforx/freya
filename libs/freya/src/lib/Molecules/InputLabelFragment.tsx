import { Fragment, useEffect, useState } from "react"
import { Label, LabelProps } from "../Atoms/Label";
import { Input, InputProps } from "../Atoms/Input";


// TODO: binds props
const InputLabelFragment = ({ inputProps, labelProps }: { inputProps: InputProps, labelProps: LabelProps }) => {
    return (
        <Fragment>
            <Label {...labelProps} className="absolute bg-white px-2 left-3 top-[-10px] text-sm">
                {labelProps.name}
            </Label>
            <Input {...inputProps} />
        </Fragment>
    );
}

export default InputLabelFragment
import { useEffect, useMemo } from 'react'
import InputLabel from "./InputLabel";
import { InputProps, LabelProps } from '../Atoms';
import InputLabelIcons from './InputLabelIcons';

export type TIcon = {
    className: string,
    onClick?: (ev: any) => void
}

export type TField = {
    labelProps: LabelProps,
    inputProps: InputProps,
    errors: Array<string>,
    onChange?: (ev: any) => void,
    leftIcon?: TIcon
    rightIcon?: TIcon
}

//TODO: Better field props, it have to adapt on the type of the input
export interface FieldProps {
    errors?: Array<string>,
    onChange?: (ev: any) => void,
    name: string,
    type: string,
    placeholder?: string,
    value: string,
    leftIcon: string,
    rightIcon: string,
    inputProps: InputProps,
    labelProps: LabelProps
}

export const Field = (props: TField) => {

    const translatedErrorComponent = useMemo(
        () => <div className="py-1">
            {
                Array.isArray(props.errors) ? props.errors.map((err: string) => {
                    return <p className="text-red-500 pl-2"><i className="fad fa-circle-exclamation mr-2"></i>{err}</p>
                }) : props.errors !== undefined ? <p className="text-red-500 pl-2 py-2"><i className="fad fa-circle-exclamation mr-2"></i>{ props.errors }</p> : null
            }
        </div>,
    [  props.errors ])

    return (
        <div className="mt-2 text-left">
            { props.leftIcon ? <i className={props.leftIcon.className} onClick={props.leftIcon.onClick}></i> : ""}
            <InputLabel inputProps={props.inputProps} labelProps={props.labelProps} />
            { props.leftIcon ? <i className={props.leftIcon.className} onClick={props.leftIcon.onClick}></i> : ""}
            { translatedErrorComponent }
        </div>
    );
}

export default Field

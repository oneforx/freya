import { InputProps, LabelProps } from '../Atoms';
import { TIcon } from './Field'
import InputLabelFragment from './InputLabelFragment';

export type TInputLabelIcons = InputProps & LabelProps & {
    leftIcon: TIcon,
    rightIcon: TIcon
} 

const InputLabelIcons = (props: TInputLabelIcons) => {
    return (
        <div className="relative mt-2">
            { props.leftIcon ? <i className={props.leftIcon.className}></i> : null }
            <InputLabelFragment inputProps={props} labelProps={props} />
            { props.rightIcon ? <i className={props.rightIcon.className}></i> : null }
        </div>
    );
}

export default InputLabelIcons;
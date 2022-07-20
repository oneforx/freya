import { Input, InputProps } from '../Atoms'

export interface InputIconsProps {
    leftIcon: string,
    rightIcon: string,
    inputProps: InputProps
}

const InputIcons = ({ leftIcon, rightIcon, inputProps }: InputIconsProps) => {
    return (
        <div>
            { leftIcon ? <i className={leftIcon}></i> : null }
            <Input {...inputProps} />
            { leftIcon ? <i className={rightIcon}></i> : null }
        </div>
    );
}

export default InputIcons
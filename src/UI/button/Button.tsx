import React, {CSSProperties, FC} from 'react';
import s from './Button.module.css'

interface IButtonProps {
    children: React.ReactNode;
    onClick? (e?: any): void;
    style?: CSSProperties
}

const Button: FC<IButtonProps> = ({children,...props}) => {
    return (
        <button {...props} className={s.button}>
            {children}
        </button>
    );
};

export default Button;
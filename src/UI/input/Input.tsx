import React, {FC} from 'react';
import s from './Input.module.css'


interface IInputProps {
    onChange? (e?: any): void
}

const Input: FC<IInputProps> = (props) => {
    return (
        <input {...props} className={s.myInput}/>
    );
};

export default Input;
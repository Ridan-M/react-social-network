import React, {FC} from 'react';
import {Link} from "react-router-dom";
import s from './navbar.module.css'

const Navbar: FC = () => {
    return (
        <div className={s.wrapper}>
            <Link to='/profile'>Мой профиль</Link>
            <Link to='/users'>Люди</Link>
        </div>
    );
};

export default Navbar;
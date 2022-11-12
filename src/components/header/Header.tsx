import React, {FC} from 'react';
import s from './header.module.css'
import {Link} from "react-router-dom";
import {useAuthActions} from "../../hooks/useAction";
import {useTypedSelector} from "../../hooks/useTypedSelector";

const Header: FC = () => {
    const {isAuth} = useTypedSelector(state => state.auth)
    const {logout} = useAuthActions();

    return (
        <header className={s.header}>
            <div className={s.header__menu}>
                <div className={s.header__menu_item}>
                    {isAuth
                        ? <Link onClick={logout} to='/login'>Выйти</Link>
                        : null
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;
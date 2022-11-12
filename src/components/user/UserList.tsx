import React, {FC, useEffect, useState} from 'react';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useUserActions} from "../../hooks/useAction";
import UserItem from "./UserItem";
import s from './user.module.css'


const UserList: FC = () => {
    const state = useTypedSelector(state => state.user)
    const {fetchUsers, setFollow} = useUserActions();
    const [fetching, setFetching] = useState(true)
    const {page, limit} = state



    useEffect(() => {
        if (fetching && !state.loading) {
            fetchUsers(page, limit)
            setFetching(false)
        }
    }, [page, fetching])


    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])
    const scrollHandler = (event: any) => {
        const scrollHeight = event.target.documentElement.scrollHeight;
        const scrollTop = event.target.documentElement.scrollTop;
        const innerHeight = window.innerHeight;
        if (scrollHeight - (scrollTop + innerHeight) < 100  && scrollTop > 100 ) {
            setFetching(true)
        }
    }

    return (
        <div className={s.user__container}>
            {state.users.length
                ? state.users.map((user) => <UserItem key={user.id} setFollow={setFollow} {...user}/>)
                : <h1>Нет пользователей </h1>
            }
        </div>
    );
};

export default UserList;
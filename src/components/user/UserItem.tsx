import React, {FC} from 'react';
import s from './user.module.css'
import {IuserItem} from "../../type/user";
import userPhoto from "../../image/kane.png";
import Button from "../../UI/button/Button";
import {Link} from "react-router-dom";

interface IUserItems extends IuserItem {
    setFollow(userId: number, followed: boolean): void;
}

const UserItem: FC<IUserItems> = (props) => {
    const {id, name, photos, status, followed, setFollow} = props


    const followBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
        setFollow(id, followed)
    }


    return (

            <div className={s.user__item}>
                <Link to={`/profile/${id}`}>
                    <img className={s.user__photo} src={photos.small ? photos.small : userPhoto} alt="!#"/>
                </Link>
                <div className={s.user__info}>
                    <Link to={`/profile/${id}`} className={s.user__info_name}>{name}</Link>
                    <span className={s.user__info_status}>{status ? status : 'Без Статуса'}</span>
                </div>
                {followed
                    ? <Button style={{borderColor: 'red'}} onClick={followBtn}>Отписаться</Button>
                    : <Button onClick={followBtn}>Подписаться</Button>
                }
            </div>

    );
};

export default UserItem;
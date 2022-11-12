import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useProfileActions} from "../../hooks/useAction";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import s from './profile.module.css'
import Button from "../../UI/button/Button";
import github from "../../image/GitHub_Logo.png";
import userPhoto from "../../image/kane.png";
import Modal from "./profileModal/Modal";


const ProfileContainer = () => {
    const {userId} = useParams()
    const {fetchProfile, setFollow,} = useProfileActions()
    const state = useTypedSelector(state => state.profile)
    const {id} = useTypedSelector(state => state.auth)
    const [showModal, setShowModal] = useState(false)


    useEffect(() => {
        if ((!userId && typeof id === 'number') || Number(userId) ===  id ) {
            fetchProfile(id)
        } else {
            fetchProfile(Number(userId))
        }
    }, [userId])

    const editProfile = () => {
        setShowModal(true)
    }

    return (
        <div className={s.profile__container}>
            {showModal && typeof id === 'number' &&
                <Modal
                    setShowModal={setShowModal}
                    id={id}
                    name={state.fullName}
                    status={state.status ? state.status : ''}
                />}
            <div className={s.user_info__container}>
                <div className={s.user_header__wrapper}>
                    <div className={s.user__links}>
                        {state.contacts.github
                            ? <a href={state.contacts.github}>
                                <img src={github} alt="#!"/>
                            </a>
                            : null
                        }

                    </div>
                    {userId && Number(userId) !==  id
                        ? state.followed
                            ? <Button style={{border: '1px solid red'}}
                                      onClick={() => setFollow(Number(userId), true)}>Отписаться</Button>
                            : <Button onClick={() => setFollow(Number(userId), false)}>Подписаться</Button>
                        : <Button onClick={editProfile}>Редактировать</Button>
                    }
                </div>
                {state.photos.large
                    ? <img src={state.photos.large} alt='' className={s.user__photo}/>
                    : <img src={userPhoto} alt='' className={s.user__photo}/>
                }

                <div className={s.user__info}>
                    <div className={s.user_name__wrapper}>
                        <h2 className={s.user__name}>{state.fullName}</h2>
                        <h4 className={s.user__status}>{state.status}</h4>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProfileContainer;
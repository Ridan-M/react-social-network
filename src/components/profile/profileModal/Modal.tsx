import React, {FC, useState} from 'react';
import s from './modal.module.css';
import {useForm} from "react-hook-form";
import Button from "../../../UI/button/Button";
import {useProfileActions} from "../../../hooks/useAction";

interface IProps {
    status: string;
    id: number;
    name: string;
    setShowModal: any
}

const Modal: FC<IProps> = ({status, id, setShowModal, name,}) => {

        const {setGithub, setStatus, setImage} = useProfileActions()

        const {
            register,
            handleSubmit,
        } = useForm({})

        const [imageURL, setImageURL] = useState<any>()
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            setImageURL(fileReader.result)
        }

        const handleChenge = (e: any) => {
            const file = e.target.files[0]
            fileReader.readAsDataURL(file)

        }
        const onSubmit = (data: any) => {
            if (data.status) setStatus(data.status, id)
            if (data.github) setGithub(data.github, name)
            if (data.file[0]) setImage(data.file[0], id)
            setShowModal(false)
        }

        return (
            <div className={s.modal} onClick={() => setShowModal(false)}>
                <div className={s.modal__content} onClick={e => e.stopPropagation()}>
                    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                        <div className={s.add__photo}>
                            {imageURL && <img src={imageURL} alt=" " className={s.image}/>}
                            <label className={s.add__photo_btn}>
                                <input
                                    {...register('file')}
                                    onChange={handleChenge}
                                    accept="image/*,.png,.jpg"
                                    type='file' className={s.add__photo_input}
                                />
                                Загрузить фотографию
                            </label>
                        </div>
                        <div className={s.text__content}>
                            <label>
                                <div>Ваш статус: {status}</div>
                                <input
                                    placeholder='Изменить статус'
                                    {...register('status')}
                                    type="text" className={s.text__input}
                                />
                            </label>
                            <label>
                                <div>Добавь ссылку на github</div>
                                <input
                                    {...register('github')}
                                    type="text" className={s.text__input}
                                />
                            </label>
                            <Button>Сохранить</Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    };

export default Modal;
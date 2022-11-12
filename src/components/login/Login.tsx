import React, {FC} from 'react';
import s from './login.module.css'
import {useForm} from "react-hook-form";
import {useAuthActions} from "../../hooks/useAction";

const Login: FC = () => {
    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
        reset,
    } = useForm({
        mode: "onBlur"
    })


    const {fetchLogin} = useAuthActions();


    const onSubmit = (data: any) => {
        fetchLogin(data.email, data.password, true)
        reset()
    }

    return (
        <div className={s.wrapper}>

            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={s.form__content}>
                    <input
                        className={s.input}
                        {...register('email',
                            {required: 'Поле Обязательно к заполнению'}
                        )}
                        placeholder='Логин'
                    />
                    <input
                        className={s.input}
                        {...register('password',
                            {required: 'Поле Обязательно к заполнению'}
                        )}
                        placeholder='Пароль'
                    />
                    <input className={s.form__btn} type="submit" value='Вход'/>
                </div>
                <div className={s.prompt}>
                    <h4>Логин: ridan.2892@gmail.com</h4>
                    <h4>Пароль: react123project</h4>

                    {errors?.email && <p className={s.email}>{`${errors?.email?.message}` || 'Error!'}</p>}
                    {errors?.password && <p className={s.error}>{`${errors?.password?.message}` || 'Error!'}</p>}
                </div>
            </form>
        </div>
    );
};

export default Login;
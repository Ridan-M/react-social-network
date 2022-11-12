import {Dispatch} from "redux";
import {apiAuthe} from "../../api/api";
import {authAction, authActionTypes} from "../../type/auth";

export const setAuth = () => {
    return async (dispatch: Dispatch<authAction>) => {
        const response = await apiAuthe.getAuth()
        if (response.data.resultCode === 0) {
            dispatch({
                type: authActionTypes.AUTH,
                payload: {...response.data.data, isAuth: true, loading: false}
            })
        } else {
            await logout()(dispatch)
        }
    }
}

export const fetchLogin = (email: string, password: string, rememberMe: boolean) => {
    return async (dispatch: Dispatch<authAction>) => {
        try {
            dispatch({type: authActionTypes.FETCH_LOGIN})
            const response = await apiAuthe.login(email, password, rememberMe)
            if (response.data.resultCode === 0) {
                await setAuth()(dispatch)
            } else {
                await logout()(dispatch)
            }

        } catch
            (e) {

        }
    }
}

export const logout = () => {
    return async (dispatch: Dispatch<authAction>) => {
        try {
            await apiAuthe.logout()
            dispatch({type: authActionTypes.LOGOUT})
        } catch
            (e) {
            console.log(e)
        }
    }
}

import {authAction, authActionTypes, authState} from "../../type/auth";

const initialState: authState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    loading: true,
}

export const authReducer = (state = initialState, action: authAction): authState => {
    switch (action.type) {
        case authActionTypes.FETCH_LOGIN:
            return {...state, loading: true}
        case authActionTypes.AUTH:
            return {...action.payload}
        case authActionTypes.LOGOUT:
            return {
                id: null,
                email: null,
                login: null,
                isAuth: false,
                loading: false
            }
        default:
            return state
    }
}
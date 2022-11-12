export interface authState {
    id: number | null;
    email: string | null;
    login: string | null;
    isAuth: boolean;
    loading: boolean;
}

export enum authActionTypes {
    AUTH = 'AUTH',
    FETCH_LOGIN = 'FETCH_LOGIN',
    LOGOUT = 'LOGOUT',
}

interface fetchLogin {
    type: authActionTypes.FETCH_LOGIN
}
interface isAuthAction {
    type: authActionTypes.AUTH;
    payload: authState;
}

interface LogoutAction {
    type: authActionTypes.LOGOUT;
}

export type authAction = isAuthAction | LogoutAction | fetchLogin;

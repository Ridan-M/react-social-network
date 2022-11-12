
export interface IuserItem {
    name: string;
    id: number;
    photos: {
        small: string | null;
        large: string | null;
    };
    status: null | string;
    followed: boolean;
}
export interface IuserState {
    users: IuserItem[];
    loading: boolean;
    error: null | string;
    limit: number;
    page: number;
    totalCount: null | number
}
export enum userActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
    SET_USERS_PAGE = 'SET_USERS_PAGE',
    FOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS',
}

interface fetchUserAction {
    type: userActionTypes.FETCH_USERS
}interface fetchUserSeccessAction {
    type: userActionTypes.FETCH_USERS_SUCCESS;
    payload: {
        users: IuserItem[],
        totalCount: number
    };
}interface fetchUserErrorAction {
    type: userActionTypes.FETCH_USERS_ERROR;
    payload: string;
}interface setUserPage {
    type: userActionTypes.SET_USERS_PAGE;
    payload: number;
}

interface setFollow {
    type: userActionTypes.FOLLOW_USER_SUCCESS;
    payload: {
        userId: number;
        followed: boolean;
    };
}

export type userAction = fetchUserAction | fetchUserSeccessAction | fetchUserErrorAction | setUserPage | setFollow ;





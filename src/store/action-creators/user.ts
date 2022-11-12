import {Dispatch} from "redux";
import {userAction, userActionTypes} from "../../type/user";
import {apiUser} from "../../api/api";
import {requestFollow} from "../../utils/followRequest";


export const fetchUsers = (page: number, limit: number) => {
    return async (dispatch: Dispatch<userAction>) => {
        try {
            dispatch({type: userActionTypes.FETCH_USERS})
            const response = await apiUser.getUser(page, limit)
            dispatch(setPage((page + 1)))
            dispatch({
                type: userActionTypes.FETCH_USERS_SUCCESS,
                payload: {users: response.data.items, totalCount: response.data.totalCount}
            })
        } catch
            (e) {
            dispatch({type: userActionTypes.FETCH_USERS_ERROR, payload: 'Произошла ошибка при загрузке списка дел'})
        }
    }
}

const setPage = (page: number): userAction => {
    return {type: userActionTypes.SET_USERS_PAGE, payload: page}
}


export const setFollow = (userId: number, followed: boolean) => {
    return async (dispatch: Dispatch<userAction>) => {
        const response = await requestFollow(userId, followed)
        dispatch({type: userActionTypes.FOLLOW_USER_SUCCESS, payload: {userId: userId, followed: response}})
    }
}




import {Dispatch} from "redux";
import {apiProfile} from "../../api/api";
import {profileAction, profileActionTypes} from "../../type/profile";
import {requestFollow} from "../../utils/followRequest";

const getStatus = async (userId: number, dispatch: Dispatch<profileAction>) => {
    const responseStatus = await apiProfile.getStatus(userId)
    dispatch({
        type: profileActionTypes.SET_STATUS,
        payload: responseStatus.data
    })
}

const getFollow = async (userId: number, dispatch: Dispatch<profileAction>) => {
    const responseFollowed = await apiProfile.getFollow(userId)
    dispatch({
        type: profileActionTypes.SET_FOLLOW,
        payload: responseFollowed.data
    })
}

export const fetchProfile = (userId: number) => {
    return async (dispatch: Dispatch<profileAction>) => {
        try {
            dispatch({type: profileActionTypes.FETCH_PROFILE})
            const response = await apiProfile.getProfile(userId)
            dispatch({
                type: profileActionTypes.FETCH_PROFILE_SUCCESS,
                payload: response.data
            })
            await getFollow(userId, dispatch)
            await getStatus(userId, dispatch)
        } catch
            (e) {
            console.log(e)
            dispatch({type: profileActionTypes.PROFILE_ERROR, payload: 'Произошла ошибка при загрузке профиля'})
        }
    }
}

export const setStatus = (status: string, userId: number) => {
    return async (dispatch: Dispatch<profileAction>) => {
        try {
            await apiProfile.setStatus(status)
            await getStatus(userId, dispatch)
        } catch (e) {
            dispatch({type: profileActionTypes.PROFILE_ERROR, payload: 'Произошла ошибка при загрузке статуса'})
        }
    }
}

export const setFollow = (userId: number, followed: boolean) => {
    return async (dispatch: Dispatch<profileAction>) => {
        const response = await requestFollow(userId, followed)
        dispatch({type: profileActionTypes.SET_FOLLOW, payload: response})

    }
}

export const setGithub = (github: string, name: string) => {
    return async (dispatch: Dispatch<profileAction>) => {
        const response = await apiProfile.setGithub(github, name)
        if (response.data.resultCode === 0) {
            dispatch({type: profileActionTypes.SET_GITHUB, payload: response.data.data})
        }
    }
}

export const setImage = (image: any, id: number) => {
    return async (dispatch: Dispatch<profileAction>) => {
        const response = await apiProfile.setImage(image)
        console.log(response)
        if (response.data.resultCode === 0) {
            await fetchProfile(id)(dispatch)
        }
    }
}
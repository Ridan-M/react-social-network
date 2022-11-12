import {IProfilerState, profileAction, profileActionTypes} from "../../type/profile";

const initialState: IProfilerState = {
    userId: null,
    fullName: '',
    status: null,
    lookingForAJob: false,
    lookingForAJobDescription: '',
    contacts: {},
    photos: {},
    followed: false,
    loading: false,
    error: null,
}
export const profileReducer = (state = initialState, action: profileAction): IProfilerState => {
    switch (action.type) {
        case profileActionTypes.FETCH_PROFILE:
            return {...state, loading: true}
        case profileActionTypes.FETCH_PROFILE_SUCCESS:
            return {...state, loading: false, ...action.payload}
        case profileActionTypes.PROFILE_ERROR:
            return {...state, loading: false, error: action.payload}
        case profileActionTypes.SET_STATUS:
            return {...state, status: action.payload}
        case profileActionTypes.SET_FOLLOW:
            return {...state, followed: action.payload}
        case profileActionTypes.SET_GITHUB:
            return {...state, contacts: {...state.contacts, github: action.payload}}
        default:
            return state
    }
}
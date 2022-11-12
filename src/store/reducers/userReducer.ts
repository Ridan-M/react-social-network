import {IuserState, userAction, userActionTypes} from "../../type/user";

const initialState: IuserState = {
    users: [],
    loading: false,
    error: null,
    limit: 10,
    page: 1,
    totalCount: null,
}

export const UserReducer = (state = initialState, action : userAction): IuserState => {
    switch (action.type) {
        case userActionTypes.FETCH_USERS:
            return {...state, loading: true}
        case userActionTypes.FETCH_USERS_SUCCESS:
            return {...state, loading: false, users: [...state.users, ...action.payload.users] , totalCount: action.payload.totalCount}
        case userActionTypes.FETCH_USERS_ERROR:
            return {...state, loading: false, error: action.payload}
        case userActionTypes.SET_USERS_PAGE:
            return {...state, page: action.payload}
        case userActionTypes.FOLLOW_USER_SUCCESS:
            return {...state, users: state.users.map((user) => {
                 if(user.id === action.payload.userId) {
                     return {...user, followed: action.payload.followed}
                 } else return user
            })}
        default:
            return state
    }
}
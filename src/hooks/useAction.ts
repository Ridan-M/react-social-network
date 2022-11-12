import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as UsersActionCreators from "../store/action-creators/user"
import * as ProfileActionCreators from  "../store/action-creators/profile"
import * as AuthActionCreators from "../store/action-creators/auth"

export const userActions = {
    ...UsersActionCreators,
}
export const profileActions = {
    ...ProfileActionCreators,
}
export const authActions = {
    ...AuthActionCreators,
}

export const useUserActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(userActions, dispatch)
}
export const useProfileActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(profileActions, dispatch)
}
export const useAuthActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(authActions, dispatch)
}
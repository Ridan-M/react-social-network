import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {UserReducer} from "./reducers/userReducer";
import {profileReducer} from "./reducers/profileReducer";
import {authReducer} from "./reducers/authReducer";


export const rootReducer = combineReducers({
    user: UserReducer,
    profile: profileReducer,
    auth: authReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
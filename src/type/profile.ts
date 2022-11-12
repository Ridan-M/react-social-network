export interface IProfilerState {
    userId: number | null;
    fullName: string;
    status?: null | string;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    contacts: {
        github?: string
    };
    photos: {
        small?: string;
        large?: string;
    };
    followed: boolean;
    loading?: boolean;
    error?: null | string;

}

export enum profileActionTypes {
    FETCH_PROFILE = 'FETCH_PROFILE',
    FETCH_PROFILE_SUCCESS = 'FETCH_PROFILE_SUCCESS',
    PROFILE_ERROR = 'PROFILE_ERROR',
    SET_STATUS = 'SET_STATUS',
    SET_FOLLOW = 'SET_FOLLOW',
    SET_GITHUB = 'SET_GITHUB',
}

interface fetchProfileAction {
    type: profileActionTypes.FETCH_PROFILE
}

interface fetchProfileSuccessAction {
    type: profileActionTypes.FETCH_PROFILE_SUCCESS;
    payload: IProfilerState;
}

interface fetchProfileErrorAction {
    type: profileActionTypes.PROFILE_ERROR;
    payload: string;
}

interface setUserStatus {
    type: profileActionTypes.SET_STATUS;
    payload: string;
}

interface setFollow {
    type: profileActionTypes.SET_FOLLOW;
    payload: boolean;
}

interface setGithub {
    type: profileActionTypes.SET_GITHUB;
    payload: string;
}


export type profileAction = fetchProfileAction
    | fetchProfileSuccessAction
    | fetchProfileErrorAction
    | setUserStatus
    | setFollow
    | setGithub;

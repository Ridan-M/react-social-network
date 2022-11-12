import {apiUser} from "../api/api";

export const requestFollow = async (userId: number, followed: boolean): Promise<any> => {
    if (followed) {
        await apiUser.apiUnfollow(userId)
        return false

    } else {
        await apiUser.apiFollow(userId)
        return true
    }
}
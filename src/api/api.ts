import axios from "axios";
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": "200febe3-c7f6-487a-88e7-282c51b13de8"}
})

export const apiUser = {
    getUser(page: number, limit: number) {
        return instance.get('users', {
            params: {
                limit: limit,
                page: page
            }
        })
    },
    apiFollow(userId: number) {
        return instance.post(`follow/${userId}`)
    },
    apiUnfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    },
}

export const apiProfile = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
    },
    getStatus(userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    setStatus(status: string) {
        return instance.put(`profile/status`, {status})
    },
    getFollow(userId: number) {
        return instance.get(`follow/${userId}`)
    },
    setGithub(github: string, name: string) {
        return instance.put('profile',
            {
                AboutMe: 'React',
                lookingForAJob: true,
                lookingForAJobDescription: 'React',
                fullName: name,
                contacts: {
                    github: github,
                }
            })
    },
    setImage(image: any) {
        const formData = new FormData()
        formData.append('image', image)
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

export const apiAuthe = {
    getAuth() {
        return instance.get('auth/me')
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post('auth/login', {
            email: email,
            password: password,
            rememberMe: rememberMe,
        })
    },
    logout() {
        return instance.delete('auth/login')
    },
}
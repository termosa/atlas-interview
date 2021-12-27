import api from '../api'

export function loadCurrentUser(): Promise<Response> {
    return api<Response>({ method: 'GET', path: '/auth/me' })
}

export type CurrentUser = {
    id: number
    username: string
    password: string
}

export type Response = CurrentUser

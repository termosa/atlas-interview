import api from "../api";

export function loadUsers(): Promise<Response> {
    return api<Response>({ method: 'GET', path: '/auth/users' })
}

export type User = {
    id: number
    username: string
    password: string
}

export type Response = Array<User>

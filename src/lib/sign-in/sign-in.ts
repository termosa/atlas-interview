import api from '../api'

export function signIn(username: string, password: string): Promise<Response> {
    const body = new FormData()
    body.append('username', username)
    body.append('password', password)
    return api<Response, FormData>({ method: 'POST', path: '/auth/login', body })
}

export type Response = {
    ok: boolean
}

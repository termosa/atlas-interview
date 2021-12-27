import api from "../api"

export function loadChats(): Promise<Response> {
    return api<Response>({ method: 'GET', path: '/chat/list' })
}

export type Chat = {
    id: number
    from_user_id: number
    to_user_id: number
    message: string
}

export type Response = Array<Chat>

import api from "../api"

export function loadChats(): Promise<Response> {
    return new Promise(resolve => setTimeout(resolve, 1e3, [{
        id: 1,
        from_user_id: 1,
        to_user_id: 2,
        message: 'Last message'
    }, {
        id: 2,
        from_user_id: 1,
        to_user_id: 3,
        message: 'Last message to the user #3'
    }]))
    // return api<Response>({ method: 'GET', path: '/chat/list' })
}

export type Chat = {
    id: number
    from_user_id: number
    to_user_id: number
    message: string
}

export type Response = Array<Chat>

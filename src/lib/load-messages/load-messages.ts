import api from '../api'

export function loadMessages(participantId: number): Promise<Response> {
    return api<Response>({ method: 'GET', path: '/chat/list' }).then((messages) =>
        messages.filter((message) => message.from_user_id === participantId || message.to_user_id === participantId)
    )
}

export type Message = {
    id: number
    from_user_id: number
    to_user_id: number
    message: string
}

export type Response = Array<Message>

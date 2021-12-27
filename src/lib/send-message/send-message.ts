import api from "../api";

export function sendMessage(to_user_id: number, message: string): Promise<void> {
    const query = { to_user_id, message }
    return api<void>({ method: 'POST', path: '/chat/create', query })
}

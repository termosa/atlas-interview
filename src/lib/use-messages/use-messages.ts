import useWebsocket from 'react-use-websocket'
import { useState, useCallback } from 'react'
import useDefer from 'use-defer'
import loadMessages from '../load-messages'

export function useMessages(userId: number) {
    const loadMessagesRequest = useDefer(() => loadMessages(userId), [userId], [])
    // const { sendMessage, lastMessage, readyState } = useWebsocket(`http://127.0.0.1:8000/ws/${userId}`)
}

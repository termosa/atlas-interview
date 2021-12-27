import React, { useCallback, useEffect } from 'react'
import styled from 'styled-components'
import useDefer, { Status } from 'use-defer'
import ConversationForm from '../conversation-form'
import ConversationMessage from '../conversation-message'
import loadMessages from '../load-messages'
import sendMessage from '../send-message'

function Conversation({ userId, className, style }: ConversationProps): React.ReactElement {
    const sendMessageRequest = useDefer(sendMessage, [])

    const submitHandler = useCallback((text: string) => sendMessageRequest.execute(userId, text), [])

    const loadMessagesRequest = useDefer(() => loadMessages(userId), [userId], [])

    useEffect(() => {
        if (sendMessageRequest.status === Status.SUCCESS) loadMessagesRequest.execute()
    }, [sendMessageRequest.status])

    return (
        <Wrapper className={className} style={style}>
            <Messages>
                {loadMessagesRequest.value?.map((message) => (
                    <ConversationMessage key={message.id} message={message} />
                ))}
            </Messages>
            <MessageForm onSubmit={submitHandler} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 2em;
    height: 100%;
    box-sizing: border-box;
    position: relative;
`

const Messages = styled.div`
    padding-bottom: 90px;
`

const MessageForm = styled(ConversationForm)`
    position: absolute;
    background: lightblue;
    bottom: 0;
    left: 0;
    right: 0;
    height: 90px;
    box-sizing: border-box;
`

export type ConversationProps = {
    userId: number
    className?: string
    style?: React.CSSProperties
}

export default React.memo(Conversation)

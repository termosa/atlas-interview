import React from 'react'
import styled, { css } from 'styled-components'
import useDefer from 'use-defer'
import loadCurrentUser from '../load-current-user'
import { Message } from '../load-messages'
import UserId from '../user-id'

function ConversationMessage({ message, className, style }: ConversationMessageProps): React.ReactElement {
    const currentUserRequest = useDefer(loadCurrentUser, [], [])
    return (
        <Wrapper className={className} style={style} right={message.from_user_id === currentUserRequest.value?.id}>
            <UserId id={message.from_user_id} />
            <Text>{message.message}</Text>
        </Wrapper>
    )
}

const Wrapper = styled.div<{ right: boolean }>`
    background: lightblue;
    margin: 1em;
    padding: 1em;
    border-radius: 8px;
    text-align: left;
    display: flex;
    align-items: center;

    ${(p) =>
        p.right
            ? css`
                  margin-left: 30%;
              `
            : css`
                  margin-right: 30%;
              `}
`

const Text = styled.p`
    margin: 0 0 0 1em;
`

export type ConversationMessageProps = {
    message: Message
    className?: string
    style?: React.CSSProperties
}

export default React.memo(ConversationMessage)

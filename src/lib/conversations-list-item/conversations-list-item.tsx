import React from 'react'
import styled from 'styled-components'
import { Chat } from '../load-chats'

function ConversationsListItem({ chat, onClick, className, style }: ConversationsListItemProps): React.ReactElement {
    return (
        <Wrapper className={className} style={style} tabIndex={0} onClick={onClick}>
            <div>
                <ChatId>{chat.id}</ChatId>
            </div>
            <LastMessage>{chat.message}</LastMessage>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background: #fff;
    margin: 1em;
    padding: 2em;
    display: flex;
    align-items: center;
    box-shadow: 0px 0px 3px grey;
    transition: box-shadow 0.2s ease;

    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 3px grey;
    }
`

const ChatId = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: gold;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
`

const LastMessage = styled.div`
    font-size: 18px;
    margin-left: 2em;
`

export type ConversationsListItemProps = {
    chat: Chat
    onClick?: ClickHandler
    className?: string
    style?: React.CSSProperties
}

export interface ClickHandler {
    (): void
}

export default React.memo(ConversationsListItem)

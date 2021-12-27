import React from 'react'
import styled from 'styled-components'
import ConversationsListItem from '../conversations-list-item'
import CreateNewChatButton from '../create-new-chat-button'
import { Chat } from '../load-chats'

export type { Chat } from '../load-chats'

function ConversationsList({ chats, className, style, onSelectChat }: ConversationsListProps): React.ReactElement {
    return (
        <Wrapper className={className} style={style}>
            <CreateButton />
            {!chats && <p>Empty list</p>}
            {chats?.map((chat) => (
                <ListItem key={chat.id} chat={chat} onClick={() => onSelectChat?.(chat)} />
            ))}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    overflow: auto;
    background: lightgray;
`

const ListItem = styled(ConversationsListItem)`
    margin: 1em;
`

const CreateButton = styled(CreateNewChatButton)`
    margin: 1em;
`

export type ConversationsListProps = {
    chats?: Array<Chat>
    onSelectChat?: SelectChatHandler
    className?: string
    style?: React.CSSProperties
}

export interface SelectChatHandler {
    (chat: Chat): void
}

export default React.memo(ConversationsList)

import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import useDefer, { Status } from 'use-defer'
import Conversation from '../conversation'
import ConversationsList, { Chat as ChatType, SelectChatHandler } from '../conversations-list'
import EmptyConversation from '../empty-conversation'
import loadChats from '../load-chats'
import LoadingScreen from '../loading-screen'

function Chat({ className, style }: ChatProps): React.ReactElement {
    const [selectedChat, setSelectedChat] = useState<ChatType | undefined>()
    const selectChatHandler = useCallback<SelectChatHandler>(setSelectedChat, [])

    const chatsRequest = useDefer(loadChats, [], [])

    if (chatsRequest.status === Status.PENDING) return <LoadingScreen />

    console.log({ selectedChat })

    return (
        <Container className={className} style={style}>
            <ConversationsListColumn>
                <ConversationsList chats={chatsRequest.value || []} onSelectChat={selectChatHandler} />
            </ConversationsListColumn>
            <ConversationColumn>
                {selectedChat ? <Conversation chatId={selectedChat.id} /> : <EmptyConversation />}
            </ConversationColumn>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
`

const ConversationsListColumn = styled.aside`
    width: 350px;
`

const ConversationColumn = styled.main`
    flex: 1 0 auto;
`

export type ChatProps = {
    className?: string
    style?: React.CSSProperties
}

export default React.memo(Chat)

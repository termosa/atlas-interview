import React, { useCallback } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import styled from 'styled-components'
import useDefer, { Status } from 'use-defer'
import Conversation from '../conversation'
import EmptyConversation from '../empty-conversation'
import loadUsers from '../load-users'
import LoadingScreen from '../loading-screen'
import UsersList, { SelectUserHandler } from '../users-list'

function Chat({ className, style }: ChatProps): React.ReactElement {
    const history = useHistory()
    const userId = +(useParams() as unknown as { userId: number }).userId
    const selectUserHandler = useCallback<SelectUserHandler>((user) => history.push(`/chat/${user.id}`), [])

    const usersRequest = useDefer(loadUsers, [], [])

    if (usersRequest.status === Status.PENDING) return <LoadingScreen />

    return (
        <Container className={className} style={style}>
            <ConversationsListColumn>
                <UsersSelector users={usersRequest.value || []} onSelectUser={selectUserHandler} />
                <UsersMobileSelector onChange={(e) => history.push(`/chat/${e.target.value}`)}>
                    {!userId && <option>Choose participant to chat</option>}
                    {usersRequest.value?.map((user) => (
                        <option key={user.id} value={user.id}>
                            {user.username}
                        </option>
                    ))}
                </UsersMobileSelector>
            </ConversationsListColumn>
            <ConversationColumn>{userId ? <Conversation userId={userId} /> : <EmptyConversation />}</ConversationColumn>
        </Container>
    )
}

const ConversationsListColumn = styled.aside``

const ConversationColumn = styled.main`
    flex: 1 0 auto;
`

const UsersSelector = styled(UsersList)``

const UsersMobileSelector = styled.select`
    width: 100%;
    padding: 1em;
`

const Container = styled.div`
    display: flex;

    ${ConversationsListColumn} {
        width: 350px;
    }

    @media (min-width: 761px) {
        ${UsersMobileSelector} {
            display: none;
        }
    }

    @media (max-width: 760px) {
        flex-direction: column;

        ${ConversationsListColumn} {
            width: 100%;
        }

        ${UsersSelector} {
            display: none;
        }
    }
`

export type ChatProps = {
    className?: string
    style?: React.CSSProperties
}

export default React.memo(Chat)

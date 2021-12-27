import React from 'react'
import styled from 'styled-components'
import UsersListItem from '../users-list-item'
import { User } from '../load-users'

export type { User } from '../load-users'

function UsersList({ users, className, style, onSelectUser }: UsersListProps): React.ReactElement {
    return (
        <Wrapper className={className} style={style}>
            {!users && <p>Empty list</p>}
            {users?.map((user) => (
                <ListItem key={user.id} user={user} onClick={() => onSelectUser?.(user)} />
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

const ListItem = styled(UsersListItem)`
    margin: 1em;
`

export type UsersListProps = {
    users?: Array<User>
    onSelectUser?: SelectUserHandler
    className?: string
    style?: React.CSSProperties
}

export interface SelectUserHandler {
    (user: User): void
}

export default React.memo(UsersList)

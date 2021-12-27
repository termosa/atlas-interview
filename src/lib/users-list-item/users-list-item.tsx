import React from 'react'
import styled from 'styled-components'
import { User } from '../load-users'
import UserId from '../user-id'

function UsersListItem({ user, onClick, className, style }: UsersListItemProps): React.ReactElement {
    return (
        <Wrapper className={className} style={style} tabIndex={0} onClick={onClick}>
            <UserId id={user.id} />
            <LastMessage>{user.username}</LastMessage>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background: #fff;
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

const LastMessage = styled.div`
    font-size: 18px;
    margin-left: 2em;
`

export type UsersListItemProps = {
    user: User
    onClick?: ClickHandler
    className?: string
    style?: React.CSSProperties
}

export interface ClickHandler {
    (): void
}

export default React.memo(UsersListItem)

import React from 'react'
import styled from 'styled-components'

function UserId({ id, className, style }: UserIdProps): React.ReactElement {
    return (
        <span className={className} style={style}>
            <Id>{id}</Id>
        </span>
    )
}

const Id = styled.div`
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: gold;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
`

export type UserIdProps = {
    id: number
    className?: string
    style?: React.CSSProperties
}

export default React.memo(UserId)

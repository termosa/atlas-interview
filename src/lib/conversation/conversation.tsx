import React from 'react'
import styled from 'styled-components'

function Conversation({ chatId, className, style }: ConversationProps): React.ReactElement {
    return (
        <Wrapper className={className} style={style}>
            Chat #{chatId}
        </Wrapper>
    )
}

const Wrapper = styled.div`
    text-align: center;
    background: pink;
    padding: 2em;
`

export type ConversationProps = {
    chatId: number
    className?: string
    style?: React.CSSProperties
}

export default React.memo(Conversation)

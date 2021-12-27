import React from 'react'
import styled from 'styled-components'
import Chat from '../chat'

function ChatPage({ className, style }: ChatPageProps): React.ReactElement {
    return <FullScreenChat className={className} style={style} />
}

const FullScreenChat = styled(Chat)`
    height: 100vh;
    width: 100vw;
`

export type ChatPageProps = {
    className?: string
    style?: React.CSSProperties
}

export default React.memo(ChatPage)

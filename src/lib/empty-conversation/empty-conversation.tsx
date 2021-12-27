import React from 'react'
import CenteredLayout from '../centered-layout'

function EmptyConversation({ className, style }: EmptyConversationProps): React.ReactElement {
    return (
        <CenteredLayout className={className} style={style}>
            <h1>Choose a chat</h1>
        </CenteredLayout>
    )
}

export type EmptyConversationProps = {
    className?: string
    style?: React.CSSProperties
}

export default React.memo(EmptyConversation)

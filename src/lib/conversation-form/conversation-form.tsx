import React, { useCallback, useRef } from 'react'
import styled from 'styled-components'
import useDefer, { Status } from 'use-defer'

function ConversationForm({ onSubmit, className, style }: ConversationFormProps): React.ReactElement {
    const messageInputRef = useRef<HTMLInputElement>(null)

    const submitRequest = useDefer(onSubmit, [])

    const SubmitHandler = useCallback<React.FormEventHandler<HTMLFormElement>>((event) => {
        event.preventDefault()
        if (!messageInputRef.current) return
        onSubmit(messageInputRef.current.value)
        messageInputRef.current.value = ''
    }, [])

    return (
        <Form onSubmit={SubmitHandler} className={className} style={style}>
            <TextInput ref={messageInputRef} />
            <SendButton type="submit" value="Send" disabled={submitRequest.status === Status.PENDING} />
        </Form>
    )
}

const Form = styled.form`
    background: pink;
    padding: 2em;
    display: flex;
`

const TextInput = styled.input`
    flex: 1 0 auto;
    margin-right: 1em;
`

const SendButton = styled.input``

export type ConversationFormProps = {
    onSubmit: SubmitMessageHandler
    className?: string
    style?: React.CSSProperties
}

export interface SubmitMessageHandler {
    (text: string): Promise<unknown>
}

export default React.memo(ConversationForm)

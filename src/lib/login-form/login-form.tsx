import React, { useCallback, useEffect, useRef } from 'react'
import styled from 'styled-components'
import useDefer, { Status } from 'use-defer'
import signIn from '../sign-in'

function LoginForm({ className, style, onSignIn, onSignInFailure }: LoginFormProps): React.ReactElement {
    const usernameInputRef = useRef<HTMLInputElement>(null)
    const passwordInputRef = useRef<HTMLInputElement>(null)

    const signInRequest = useDefer(signIn, [])

    const handleSubmit = useCallback<React.FormEventHandler<HTMLFormElement>>((event) => {
        event.preventDefault()
        if (!usernameInputRef.current) return
        if (!passwordInputRef.current) return
        signInRequest.execute(usernameInputRef.current.value, passwordInputRef.current.value)
    }, [])

    useEffect(() => {
        if (onSignIn && signInRequest.status === Status.SUCCESS) onSignIn()
        if (onSignInFailure && signInRequest.status === Status.ERROR) onSignInFailure()
    }, [signInRequest.status])

    return (
        <Form className={className} style={style} onSubmit={handleSubmit}>
            <strong>Sign In</strong>
            <Field>
                <span>Username</span>
                <input type="text" required ref={usernameInputRef} />
            </Field>
            <Field>
                <span>Password</span>
                <input type="password" required ref={passwordInputRef} />
            </Field>
            {signInRequest.status === Status.ERROR && <Error>{signInRequest.error?.detail || 'Failed to login'}</Error>}
            <input type="submit" value="Enter" disabled={signInRequest.status === Status.PENDING} />
        </Form>
    )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Field = styled.label`
    display: flex;
    flex-direction: column;
    margin: 0.4em 0;
`

const Error = styled.p`
    color: red;
    width: 100%;
    margin: 0.4em 0;
`

export interface SignInCallback {
    (): void
}

export interface SignInFailureCallback {
    (): void
}

export type LoginFormProps = {
    className?: string
    style?: React.CSSProperties
    onSignIn?: SignInCallback
    onSignInFailure?: SignInFailureCallback
}

export default React.memo(LoginForm)

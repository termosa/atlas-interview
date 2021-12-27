import React from 'react'
import { useHistory } from 'react-router-dom'
import CenteredLayout from '../centered-layout'
import LoginForm from '../login-form'

function LoginPage({ className, style }: LoginPageProps): React.ReactElement {
    const history = useHistory()
    return (
        <CenteredLayout className={className} style={style}>
            <LoginForm onSignIn={() => history.push('/chat')} />
        </CenteredLayout>
    )
}

export type LoginPageProps = {
    className?: string
    style?: React.CSSProperties
}

export default React.memo(LoginPage)

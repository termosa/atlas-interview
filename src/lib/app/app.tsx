import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginPage from '../login-page'
import NotFoundPage from '../not-found-page'
import ChatPage from '../chat-page'

function App({ className, style }: AppProps): React.ReactElement {
    return (
        <AppContainer className={className} style={style}>
            <Router>
                <Switch>
                    <Route exact path="/" component={LoginPage} />
                    <Route path="/chat/:userId?" component={ChatPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </Router>
        </AppContainer>
    )
}

const AppContainer = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, “Segoe UI”, Roboto, Helvetica, Arial, sans-serif;
    font-size: 16px;
    overflow: auto;
    position: relative;
    min-height: 100vh;
`

export type AppProps = {
    className?: string
    style?: React.CSSProperties
}

export default React.memo(App)

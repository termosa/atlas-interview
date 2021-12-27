import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function NotFoundPage({ className, style }: NotFoundPageProps): React.ReactElement {
    return (
        <Layout className={className} style={style}>
            <h1>404 Page not found</h1>
            <h2>
                <Link to="/">Return to home</Link>
            </h2>
        </Layout>
    )
}

const Layout = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export type NotFoundPageProps = {
    className?: string
    style?: React.CSSProperties
}

export default React.memo(NotFoundPage)

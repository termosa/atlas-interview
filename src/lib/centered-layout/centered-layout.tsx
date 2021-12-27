import React from 'react'
import styled from 'styled-components'

function CenteredLayout({ children, className, style, direction = 'column' }: CenteredLayoutProps): React.ReactElement {
    return (
        <Layout className={className} style={style} direction={direction}>
            {children}
        </Layout>
    )
}

const Layout = styled.div<{ direction: 'column' | 'row' }>`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: ${(p) => p.direction};
    justify-content: center;
    align-items: center;
`

export type CenteredLayoutProps = {
    children: React.ReactNode
    className?: string
    style?: React.CSSProperties
    direction?: 'column' | 'row'
}

export default React.memo(CenteredLayout)

import React from 'react'
import styled from 'styled-components'
import CenteredLayout from '../centered-layout'

function LoadingScreen({ className, style }: LoadingScreenProps): React.ReactElement {
    return (
        <Wrapper className={className} style={style}>
            <CenteredLayout>Loading...</CenteredLayout>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    font-size: 30px;
    background: rgba(255, 255, 255, 0.6);
`

export type LoadingScreenProps = {
    className?: string
    style?: React.CSSProperties
}

export default React.memo(LoadingScreen)

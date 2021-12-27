import React from 'react'
import ResetStyles from '../reset-styles'
import App from '../app'

function Root({ mountPointSelector, className, style }: RootProps): React.ReactElement {
    return (
        <>
            <ResetStyles mountPointSelector={mountPointSelector} />
            <App className={className} style={style} />
        </>
    )
}

export type RootProps = {
    mountPointSelector: string
    className?: string
    style?: React.CSSProperties
}

export default React.memo(Root)

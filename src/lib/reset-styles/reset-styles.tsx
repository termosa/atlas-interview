import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const ResetStyles = createGlobalStyle<ResetStylesProps>`
    ${normalize}

    ${p => p.mountPointSelector} {
        min-height: 100vh;
        min-width: 100vw;
    }
`

export type ResetStylesProps = {
    mountPointSelector: string;
}

export default React.memo(ResetStyles)

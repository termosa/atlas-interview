import React from 'react'
import { render } from '@testing-library/react'
import UserId from '.'

describe('<UserId>', () => {
    it('should render with the correct text', () => {
        const { getByText } = render(<UserId>Component content</UserId>)
        const rendered = getByText('Component content')
        expect(rendered).toBeTruthy()
    })
})

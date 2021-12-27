import React from 'react'
import { render } from '@testing-library/react'
import Chat from '.'

describe('<Chat>', () => {
    it('should render with the correct text', () => {
        const { getByText } = render(<Chat>Component content</Chat>)
        const rendered = getByText('Component content')
        expect(rendered).toBeTruthy()
    })
})

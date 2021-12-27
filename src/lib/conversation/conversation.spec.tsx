import React from 'react'
import { render } from '@testing-library/react'
import Conversation from '.'

describe('<Conversation>', () => {
    it('should render with the correct text', () => {
        const { getByText } = render(<Conversation>Component content</Conversation>)
        const rendered = getByText('Component content')
        expect(rendered).toBeTruthy()
    })
})

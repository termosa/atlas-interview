import React from 'react'
import { render } from '@testing-library/react'
import EmptyConversation from '.'

describe('<EmptyConversation>', () => {
    it('should render with the correct text', () => {
        const { getByText } = render(<EmptyConversation>Component content</EmptyConversation>)
        const rendered = getByText('Component content')
        expect(rendered).toBeTruthy()
    })
})

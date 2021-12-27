import React from 'react'
import { render } from '@testing-library/react'
import ConversationMessage from '.'

describe('<ConversationMessage>', () => {
    it('should render with the correct text', () => {
        const { getByText } = render(<ConversationMessage>Component content</ConversationMessage>)
        const rendered = getByText('Component content')
        expect(rendered).toBeTruthy()
    })
})

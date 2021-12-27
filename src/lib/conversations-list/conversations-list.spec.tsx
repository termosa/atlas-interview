import React from 'react'
import { render } from '@testing-library/react'
import ConversationsList from '.'

describe('<ConversationsList>', () => {
    it('should render with the correct text', () => {
        const { getByText } = render(<ConversationsList>Component content</ConversationsList>)
        const rendered = getByText('Component content')
        expect(rendered).toBeTruthy()
    })
})

import React from 'react'
import { render } from '@testing-library/react'
import ConversationsListItem from '.'

describe('<ConversationsListItem>', () => {
    it('should render with the correct text', () => {
        const { getByText } = render(<ConversationsListItem>Component content</ConversationsListItem>)
        const rendered = getByText('Component content')
        expect(rendered).toBeTruthy()
    })
})

import React from 'react'
import { render } from '@testing-library/react'
import ConversationForm from '.'

describe('<ConversationForm>', () => {
    it('should render with the correct text', () => {
        const { getByText } = render(<ConversationForm>Component content</ConversationForm>)
        const rendered = getByText('Component content')
        expect(rendered).toBeTruthy()
    })
})

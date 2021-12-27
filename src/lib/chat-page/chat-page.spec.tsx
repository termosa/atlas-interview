import React from 'react'
import { render } from '@testing-library/react'
import ChatPage from '.'

describe('<ChatPage>', () => {
    it('should render with the correct text', () => {
        const { getByText } = render(<ChatPage>Component content</ChatPage>)
        const rendered = getByText('Component content')
        expect(rendered).toBeTruthy()
    })
})

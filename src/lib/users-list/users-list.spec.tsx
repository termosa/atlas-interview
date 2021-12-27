import React from 'react'
import { render } from '@testing-library/react'
import UsersList from '.'

describe('<UsersList>', () => {
    it('should render with the correct text', () => {
        const { getByText } = render(<UsersList>Component content</UsersList>)
        const rendered = getByText('Component content')
        expect(rendered).toBeTruthy()
    })
})

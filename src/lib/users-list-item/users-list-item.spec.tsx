import React from 'react'
import { render } from '@testing-library/react'
import UsersListItem from '.'

describe('<UsersListItem>', () => {
    it('should render with the correct text', () => {
        const { getByText } = render(<UsersListItem>Component content</UsersListItem>)
        const rendered = getByText('Component content')
        expect(rendered).toBeTruthy()
    })
})

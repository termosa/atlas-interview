import React from 'react'
import { render } from '@testing-library/react'
import LoginForm from '.'

describe('<LoginForm>', () => {
    it('should render with the correct text', () => {
        const { getByText } = render(<LoginForm>Component content</LoginForm>)
        const rendered = getByText('Component content')
        expect(rendered).toBeTruthy()
    })
})

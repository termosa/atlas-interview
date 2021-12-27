import React from 'react'
import { render } from '@testing-library/react'
import LoginPage from '.'

describe('<LoginPage>', () => {
    it('should render with the correct text', () => {
        const { getByText } = render(<LoginPage>Component content</LoginPage>)
        const rendered = getByText('Component content')
        expect(rendered).toBeTruthy()
    })
})

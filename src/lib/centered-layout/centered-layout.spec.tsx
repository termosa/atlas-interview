import React from 'react'
import { render } from '@testing-library/react'
import CenteredLayout from '.'

describe('<CenteredLayout>', () => {
    it('should render with the correct text', () => {
        const { getByText } = render(<CenteredLayout>Component content</CenteredLayout>)
        const rendered = getByText('Component content')
        expect(rendered).toBeTruthy()
    })
})

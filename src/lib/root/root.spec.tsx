import React from 'react'
import { render } from '@testing-library/react'
import Root from '.'

describe('<Root>', () => {
    it('should render with the correct text', () => {
        const { getByText } = render(<Root>Component content</Root>)
        const rendered = getByText('Component content')
        expect(rendered).toBeTruthy()
    })
})

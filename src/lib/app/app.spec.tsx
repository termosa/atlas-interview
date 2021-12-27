import React from 'react'
import { render } from '@testing-library/react'
import App from '.'

describe('<App>', () => {
    it('should render with the correct text', () => {
        const { getByText } = render(<App>Component content</App>)
        const rendered = getByText('Component content')
        expect(rendered).toBeTruthy()
    })
})

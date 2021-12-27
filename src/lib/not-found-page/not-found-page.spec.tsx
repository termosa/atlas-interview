import React from 'react'
import { render } from '@testing-library/react'
import NotFoundPage from '.'

describe('<NotFoundPage>', () => {
    it('should render with the correct text', () => {
        const { getByText } = render(<NotFoundPage>Component content</NotFoundPage>)
        const rendered = getByText('Component content')
        expect(rendered).toBeTruthy()
    })
})

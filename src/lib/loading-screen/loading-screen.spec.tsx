import React from 'react'
import { render } from '@testing-library/react'
import LoadingScreen from '.'

describe('<LoadingScreen>', () => {
    it('should render with the correct text', () => {
        const { getByText } = render(<LoadingScreen>Component content</LoadingScreen>)
        const rendered = getByText('Component content')
        expect(rendered).toBeTruthy()
    })
})

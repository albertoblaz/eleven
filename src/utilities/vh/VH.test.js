import React from 'react'
import { render } from '@testing-library/react'

import { VH } from './'

describe('VH', () => {
    test('hidden visually, perceivable aurally', () => {
        const example = 'This text is only visible by screen readers'
        const { getByText } = render(<VH>{example}</VH>)

        // Does not use "hidden" attribute, `display: none` or `visibility: hidden`
        expect(getByText(example)).toBeVisible()
        // Instead, it uses a "vh" (visually-hidden) class
        expect(getByText(example)).toHaveClass('vh')
    })
})

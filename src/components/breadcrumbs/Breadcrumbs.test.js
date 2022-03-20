import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { Breadcrumbs, BreadcrumbLink } from './'
import styles from './Button.demo.module.css'
import vhStyles from '../../utilities/vh/VH.module.css'

xdescribe('Breadcrumbs', () => {
    test('last link marked as current', () => {
        const { getAllByRole } = render(
            <Breadcrumbs>
                <BreadcrumbLink href="/content">Learning React</BreadcrumbLink>
                <BreadcrumbLink href="/content/introduction">
                    Introduction
                </BreadcrumbLink>
                <BreadcrumbLink href="/content/introduction#example1">
                    Example 1: Hello World
                </BreadcrumbLink>
            </Breadcrumbs>
        )
        expect(getAllByRole('link')).toBe(3)
        expect(getAllByRole('link')[0]).not.toHaveAttribute('aria-current')
        expect(getAllByRole('link')[1]).not.toHaveAttribute('aria-current')
        expect(getAllByRole('link')[2]).toHaveAttribute('aria-current', 'page')
    })
})

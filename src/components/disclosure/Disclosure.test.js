import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { Disclosure } from './'
import { Button } from '../button'
import styles from './Disclosure.demo.module.css'

describe('Disclosure', () => {
    test('initial visibility', () => {
        const { container, getByRole } = render(
            <Disclosure
                renderButton={(disclosureProps) => (
                    <Button {...disclosureProps}>
                        {disclosureProps['aria-expanded']
                            ? 'Collapse'
                            : 'Expand'}
                    </Button>
                )}
            >
                Disclosure body
            </Disclosure>
        )
        expect(getByRole('heading')).toBeVisible()
        expect(getByRole('heading')).toBeInTheDocument()

        expect(getByRole('button')).toBeVisible()
        expect(getByRole('button')).toBeInTheDocument()

        expect(container.firstChild.lastChild).not.toBeVisible() // toggable 'div'
        expect(container.lastChild).toBeInTheDocument() // toggable 'div'
    })

    test('toggle', () => {
        const onClick = jest.fn()
        const { debug, container, getByRole } = render(
            <Disclosure
                renderButton={(disclosureProps) => (
                    <Button
                        {...disclosureProps}
                        onClick={() => {
                            disclosureProps.onClick(event)
                            onClick(event)
                        }}
                    >
                        {disclosureProps['aria-expanded']
                            ? 'Collapse'
                            : 'Expand'}
                    </Button>
                )}
            >
                Disclosure body
            </Disclosure>
        )

        expect(getByRole('button')).toHaveTextContent('Expand')
        expect(getByRole('button')).toHaveAttribute('aria-expanded', 'false')
        expect(getByRole('button')).toHaveAttribute('aria-pressed', 'false')

        expect(container.firstChild.lastChild).not.toBeVisible()
        expect(container.lastChild).toHaveTextContent('Disclosure body')

        fireEvent.click(getByRole('button'))
        expect(onClick).toBeCalled()

        expect(getByRole('button')).toHaveTextContent('Collapse')
        expect(getByRole('button')).toHaveAttribute('aria-expanded', 'true')
        expect(getByRole('button')).toHaveAttribute('aria-pressed', 'true')

        expect(container.firstChild.lastChild).toBeVisible()
        expect(container.lastChild).toHaveTextContent('Disclosure body')
    })

    test('expanded', () => {
        const { container, getByRole } = render(
            <Disclosure
                expanded
                renderButton={(disclosureProps) => (
                    <Button {...disclosureProps}>
                        {disclosureProps['aria-expanded']
                            ? 'Collapse'
                            : 'Expand'}
                    </Button>
                )}
            >
                Disclosure body
            </Disclosure>
        )

        expect(getByRole('button')).toHaveTextContent('Collapse')
        expect(getByRole('button')).toHaveAttribute('aria-expanded', 'true')
        expect(getByRole('button')).toHaveAttribute('aria-pressed', 'true')

        expect(container.firstChild.lastChild).toBeVisible()
    })

    test('defaultExpanded', () => {
        const { container, getByRole } = render(
            <Disclosure
                defaultExpanded
                renderButton={(disclosureProps) => (
                    <Button {...disclosureProps}>
                        {disclosureProps['aria-expanded']
                            ? 'Collapse'
                            : 'Expand'}
                    </Button>
                )}
            >
                Disclosure body
            </Disclosure>
        )

        expect(getByRole('button')).toHaveTextContent('Collapse')
        expect(getByRole('button')).toHaveAttribute('aria-expanded', 'true')
        expect(getByRole('button')).toHaveAttribute('aria-pressed', 'true')

        expect(container.firstChild.lastChild).toBeVisible()
    })

    xtest('custom heading tag', () => {
        const { container, getByRole } = render(
            <Disclosure
                headingTag="h4"
                renderButton={(disclosureProps) => (
                    <Button {...disclosureProps}>
                        {disclosureProps['aria-expanded']
                            ? 'Collapse'
                            : 'Expand'}
                    </Button>
                )}
            >
                Disclosure body
            </Disclosure>
        )
    })

    xtest('custom container tag', () => {
        const { container, getByRole } = render(
            <Disclosure
                containerTag="aside"
                renderButton={(disclosureProps) => (
                    <Button {...disclosureProps}>
                        {disclosureProps['aria-expanded']
                            ? 'Collapse'
                            : 'Expand'}
                    </Button>
                )}
            >
                Disclosure body
            </Disclosure>
        )
    })

    test('can be styled', () => {
        const { container } = render(
            <Disclosure
                className={styles.disclosure}
                renderButton={(disclosureProps) => (
                    <Button {...disclosureProps}>
                        {disclosureProps['aria-expanded']
                            ? 'Collapse'
                            : 'Expand'}
                    </Button>
                )}
            >
                Disclosure body
            </Disclosure>
        )
        expect(container.firstChild).toHaveClass(styles.disclosure)
    })
})

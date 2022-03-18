import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Notification } from '@planview/pv-icons'

import { Tooltip } from './'
import { Button } from '../button'
import styles from './Tooltip.demo.module.css'

const noop = () => {}

xdescribe('Tooltip', () => {
    describe('behavior', () => {
        test('initial visibility', () => {
            const { getByRole } = render(
                <Tooltip text="Notifications">
                    {(tooltipProps) => (
                        <Button {...tooltipProps} vh="4" onClick={noop}>
                            <span>4</span>
                            <Notification color="#FFF" />
                        </Button>
                    )}
                </Tooltip>
            )

            expect(getByRole('tooltip')).not.toBeVisible()
            expect(getByRole('tooltip')).toHaveTextContent('Notifications')
        })

        test('show on mouseenter, hide on mouseleave', () => {
            const { getByRole } = render(
                <Tooltip text="Notifications">
                    {(tooltipProps) => (
                        <Button {...tooltipProps} vh="4" onClick={noop}>
                            <span>4</span>
                            <Notification color="#FFF" />
                        </Button>
                    )}
                </Tooltip>
            )

            expect(getByRole('tooltip')).not.toBeVisible()
            fireEvent.mouseEnter(getByRole('button'))
            expect(getByRole('tooltip')).toBeVisible()
            fireEvent.mouseEnter(getByRole('button'))
            expect(getByRole('tooltip')).not.toBeVisible()
        })

        test('show on focus, hide on blur', () => {
            const { getByRole } = render(
                <Tooltip text="Notifications">
                    {(tooltipProps) => (
                        <Button {...tooltipProps} vh="4" onClick={noop}>
                            <span>4</span>
                            <Notification color="#FFF" />
                        </Button>
                    )}
                </Tooltip>
            )

            expect(getByRole('tooltip')).not.toBeVisible()
            fireEvent.focus(getByRole('button'))
            expect(getByRole('tooltip')).toBeVisible()
            fireEvent.blur(getByRole('button'))
            expect(getByRole('tooltip')).not.toBeVisible()
        })
    })

    describe('variants', () => {
        test('labelling', () => {
            const { getByRole } = render(
                <Tooltip text="Notifications">
                    {(tooltipProps) => (
                        <Button {...tooltipProps} onClick={noop}>
                            <span>4</span>
                            <Notification color="#FFF" />
                        </Button>
                    )}
                </Tooltip>
            )

            expect(getByRole('button')).toHaveAccessibleName('Notifications')
            expect(getByRole('button')).toHaveAccessibleDescription(undefined)
        })

        test('descriptive', () => {
            const { getByRole } = render(
                <Tooltip
                    descriptive
                    text="Open notifications panel to view your latest messages"
                >
                    {(tooltipProps) => (
                        <Button {...tooltipProps} onClick={noop}>
                            <span>4</span>
                            <Notification color="#FFF" />
                        </Button>
                    )}
                </Tooltip>
            )

            expect(getByRole('button')).toHaveAccessibleName(undefined)
            expect(getByRole('button')).toHaveAccessibleDescription(
                'Open notifications panel to view your latest messages'
            )
        })
    })

    test('can be styled', () => {
        const { getByRole } = render(
            <Tooltip text="Notifications" className={styles.tooltip}>
                {(tooltipProps) => (
                    <Button
                        {...tooltipProps}
                        className={styles.button}
                        onClick={noop}
                    >
                        <span className={styles.count}>4</span>
                        <Notification color="#FFF" />
                    </Button>
                )}
            </Tooltip>
        )

        expect(getByRole('tooltip')).toHaveClass(styles.tooltip)
    })
})

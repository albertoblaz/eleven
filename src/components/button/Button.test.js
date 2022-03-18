import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { Button } from './'
import styles from './Button.demo.module.css'
import vhStyles from '../../utilities/vh/VH.module.css'

const noop = () => {}

describe('Button', () => {
    describe('basics', () => {
        test('mounts', () => {
            const { getByRole } = render(<Button onClick={noop}>Click</Button>)
            expect(getByRole('button')).toBeVisible()
            expect(getByRole('button')).toBeInTheDocument()
        })
    })
    describe('api', () => {
        test('on events', () => {
            const onClick = jest.fn()
            const onKeyDown = jest.fn()
            const { getByRole } = render(
                <Button onClick={onClick} onKeyDown={onKeyDown}>
                    Click
                </Button>
            )
            fireEvent.click(getByRole('button'))
            expect(onClick).toBeCalledTimes(1)
            expect(onKeyDown).toBeCalledTimes(0)
            fireEvent.keyDown(getByRole('button'), { key: 'Enter' })
            expect(onClick).toBeCalledTimes(1)
            expect(onKeyDown).toBeCalledTimes(1)
            fireEvent.keyDown(getByRole('button'), { key: 'Space' })
            expect(onClick).toBeCalledTimes(1)
            expect(onKeyDown).toBeCalledTimes(2)
        })
        test('pressed', () => {
            const { getByRole } = render(
                <Button pressed onClick={noop}>
                    Click
                </Button>
            )
            expect(getByRole('button')).toHaveAttribute('aria-pressed', 'true')
        })
        test('lookDisabled', () => {
            const onClick = jest.fn()
            const onKeyDown = jest.fn()
            const { getByRole } = render(
                <Button lookDisabled onClick={noop}>
                    Click
                </Button>
            )
            expect(getByRole('button')).toHaveAttribute('aria-disabled', 'true')
            expect(getByRole('button')).not.toBeDisabled()
            fireEvent.click(getByRole('button'))
            expect(onClick).toBeCalledTimes(0)
            expect(onKeyDown).toBeCalledTimes(0)
            fireEvent.keyDown(getByRole('button'), { key: 'Enter' })
            expect(onClick).toBeCalledTimes(0)
            expect(onKeyDown).toBeCalledTimes(0)
            fireEvent.keyDown(getByRole('button'), { key: 'Space' })
            expect(onClick).toBeCalledTimes(0)
            expect(onKeyDown).toBeCalledTimes(0)
        })
        test('can be styled', () => {
            const { getByRole, debug } = render(
                <Button className={styles.button} onClick={noop}>
                    Click
                </Button>
            )
            expect(getByRole('button')).toHaveClass(styles.button)
        })
    })
    describe('accessibility', () => {
        test('accessible name', () => {
            const { getByRole } = render(
                <>
                    <span id="span">Close</span>
                    <Button
                        aria-labelledby="span"
                        onClick={() => console.log('close')}
                    >
                        <svg aria-hidden="false" focusable="false">
                            <circle cx={3} cy={3} r={3}></circle>
                        </svg>
                    </Button>
                </>
            )
            expect(getByRole('button')).toHaveAccessibleName('Close')
        })
        test('vh', () => {
            const { getByRole, getByText } = render(
                <>
                    <Button
                        vh="Notifications"
                        onClick={() => console.log('close')}
                    >
                        <svg aria-hidden="false" focusable="false">
                            <circle cx={3} cy={3} r={3}></circle>
                        </svg>
                    </Button>
                </>
            )
            expect(getByRole('button')).toHaveAccessibleName('Notifications')
            expect(getByRole('button')).toBeVisible()
            expect(getByText('Notifications')).toHaveClass(vhStyles.vh) // text not visible
        })
    })
})

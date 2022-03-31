import React from 'react'
import { Story, Meta } from '@storybook/react'
import { Notification } from '@planview/pv-icons'

import { Button } from '../button'
import { VH } from '../../utilities/vh'
import { Tooltip } from './'

import styles from './Tooltip.demo.module.css'

export default {
    title: 'Components/Tooltip',
    component: Tooltip,
    args: {
        text: 'Notifications',
        descriptive: false,
        show: true,
    },
    parameters: {
        controls: {
            sort: 'requiredFirst',
        },
        docs: {
            description: {
                component: `Description: TBD`,
            },
        },
    },
}

export const Default: Story<typeof Tooltip> = (args) => (
    <Tooltip {...args} className={styles.tooltip}>
        {(tooltipProps) => (
            <Button
                {...tooltipProps}
                className={styles.button}
                onClick={() => {
                    console.log('open notifications panel')
                }}
            >
                <span className={styles.count}>4</span>
                <Notification color="#FFF" />
            </Button>
        )}
    </Tooltip>
)

export const LabellingTooltip: Story<typeof Tooltip> = () => (
    <Tooltip text="Notifications" className={styles.tooltip}>
        {(tooltipProps) => (
            <Button
                {...tooltipProps}
                vh="4"
                className={styles.button}
                onClick={() => {
                    console.log('open notifications panel')
                }}
            >
                <span className={styles.count}>4</span>
                <Notification color="#FFF" />
            </Button>
        )}
    </Tooltip>
)

export const DescriptiveTooltip: Story<typeof Tooltip> = () => (
    <Tooltip
        descriptive
        text="Open notifications panel to view your latest messages"
        className={styles.tooltip}
    >
        {(tooltipProps) => (
            <Button
                {...tooltipProps}
                className={styles.button}
                vh="4 Notifications"
                onClick={() => {
                    console.log('open notifications panel')
                }}
            >
                <span className={styles.count}>4</span>
                <Notification color="#FFF" />
            </Button>
        )}
    </Tooltip>
)

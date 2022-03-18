import React from 'react'

import { Button } from './'
import styles from './Button.demo.module.css'

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Button',
        className: styles.button,
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

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
    children: 'Button',
    className: styles.button,
    onClick: () => {
        console.log('click!')
    },
}

export const Disabled = Template.bind({})
Disabled.args = {
    children: 'Button',
    className: styles.button,
    lookDisabled: true,
    onClick: () => {
        console.log('click!')
    },
}

export const Pressed = Template.bind({})
Pressed.args = {
    children: 'Button',
    className: styles.button,
    pressed: true,
    onClick: () => {
        console.log('click!')
    },
}

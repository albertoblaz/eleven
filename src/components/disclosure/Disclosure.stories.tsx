import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Disclosure } from '.'
import { Button } from '../button'

import demoStyles from './Disclosure.demo.module.css'

export default {
    title: 'Components/Disclosure',
    component: Disclosure,
    args: {
        renderButton: (props) => (
            <Button {...props}>
                {props['aria-expanded'] ? 'Collapse' : 'Expand'}
            </Button>
        ),
        children: 'This is the body',
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
} as Meta<typeof Disclosure>

//👇 Each story then reuses that template

export const Default: Story<typeof Disclosure> = (args) => (
    <Disclosure {...args} />
)

export const Expanded: Story<typeof Disclosure> = (args) => (
    <Disclosure
        defaultExpanded
        renderButton={(buttonProps) => (
            <Button {...buttonProps}>
                {buttonProps['aria-expanded'] ? 'Collapse' : 'Expand'}
            </Button>
        )}
    >
        This is the body section
    </Disclosure>
)

export const CustomHeadingTag: Story<typeof Disclosure> = (args) => (
    <Disclosure
        headingTag="h4"
        renderButton={(buttonProps) => (
            <Button {...buttonProps}>
                {buttonProps['aria-expanded']
                    ? 'Collapse using h4'
                    : 'Expand using h4'}
            </Button>
        )}
    >
        This is the body section
    </Disclosure>
)

export const CustomStyling: Story<typeof Disclosure> = (args) => (
    <Disclosure
        className={demoStyles['disclosure']}
        renderButton={(buttonProps) => (
            <Button {...buttonProps} className={demoStyles['disclosure__btn']}>
                {buttonProps['aria-expanded'] ? 'Collapse' : 'Expand'}
            </Button>
        )}
    >
        <p className={demoStyles['disclosure__body']}>This is the body</p>
    </Disclosure>
)

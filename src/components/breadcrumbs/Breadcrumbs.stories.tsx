import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Breadcrumbs, BreadcrumbLink } from './'

// import styles from './Breadcrumbs.demo.module.css'

export default {
    title: 'Components/Breadcrumbs',
    component: Breadcrumbs,
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

export const Default: Story<typeof Breadcrumbs> = (args) => (
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

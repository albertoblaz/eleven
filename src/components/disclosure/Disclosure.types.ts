import * as React from 'react'

export interface DisclosureButtonProps {
    type: 'button'
    id: string
    'aria-controls': string
    'aria-expanded': boolean
    pressed: boolean
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

export interface DisclosureProps {
    /** Function to render custom button elements within section header. Comes with its own set of props */
    renderButton: (buttonProps: DisclosureButtonProps) => React.ReactNode
    /** Content to render within section body */
    children: React.ReactNode
    /** Set section's initial internal state (uncontrolled mode) */
    defaultExpanded?: boolean
    /** Set section's internal state (controlled mode) */
    expanded?: boolean
    /** Custom heading tag to use */
    headingTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    /** Custom container tag to use */
    containerTag?: 'section' | 'aside' | 'article'
    /** Custom CSS class */
    className?: string
}

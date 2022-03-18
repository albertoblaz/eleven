import React from 'react'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    /**
     * Content to render. If `children` is not pure text or does not
     * contain at least one element with pure text, `Button` will need
     * an accessible name set either by a visually-hidden child element
     * or through an `aria-label` prop
     */
    children: React.ReactNode
    /**
     *
     */
    onClick: React.MouseEventHandler<HTMLButtonElement>
    /**
     * Component acts as a "toggle" button when `pressed` is a boolean
     * or a regular button if undefined
     */
    pressed?: boolean
    /**
     * Renders a disabled-looking button that might still be perceivable
     * by assistive technologies and captures focus
     */
    lookDisabled?: boolean
    /**
     *
     */
    vh?: string
    /**
     * Custom CSS class
     */
    className?: string
}

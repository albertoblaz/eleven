import * as React from 'react'

interface ContentProps {
    onFocus: React.FocusEventHandler<HTMLElement>
    onBlur: React.FocusEventHandler<HTMLElement>
    onMouseEnter: React.MouseEventHandler<HTMLElement>
    onMouseLeave: React.MouseEventHandler<HTMLElement>
}

export interface LabellingTooltipProps extends ContentProps {
    'aria-labelledby': string
}

export interface DescriptiveTooltipProps extends ContentProps {
    'aria-describedby': string
}

export interface TooltipProps {
    /** Text displayed by tooltip */
    text: string

    /** Render prop with content that will show the tooltip either on hover or focus */
    children: (
        contentProps: LabellingTooltipProps | DescriptiveTooltipProps
    ) => React.ReactNode

    /** Tooltip will either label or describe the content (see 'aria-labelledby' vs 'aria-describedby') */
    descriptive?: boolean

    /** Condition to show or hide the tooltip */
    show?: boolean

    /** Custom CSS class */
    className?: string
}

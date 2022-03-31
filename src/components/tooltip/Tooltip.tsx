import * as React from 'react'

import { useUUID } from '../../hooks/uuid'

import { TooltipProps } from './Tooltip.types'

const TooltipImpl = (
    {
        text,
        children,
        descriptive = false,
        show = true,
        className = '',
    }: TooltipProps,
    ref: React.ForwardedRef<HTMLDivElement>
): JSX.Element => {
    const [isVisible, setVisible] = React.useState(false)

    const onFocus = React.useCallback(() => {
        setVisible(true)
    }, [])

    const onBlur = React.useCallback(() => {
        setVisible(false)
    }, [])

    const onMouseEnter = React.useCallback(() => {
        setVisible(true)
    }, [])

    const onMouseLeave = React.useCallback(() => {
        setVisible(false)
    }, [])

    const id = `tooltip-${useUUID()}`

    return (
        <>
            {children(
                descriptive
                    ? {
                          'aria-describedby': id,
                          onFocus,
                          onBlur,
                          onMouseEnter,
                          onMouseLeave,
                      }
                    : {
                          'aria-labelledby': id,
                          onFocus,
                          onBlur,
                          onMouseEnter,
                          onMouseLeave,
                      }
            )}
            <div
                hidden={!show || !isVisible}
                role="tooltip"
                className={className}
                id={id}
                ref={ref}
            >
                {text}
            </div>
        </>
    )
}

const Tooltip = React.forwardRef(TooltipImpl)
export { Tooltip }
export default Tooltip

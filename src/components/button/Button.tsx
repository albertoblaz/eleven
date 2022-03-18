import * as React from 'react'
import { useUUID } from '../../hooks/uuid'
import { ButtonProps } from './Button.types'
import { VH } from '../../utilities/vh'

const ButtonImpl: React.ForwardRefRenderFunction<
    HTMLButtonElement,
    ButtonProps
> = (
    {
        children,
        onClick,
        pressed,
        lookDisabled,
        vh,
        'aria-labelledby': ariaLabelledBy = '',
        className,
        ...otherProps
    },
    ref
) => {
    const uuid = useUUID()
    const vhId = vh ? `button-vh-${uuid}` : ''
    const label =
        vhId && ariaLabelledBy
            ? `${vhId} ${ariaLabelledBy} `
            : vhId && !ariaLabelledBy
            ? vhId
            : !vhId && ariaLabelledBy
            ? ariaLabelledBy
            : undefined

    return (
        <button
            // Note that <button> tag brings implicit: role="button" and tabIndex="0"
            // `type` can be replaced with 'reset' or 'submit' via '...otherProps' when used in forms
            type="button"
            // Prefer `aria-disabled` over native `disabled` to make button
            // perceivable by screen readers while looking disabled
            aria-disabled={
                typeof lookDisabled === 'boolean' ? lookDisabled : undefined
            }
            // Only yield `aria-pressed` when button acts as a toggle button (can be enabled)
            aria-pressed={typeof pressed === 'boolean' ? pressed : undefined}
            onClick={onClick}
            aria-labelledby={label}
            className={className}
            {...otherProps}
            ref={ref}
        >
            {children}
            {vh ? <VH id={vhId}>{vh}</VH> : null}
        </button>
    )
}

const Button = React.forwardRef(ButtonImpl)
export { Button }

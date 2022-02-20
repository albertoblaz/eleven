import * as React from 'react'
import { ButtonProps } from './Button.types'

export const Button = React.forwardRef(({ pressed, lookDisabled, children, ...otherProps }: ButtonProps, ref: HTMLButtonElement | undefined): JSX.Element => (
    <button type="button"
        aria-disabled={typeof lookDisabled === 'boolean' ? lookDisabled : undefined}
        aria-pressed={typeof pressed === 'boolean' ? pressed : undefined}
        {...otherProps}
        ref={ref}
    >
        {children}
    </button>
))
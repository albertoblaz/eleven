import * as React from 'react'

import styles from './VH.module.css'
import { VHProps } from './VH.types'

const VisuallyHidden: React.ForwardRefRenderFunction<HTMLSpanElement, VHProps> =
    (props, ref) => <span className={styles['vh']} {...props} ref={ref} />

const VH = React.forwardRef(VisuallyHidden)
export { VH }

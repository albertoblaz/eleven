import * as React from 'react'

import { useUUID } from '../../hooks/uuid'

import { DisclosureProps } from './Disclosure.types'

const Disclosure = ({
    renderButton,
    children,
    defaultExpanded,
    expanded,
    headingTag = 'h2',
    containerTag = 'section',
    className = '',
}: DisclosureProps): JSX.Element => {
    /* Support both controlled and uncontrolled mode for `expanded` state */
    const [isExpanded, setExpanded] = React.useState(Boolean(defaultExpanded))
    React.useEffect(() => {
        if (typeof expanded === 'boolean') {
            setExpanded(expanded)
        }
    }, [expanded])

    /* Generate unique id */
    const uuid = useUUID()
    const disclosureId = `disclosure-${uuid}`
    const disclosureButtonId = `${disclosureId}-btn`
    const disclosureBodyId = `${disclosureId}-body`

    /* Render prop for custom button trigger */
    const button = renderButton({
        type: 'button',
        id: disclosureButtonId,
        'aria-controls': disclosureBodyId,
        'aria-expanded': isExpanded,
        pressed: isExpanded,
        onClick: (event: React.MouseEvent<HTMLButtonElement>) => {
            setExpanded((state: boolean): boolean => !state)
        },
    })

    /*
     * Render
     *
     * It should yield this DOM hierarchy by default:
     *
     * <section>
     *     <h2>
     *         {trigger - must be a button or any other interactive control}
     *     </h2>
     *     <div hidden={true/false}>
     *         {content}
     *     </div>
     * </section>
     */
    return React.createElement(
        containerTag,
        { className },
        React.createElement(headingTag, null, button),
        <div
            id={disclosureBodyId}
            aria-labelledby={disclosureButtonId}
            hidden={!isExpanded}
        >
            {children}
        </div>
    )
}

export { Disclosure }
export default Disclosure

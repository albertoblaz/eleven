import React, { Children, useContext } from 'react'

import { BreadcrumbsProps, BreadcrumbLinkProps } from './Breadcrumbs.types'

const BreadcrumbsContext = React.createContext({
    lastChildIndex: 0,
})

const BreadcrumbsImpl: React.ForwardRefRenderFunction<
    HTMLElement, // Can't find HTMLNavElement ?!
    BreadcrumbsProps
> = ({ className, children }, ref) => (
    <BreadcrumbsContext.Provider
        value={{
            lastChildIndex: React.Children.count(children) - 1,
        }}
    >
        <nav className={className} ref={ref}>
            <ol>
                {children.map((child, index) => (
                    <li key={index}>{child}</li>
                ))}
            </ol>
        </nav>
    </BreadcrumbsContext.Provider>
)

const Breadcrumbs = React.forwardRef(BreadcrumbsImpl)
export { Breadcrumbs }

const getIndex = (node: HTMLElement): number =>
    Array.from(node.parentNode?.children || []).indexOf(node)

const BreadcrumbLinkImpl: React.ForwardRefRenderFunction<
    HTMLAnchorElement | undefined,
    BreadcrumbLinkProps
> = (props, ref) => {
    const linkRef = React.useRef<HTMLAnchorElement | undefined>(undefined)
    const { lastChildIndex } = React.useContext(BreadcrumbsContext)

    React.useImperativeHandle(ref, () => linkRef.current)

    if (linkRef.current && getIndex(linkRef.current) === lastChildIndex) {
        console.log('last')
    }

    return (
        <a
            {...props}
            ref={(node: HTMLAnchorElement | null) => {
                if (node) {
                    linkRef.current = node
                }
            }}
            aria-current={
                linkRef.current && getIndex(linkRef.current) === lastChildIndex
                    ? 'page'
                    : undefined
            }
        />
    )
}

const BreadcrumbLink = React.forwardRef(BreadcrumbLinkImpl)
export { BreadcrumbLink }

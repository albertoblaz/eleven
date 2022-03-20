import React from 'react'

export type BreadcrumbLinkProps = React.HTMLAttributes<HTMLAnchorElement>

export interface BreadcrumbsProps {
    /** */
    className?: string
    /** */
    children: React.ReactElement<BreadcrumbLinkProps>[]
}

import React from 'react'
import { LinkContent } from './styles'

export default function Link({ children, ...rest }) {
    return (
        <LinkContent {...rest}>
            <span>{children}</span><i></i>
        </LinkContent>
    )
}

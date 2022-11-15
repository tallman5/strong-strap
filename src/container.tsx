import React, { ComponentPropsWithoutRef } from 'react'
import { Size, useContainerSizes } from './utilities'
import * as s from './styles'

interface IContainer extends ComponentPropsWithoutRef<"div"> {
    size?: Size
}

export const Container = ({ children, size = Size.sm, ...rest }: IContainer) => {
    const maxWidth = useContainerSizes(size)
    return (
        <div style={{ ...s.Container, maxWidth }} {...rest}>{children}</div>
    )
}

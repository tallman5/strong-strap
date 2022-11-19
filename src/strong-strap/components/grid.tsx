import React, { ComponentPropsWithoutRef } from 'react'
import { Size, useColumnSizes, useContainerSizes } from '../utilities'
import * as s from '../styles'

interface ICol extends ComponentPropsWithoutRef<'div'> {
    size?: Size,
    colSpan?: number
}

export const Col = ({ children, size = Size.sm, colSpan = 0, ...rest }: ICol) => {
    const appendedStyle = useColumnSizes(size, colSpan)
    return (
        <div style={{ ...s.Col, ...appendedStyle }} {...rest}>{children}</div>
    )
}

interface IContainer extends ComponentPropsWithoutRef<'div'> {
    size?: Size
}

export const Container = ({ children, size = Size.sm, ...rest }: IContainer) => {
    const maxWidth = useContainerSizes(size)
    return (
        <div style={{ ...s.Container, maxWidth }} {...rest}>{children}</div>
    )
}

interface IRow extends ComponentPropsWithoutRef<'div'> { }

export const Row = ({ children, ...rest }: IRow) => {
    return (
        <div style={s.Row} {...rest}>
            {children}
        </div>
    )
}

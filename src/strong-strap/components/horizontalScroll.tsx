import React, { ComponentPropsWithoutRef } from "react"
import * as s from '../styles'

interface IHorizontalScroll extends ComponentPropsWithoutRef<'pre'> {}

export const HorizontalScroll = ({ children }: IHorizontalScroll) => {
    return (
        <div style={s.HorizontalScrollContainer}>{children}</div>
    )
}

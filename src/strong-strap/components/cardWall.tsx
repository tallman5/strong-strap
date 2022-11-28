import React, { ComponentPropsWithoutRef } from "react";
import * as s from '../styles'

interface ICardWall extends ComponentPropsWithoutRef<'div'> { }

export const CardWall = ({ children, ...rest }: ICardWall) => {
    return (
        <div style={s.CardWall} {...rest}>{children}</div>
    )
}

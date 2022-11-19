import React, { ComponentPropsWithoutRef } from "react"
import * as s from '../styles'

interface ICard extends ComponentPropsWithoutRef<'div'> { }

export const Card = ({ children }: ICard) => {
    return <div style={s.Card}>{children}</div>
}

interface ICardBody extends ComponentPropsWithoutRef<'div'> { }

export const CardBody = ({ children }: ICardBody) => {
    return <div style={s.CardBody}>{children}</div>
}

interface ICardText extends ComponentPropsWithoutRef<'div'> { }

export const CardText = ({ children }: ICardText) => {
    return <div style={s.CardText}>{children}</div>
}

interface ICardTitle extends ComponentPropsWithoutRef<'h5'> { }

export const CardTitle = ({ children }: ICardTitle) => {
    return <h5 style={s.CardTitle}>{children}</h5>
}

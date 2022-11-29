import React, { ComponentPropsWithoutRef, CSSProperties } from "react";
import { UiFunction } from "../utilities";
import * as s from '../styles'

interface IAlert extends ComponentPropsWithoutRef<'div'> {
    uiFunction?: UiFunction
}

export const Alert = ({ children, uiFunction = UiFunction.Success, ...rest }: IAlert) => {
    const style: CSSProperties = {
        ...s.Rounded,
        border: '1px solid transparent',
        color: '#000000cc',
        margin: '5px',
        padding: '10px',
    }

    switch (uiFunction) {
        case UiFunction.Danger:
            style.backgroundColor = '#f8d7da'
            style.borderColor = '#f5c2c7'
            style.color = '#842029'
            break
        case UiFunction.Info:
            style.backgroundColor = '#cff4fc'
            style.borderColor = '#b6effb'
            style.color = '#055160'
            break
        case UiFunction.Success:
            style.backgroundColor = '#d1e7dd'
            style.borderColor = '#badbcc'
            style.color = '#0f5132'
            break
        case UiFunction.Warning:
            style.backgroundColor = '#fff3cd'
            style.borderColor = '#ffecb5'
            style.color = '#664d03'
            break
        default:
            break
    }

    return (
        <div style={style} {...rest}>{children}</div>
    )
}

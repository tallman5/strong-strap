import React, { ComponentPropsWithoutRef, useState } from "react"
import * as s from '../styles'

interface ISwitch extends ComponentPropsWithoutRef<'input'> {
    caption?: string,
}

export const Switch = ({ caption, id, onBlur, onChange, onFocus, ...rest }: ISwitch) => {
    // TODO: focused states
    const [currentState, setCurrentState] = useState(s.FormCheckInput)

    const thisChanged = (e: any) => {
        if (e.target.checked)
            setCurrentState(s.FormCheckInputChecked)
        else
            setCurrentState(s.FormCheckInput)

        if (onChange) onChange(e)
    }

    return (
        <div style={s.FormCheckSwitch}>
            <input onChange={(e) => { thisChanged(e) }} style={currentState} type="checkbox" role="switch" id={id} {...rest} />
            {
                (caption && caption.length > 0)
                    ? <label htmlFor={id}>{caption}</label>
                    : null
            }
        </div>
    )
}

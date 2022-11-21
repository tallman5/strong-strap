import React, { ComponentPropsWithoutRef, CSSProperties, useEffect, useState } from "react"
import * as s from '../styles'

interface IFloatingTextBox extends ComponentPropsWithoutRef<'input'> {
    helpText?: string,
    label: string,
    name: string,
    value: string,
}

export const FloatingTextBox = ({ helpText, label, name, value, ...rest }: IFloatingTextBox) => {
    const textboxId = name + "Textbox"
    const [inputStyle, setInputStyle] = useState<CSSProperties>(s.FormFloatingFormControl)
    const [labelStyle, setLabelStyle] = useState<CSSProperties>(s.FloatingLabel)

    useEffect(() => {
        if (value && value.length > 0) {
            setLabelStyle(s.FloatingLabelFocus)
        }
    }, [value])

    const thisFocus = (e: any) => {
        setInputStyle({
            ...s.FormControlFocus,
            ...s.FormFloatingFormControl,
        })
        setLabelStyle(s.FloatingLabelFocus)
    }

    const thisBlur = (e: any) => {
        if (!e.target.value || e.target.value.length === 0) {
            setLabelStyle(s.FloatingLabel)
        }
        setInputStyle(s.FormFloatingFormControl)
    }

    return (
        <>
            <div style={s.FormFloating}>
                <input style={inputStyle} id={textboxId} name={name}
                    onFocus={(e) => { e.target.select(); thisFocus(e) }}
                    onBlur={(e) => { thisBlur(e) }}
                    value={value} {...rest}
                />
                <label style={labelStyle} htmlFor={textboxId}>{label}</label>
            </div>
            {
                (helpText && helpText.length > 0)
                    ? <div style={{ fontSize: '.875em', marginTop: '0.25rem', opacity: '0.7' }}>{helpText}</div>
                    : null
            }
        </>
    )
}

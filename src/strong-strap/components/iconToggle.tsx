import React, { ChangeEvent, ComponentPropsWithoutRef, useState } from "react";
import { Icon, KnownIcon } from "../icons";
import * as s from '../styles'

interface IIconToggle extends ComponentPropsWithoutRef<'input'> {
    caption?: string,
    checkedIcon: KnownIcon,
    checkedFill?: string,
    uncheckedFill?: string,
    uncheckedIcon: KnownIcon,
    width?: string
}

export const IconToggle = ({ checked, caption = '', checkedFill = 'currentColor', checkedIcon, id, onChange, uncheckedFill = 'currentColor', uncheckedIcon, width = '100%', ...rest }: IIconToggle) => {
    const [isChecked, setIsChecked] = useState(checked)

    const thisChanged = (e: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(!isChecked)
        if (onChange) onChange(e)
    }

    return (
        <div style={{ width }}>
            <div style={{ paddingTop: '100%', position: 'relative' }}>
                <Icon knownIcon={uncheckedIcon} fill={uncheckedFill} style={{ ...s.AspectRatioItem, display: (isChecked) ? 'none' : 'block' }} />
                <Icon knownIcon={checkedIcon} fill={checkedFill} style={{ ...s.AspectRatioItem, display: (isChecked) ? 'block' : 'none' }} />
                <input type="checkbox" style={{ ...s.AspectRatioItem, appearance: 'none' }} onChange={(e) => { thisChanged(e) }} id={id} {...rest} />
            </div>
            {
                (caption && caption.length > 0)
                    ? <label htmlFor={id}>{caption}</label>
                    : null
            }
        </div>
    )
}

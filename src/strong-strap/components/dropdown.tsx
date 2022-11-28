import React, { ComponentPropsWithoutRef, CSSProperties, useState } from "react"
import * as s from '../styles'
import { Expander } from "./expander"

interface IDropdown extends ComponentPropsWithoutRef<'div'> { }

export const Dropdown = ({ children }: IDropdown) => {
    return (
        <div style={s.Dropdown}>{children}</div>
    )
}

interface IDropdownMenu extends ComponentPropsWithoutRef<'div'> {
    isExpanded: boolean,
    isRightAligned?: boolean,
}

export const DropdownMenu = ({ children, isExpanded = false, isRightAligned = false }: IDropdownMenu) => {
    const finalStyle: CSSProperties = {
        ...s.DropdownMenu,
        display: (isExpanded) ? 'block' : 'none',
    }
    if (isRightAligned === true)
        finalStyle.right = 0

    return (
        <div style={finalStyle}><Expander isExpanded={isExpanded}>{children}</Expander></div>
    )
}

interface IDropdownMenuItem extends ComponentPropsWithoutRef<'button'> { }

export const DropdownMenuItem = ({ children, ...rest }: IDropdownMenuItem) => {
    const [finalStyle, setFinalStyle] = useState(s.DropdownMenuItem)

    return (
        <button type="button" style={finalStyle} {...rest}
            onMouseEnter={() => { setFinalStyle({ ...s.DropdownMenuItem, backgroundColor: 'var(--bs-dropdown-link-hover-bg)' }) }}
            onMouseLeave={() => { setFinalStyle(s.DropdownMenuItem) }}
        >{children}</button>
    )
}


import React, { ComponentPropsWithoutRef, useState } from "react"
import * as s from '../styles'

interface IDropdown extends ComponentPropsWithoutRef<'div'> { }

export const Dropdown = ({ children }: IDropdown) => {
    return (
        <div style={s.Dropdown}>{children}</div>
    )
}

interface IDropdownMenu extends ComponentPropsWithoutRef<'div'> {
    isExpanded: boolean,
    left?: string,
}

export const DropdownMenu = ({ children, left = '0px', isExpanded = false }: IDropdownMenu) => {
    return (
        <div style={{
            ...s.DropdownMenu,
            display: (isExpanded) ? 'block' : 'none',
            left
        }}>{children}</div>
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


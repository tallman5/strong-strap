import React, { ComponentPropsWithoutRef, CSSProperties, useEffect, useState } from "react"
import * as s from '../styles'

interface INavBar extends ComponentPropsWithoutRef<'nav'> {
    isFixedTop?: boolean
}

export const NavBar = ({ children, isFixedTop = false }: INavBar) => {
    let finalStyle = s.NavBar
    if (isFixedTop && isFixedTop === true)
        finalStyle = {
            ...s.NavBar,
            ...s.FixedTop,
            backgroundColor: '#f8f9fa'
        }
    return (
        <nav style={finalStyle}>{children}</nav>
    )
}

interface INavBarToggler extends ComponentPropsWithoutRef<'button'> {
    isVisible?: boolean
}

export const NavBarToggler = ({ isVisible = true, ...rest }: INavBarToggler) => {
    const [finalStyle, setFinalStyle] = useState<CSSProperties>(s.NavBarToggler)

    if (isVisible === true)
        return (
            <button type='button' style={finalStyle} {...rest}
                onFocus={() => { setFinalStyle(s.NavBarTogglerFocus) }}
                onBlur={() => { setFinalStyle(s.NavBarToggler) }}>
                <span style={s.NavBarTogglerIcon}></span>
            </button>
        )
    return null
}

interface INavBarCollapse extends ComponentPropsWithoutRef<'div'> {
    isVertical?: boolean,
    isVisible?: boolean,
}

export const NavBarCollapse = ({ children, isVertical = false, isVisible = true }: INavBarCollapse) => {
    const [finalStyle, setFinalStyle] = useState<CSSProperties>(s.NavBarCollapseVer)

    useEffect(() => {
        let newStyle: CSSProperties =
            (isVertical === true)
                ? s.NavBarCollapseVer
                : s.NavBarCollapseHor

        if (isVisible === false)
            newStyle = {
                ...newStyle,
                display: 'none'
            }

        setFinalStyle(newStyle)
    }, [isVertical, isVisible])

    return (
        <div style={{ ...finalStyle }}>{children}</div>
    )
}

interface INavBarNav extends ComponentPropsWithoutRef<'div'> {
    isVertical?: boolean
}

export const NavBarNav = ({ children, isVertical = false }: INavBarNav) => {
    const [finalStyle, setFinalStyle] = useState<CSSProperties>(s.NavBarNavVer)
    useEffect(() => {
        if (isVertical === true)
            setFinalStyle(s.NavBarNavVer)
        else
            setFinalStyle(s.NavBarNavHor)
    }, [isVertical])
    return (
        <div style={finalStyle}>{children}</div>
    )
}

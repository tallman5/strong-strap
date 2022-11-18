import React, { ComponentPropsWithoutRef, CSSProperties, ReactElement, useEffect, useState } from 'react'
import { animated, config, useSpring } from '@react-spring/web'
import { useMasonryColumns, useMedia } from './utilities'
import * as s from './styles'
import type * as CSS from 'csstype';

interface IBackdrop extends ComponentPropsWithoutRef<'div'> {
    isVisible?: boolean
}
export const Backdrop = ({ children, isVisible = false }: IBackdrop) => {
    // TODO: Hide overflow on body
    // TODO: Prevent scrolling
    // TODO: Prevent clicking, typing etc. in forms

    const styles = useSpring({
        config: config.stiff,
        opacity: isVisible ? 1 : 0,
        zIndex: isVisible ? 2000 : -1,
        ...s.Backdrop,
    })

    return <animated.div style={styles}>{children}</animated.div >
}


interface IBtn extends ComponentPropsWithoutRef<'button'> {
    isFullWidth?: boolean,
    statedStyles: s.StatedStyles,
    textalign?: CSS.Property.TextAlign,
}
export const Btn = ({ children, isFullWidth = false, statedStyles = s.BtnPrimaryStates, textalign = 'center', ...rest }: IBtn) => {
    // TODO: create remaining UI Function styles and implement here
    const [finalStyle, setFinalStyle] = useState(statedStyles.base)
    const [isHovering, setIsHovering] = useState(false)
    const [isFocused, setIsFocused] = useState(false)

    useEffect(() => {
        if (isFocused) {
            setFinalStyle(statedStyles.focus)
            return
        }
        if (isHovering) {
            setFinalStyle(statedStyles.hover)
            return
        }
        setFinalStyle(statedStyles.base)
    }, [isFocused, isHovering, statedStyles])

    return (
        <button style={{ ...finalStyle, width: (isFullWidth) ? '100%' : 'auto', textAlign: textalign }} {...rest}
            onMouseEnter={() => { setIsHovering(true) }}
            onMouseLeave={() => { setIsHovering(false) }}
            onFocus={() => { setIsFocused(true) }}
            onBlur={() => { setIsFocused(false) }}
        >{children}</button>
    )
}


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


interface ICloseButton extends ComponentPropsWithoutRef<'button'> { }
export const CloseButton = ({ ...rest }: ICloseButton) => {
    const [finalStyle, setFinalStyle] = useState(s.CloseButton)
    const [isHovering, setIsHovering] = useState(false)
    useEffect(() => {
        const newStyle: CSSProperties = {
            ...s.CloseButton,
            opacity: (isHovering) ? '.5' : 1
        }
        setFinalStyle(newStyle)
    }, [isHovering])
    return (
        <button style={finalStyle} {...rest}
            onMouseEnter={() => { setIsHovering(true) }}
            onMouseLeave={() => { setIsHovering(false) }}
        ></button>
    )
}


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
interface IDropdownMenuItem extends ComponentPropsWithoutRef<'div'> { }
export const DropdownMenuItem = ({ children }: IDropdownMenuItem) => {
    return (
        <div style={{ ...s.DropdownMenuItem }}>{children}</div>
    )
}


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
        if (value) {
            setLabelStyle(s.FloatingLabelFocus)
        }
    }, [])

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


export const HamburgerIcon = () => {
    return (
        <span style={s.NavBarTogglerIcon}></span>
    )
}


interface IMasonry extends ComponentPropsWithoutRef<'div'> { }
export const Masonry = ({ children }: IMasonry) => {
    const columnCount = useMasonryColumns()
    const [columns, setColumns] = useState<ReactElement[]>([])

    useEffect(() => {
        const newCols: ReactElement[] = []
        const colWidth = (100 / columnCount) + '%'
        const colStyle: CSSProperties = {
            ...s.MasonryCol,
            width: colWidth,
        }

        if (children) {
            const childArray = children as Array<ReactElement>

            for (let i = 0; i < columnCount; i++) {
                const rows: ReactElement[] = [];
                for (let j = i; j < childArray.length; j += columnCount) {
                    rows.push(
                        <div key={j} style={s.MasonryBrick}>
                            {childArray[j]}
                        </div>
                    )
                }
                newCols.push(<div key={i} style={colStyle}>{rows}</div>);
            }
            setColumns(newCols)
        }
        else {
            setColumns([])
        }
    }, [children, columnCount])

    return (
        <div style={s.Masonry}>
            {columns}
        </div>
    )
}


interface IModalBody extends ComponentPropsWithoutRef<'div'> { }
export const ModalBody = ({ children }: IModalBody) => {
    return (
        <div style={s.ModalBody}>{children}</div>
    )
}
interface IModalContent extends ComponentPropsWithoutRef<'div'> { }
export const ModalContent = ({ children }: IModalContent) => {
    return (
        <div style={s.ModalContent}>{children}</div>
    )
}
interface IModalDialog extends ComponentPropsWithoutRef<'div'> { }
export const ModalDialog = ({ children }: IModalDialog) => {
    // TODO: Sizing doesn't go to full width when below 576px
    const [style, setStyle] = useState(s.ModalDialog)
    const width = useMedia(['(min-width: 576px)'], [1], 0)
    useEffect(() => {
        if (width === 0)
            setStyle({
                ...s.ModalDialog,
                width: '100%',
                margin: '.75rem'
            })
        else
            setStyle({
                ...s.ModalDialog,
                width: '500px'
            })
    }, [width])
    return (
        <div style={style}>{children}</div>
    )
}
interface IModalFooter extends ComponentPropsWithoutRef<'div'> { }
export const ModalFooter = ({ children }: IModalFooter) => {
    return (
        <div style={s.ModalFooter}>{children}</div>
    )
}
interface IModalHeader extends ComponentPropsWithoutRef<'div'> { }
export const ModalHeader = ({ children }: IModalHeader) => {
    return (
        <div style={s.ModalHeader}>{children}</div>
    )
}


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


interface IScrollToTop extends ComponentPropsWithoutRef<'div'> {
    isVisible?: boolean
}
export const ScrollToTop = ({ isVisible = false }: IScrollToTop) => {
    const styles = useSpring({
        config: config.stiff,
        opacity: isVisible ? 1 : 0,
        ...s.ScrollToTop,
    })
    return <animated.div style={styles}>
        <Btn title='Top' statedStyles={s.BtnPrimaryStates} onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }} type='button'>⤒</Btn>
    </animated.div>
}


interface IStringify extends ComponentPropsWithoutRef<'pre'> {
    o: any
}
export const Stringify = ({ o }: IStringify) => {
    return (
        <pre>{JSON.stringify(o, null, 2)}</pre>
    )
}


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

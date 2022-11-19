import React, { ComponentPropsWithoutRef, CSSProperties, useEffect, useState } from "react"
import type * as CSS from 'csstype';
import * as s from '../styles'
import { animated, config, useSpring } from '@react-spring/web'

interface IBtn extends ComponentPropsWithoutRef<'button'> {
    isFullWidth?: boolean,
    statedStyles?: s.StatedStyles,
    textalign?: CSS.Property.TextAlign,
}

export const Btn = ({ children, isFullWidth = false, statedStyles = s.BtnStates, textalign = 'center', ...rest }: IBtn) => {
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

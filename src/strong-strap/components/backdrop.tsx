import React, { ComponentPropsWithoutRef } from "react"
import * as s from '../styles'
import { animated, config, useSpring } from '@react-spring/web'

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

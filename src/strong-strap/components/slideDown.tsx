import { useSpring, animated } from "@react-spring/web";
import React, { ComponentPropsWithoutRef, } from "react";

export interface ISlideDown extends ComponentPropsWithoutRef<'div'> {
    isDown?: boolean
    topMargin?: string
}

export const SlideDown = ({ children, isDown = false, topMargin = '75vh', style }: ISlideDown) => {
    const anim = useSpring({
        marginTop: isDown ? topMargin : '0vh',
        ...style
    })

    return (
        <animated.div style={anim}>{children}</animated.div>
    )
}

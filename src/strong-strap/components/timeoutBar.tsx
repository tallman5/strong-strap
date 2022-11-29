import { animated, easings, useSpring } from "@react-spring/web";
import React, { ComponentPropsWithoutRef, CSSProperties, useEffect, useState } from "react";
import * as s from '../styles'

interface ITimeoutBar extends ComponentPropsWithoutRef<'div'> {
    background?: string,
    duration?: number,
    height?: string,
}

const TimeoutBar = ({ background = 'rgb(25, 135, 84)', duration = 5000, height = '20px' }: ITimeoutBar) => {
    const [isRunning, setIsRunning] = useState(false)
    const props = useSpring({
        width: isRunning ? `${100}%` : `0%`,
        config: {
            duration,
            easing: easings.easeInOutQuad,
        }
    })

    const containerStyle: CSSProperties = {
        ...s.Rounded,
        position: 'relative',
        width: '100%',
        height,
        overflow: 'hidden'
    }

    const barStyle: CSSProperties = {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        background,
    }

    useEffect(() => {
        setIsRunning(true)
    }, [])

    return (
        <div style={containerStyle}>
            <div style={{ ...barStyle, width: '100%', opacity: '.3' }}></div>
            <animated.div style={{ ...props, ...barStyle }}></animated.div>
        </div>
    )
}

export default TimeoutBar

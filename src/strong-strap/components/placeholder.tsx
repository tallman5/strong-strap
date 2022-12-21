import React, { ComponentPropsWithoutRef, CSSProperties, useState } from "react"
import { animated, config, useSpring } from '@react-spring/web'

export interface IPlaceholder extends ComponentPropsWithoutRef<'div'> {
    isVisible?: boolean
}

export const Placeholder = ({ children, isVisible = true }: IPlaceholder) => {
    const phStyle: CSSProperties = {
        cursor: 'wait',
    }

    const [flip, set] = useState(false)
    
    const styles = useSpring({
        to: { opacity: .9 },
        from: { opacity: .2 },
        reset: true,
        reverse: flip,
        delay: 0,
        config: config.molasses,
        onRest: () => set(!flip),
        ...phStyle
    })

    if (isVisible === true) {
        return <animated.div style={styles}>{children}</animated.div >
    }

    return null
}

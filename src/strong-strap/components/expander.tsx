import { config, useSpring, animated } from "@react-spring/web";
import React, { ComponentPropsWithoutRef } from "react";

interface IExpander extends ComponentPropsWithoutRef<'div'> {
    isExpanded?: boolean
}

export const Expander = ({ children, isExpanded = false, ...rest }: IExpander) => {
    const styles = useSpring({
        config: config.stiff,
        opacity: isExpanded ? 1 : 0,
    })

    return (
        <animated.div style={styles}>{children}</animated.div>
    )
}

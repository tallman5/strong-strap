import { useSpring, animated } from "@react-spring/web";
import React, { ComponentPropsWithoutRef } from "react";
import useMeasure from "react-use-measure";
import { usePrevious } from "../utilities";

interface IExpander extends ComponentPropsWithoutRef<'div'> {
    isExpanded?: boolean
}

export const Expander = ({ children, isExpanded = false, style }: IExpander) => {
    const previous = usePrevious(isExpanded)
    const [ref, { height: viewHeight }] = useMeasure()
    const { height, opacity } = useSpring({
        from: { height: 0, opacity: 0 },
        to: {
            height: isExpanded ? viewHeight : 0,
            opacity: isExpanded ? 1 : 0,
        },
    })
    const finalStyle = {
        ...style,
        opacity, height: isExpanded && previous === isExpanded ? 'auto' : height,
    }

    return (
        <animated.div style={finalStyle}>
            <animated.div ref={ref} children={children} />
        </animated.div>
    )
}

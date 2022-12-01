import { useSpring, animated, a } from "@react-spring/web";
import React, { CSSProperties, useState } from "react";
import useMeasure from "react-use-measure";
import { usePrevious } from "../utilities";

const Content: CSSProperties = {
    willChange: 'transform, opacity, height',
    marginLeft: '6px',
    padding: '0px 0px 0px 14px',
    borderLeft: '1px dashed rgba(255, 255, 255, 0.4)',
    overflow: 'hidden',
}

const Frame: CSSProperties = {
    position: 'relative',
    padding: '4px 0px 0px 0px',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflowX: 'hidden',
    verticalAlign: 'middle',
    color: '#24292e',
    fill: '#24292e',
}

const Title: CSSProperties = {
    verticalAlign: 'middle',
}

export const Tree = React.memo<
    React.HTMLAttributes<HTMLDivElement> & {
        defaultOpen?: boolean
        name?: string | JSX.Element
    }
>(({ children, name, style, defaultOpen = false }) => {
    const [isOpen, setOpen] = useState(defaultOpen)
    const previous = usePrevious(isOpen)
    const [ref, { height: viewHeight }] = useMeasure()
    const { height, opacity, y } = useSpring({
        from: { height: 0, opacity: 0, y: 0 },
        to: {
            height: isOpen ? viewHeight : 0,
            opacity: isOpen ? 1 : 0,
            y: isOpen ? 0 : 20,
        },
    })

    return (
        <div style={Frame}>
            <div style={{ ...Title, ...style }} onClick={() => setOpen(!isOpen)}>{name}</div>
            <animated.div
                style={{
                    ...Content,
                    opacity,
                    height: isOpen && previous === isOpen ? 'auto' : height,
                }}>
                <a.div ref={ref} style={{ y }} children={children} />
            </animated.div>
        </div>
    )
})

import React, { CSSProperties, ReactNode, useEffect, useState } from "react";
import * as s from '../styles'
import { AspectRatioContainer } from "./aspectRatioContainer";

interface ICarousel {
    aspectRatio?: string,
    children: ReactNode,
    duration?: number,
}

export const Carousel = ({ aspectRatio = '20%', children, duration = 5000 }: ICarousel) => {
    const [currentIndex, setIndex] = useState(0)
    const kids = children as []

    const itemStyle: CSSProperties = {
        ...s.AspectRatioItem,
        transition: 'opacity 3.0s'
    }

    useEffect(() => {
        const inter = setInterval(() => {
            setIndex(state => (state + 1) % kids?.length)
        }, duration)
        return function cleanUp() { window.clearInterval(inter) }
    }, [])

    return (
        <AspectRatioContainer aspectRatio={aspectRatio}>
            {
                kids?.map((child, index: number) => {
                    return (
                        <div key={index}
                            style={{ ...itemStyle, opacity: (index === currentIndex) ? 1 : 0 }}>
                            {child}
                        </div>
                    )
                })
            }
        </AspectRatioContainer>
    )
}

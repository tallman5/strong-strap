import React, { ComponentPropsWithoutRef, CSSProperties } from "react";
import * as s from '../styles'

interface IAspectRatioContainer extends ComponentPropsWithoutRef<'div'> { 
    aspectRatio: string
}

export const AspectRatioContainer = ({ children, aspectRatio, ...rest }: IAspectRatioContainer) => {
    const finalStyle: CSSProperties = {
        ...s.AspectRatioContainer,
        paddingTop: aspectRatio,
    }
    return (
        <div style={finalStyle} {...rest}>{children}</div>
    )
}

import React, { ComponentPropsWithoutRef, CSSProperties } from "react";
import * as s from '../styles'

interface IAspectRatioContainer extends ComponentPropsWithoutRef<'div'> { 
    paddingTop: string
}

export const AspectRatioContainer = ({ children, paddingTop, ...rest }: IAspectRatioContainer) => {
    const finalStyle: CSSProperties = {
        ...s.AspectRatioContainer,
        paddingTop,
    }
    return (
        <div style={finalStyle} {...rest}>{children}</div>
    )
}

export default AspectRatioContainer

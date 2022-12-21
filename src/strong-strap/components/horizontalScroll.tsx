import React, { ComponentPropsWithoutRef, CSSProperties } from "react";

export interface IHorizontalScroll extends ComponentPropsWithoutRef<'div'> {
    spacing?: string
}

export const HorizontalScroll = ({ children, spacing = '8px', style, ...rest }: IHorizontalScroll) => {
    const finalStyle: CSSProperties = {
        ...style, display: "flex", overflowX: "auto", maxWidth: "100%", gap: spacing, padding: spacing
    }
    return (
        <div style={finalStyle} {...rest}>{children}</div>
    )
}

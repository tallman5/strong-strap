import React, { ComponentPropsWithoutRef } from "react";

interface IBrickWall extends ComponentPropsWithoutRef<'div'> {
    gap?: string
}

export const BrickWall = ({ children, gap = '10px', ...rest }: IBrickWall) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap }} {...rest}>
            {children}
        </div>
    )
}

import React, { ComponentPropsWithoutRef } from "react"
import { Size } from "."

interface IContainer extends ComponentPropsWithoutRef<"div"> { 
    size?: Size
}

export const Container = ({ children, size = Size.sm, ...rest }: IContainer) => {
    return (
        <div {...rest}>{children}</div>
    )
}

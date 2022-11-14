import React, { ComponentPropsWithoutRef } from "react"

interface IContainer extends ComponentPropsWithoutRef<"div"> { }

export const Container = ({ children, ...rest }: IContainer) => {
    return (
        <div {...rest}>{children}</div>
    )
}

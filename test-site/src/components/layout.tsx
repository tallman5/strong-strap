import React, { ComponentPropsWithoutRef } from 'react'

interface ILayout extends ComponentPropsWithoutRef<'div'> { }

const Layout = ({ children, ...rest }: ILayout) => {
    return (
        <div {...rest}>
            <div>Header</div>
            <main>{children}</main>
            <div>Footer</div>
        </div>
    )
}

export default Layout
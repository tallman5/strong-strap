import React, { ComponentPropsWithoutRef } from 'react'
import Header from './header';

interface ILayout extends ComponentPropsWithoutRef<'div'> { }

const Layout = ({ children, ...rest }: ILayout) => {
    return (
        <div {...rest}>
            <Header />
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout
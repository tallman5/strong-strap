import React, { ComponentPropsWithoutRef } from 'react'
import Footer from './footer';
import Header from './header';

interface ILayout extends ComponentPropsWithoutRef<'div'> { }

const Layout = ({ children, ...rest }: ILayout) => {
    return (
        <div style={{ minHeight: '100.1vh', display: 'flex', flexDirection: 'column' }} {...rest}>
            <Header />

            <main style={{ flexGrow: 1 }}>
                {children}
            </main>

            <Footer />
        </div>
    )
}

export default Layout

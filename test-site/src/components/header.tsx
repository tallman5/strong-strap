import { Link } from 'gatsby'
import React, { useEffect, useState } from 'react'
import { Container, NavBar, NavBarCollapse, NavBarNav, NavBarToggler, useMedia } from '../../../src/index'
import * as s from '../../../src/styles'

const Header = () => {
    const cols = useMedia(['(min-width: 475px)'], [1], 0)
    const [navMenuVisible, setNavMenuVisible] = useState(true)

    useEffect(() => {
        if (cols === 1)
            setNavMenuVisible(true)
        else
            setNavMenuVisible(false)
    }, [cols])

    return (
        <header>
            <NavBar>
                <Container>
                    <Link to='/' style={s.NavBarBrand}>
                        <img src='/icon.png' width={'24px'} />
                        <span style={{ marginLeft: '10px' }}>{(cols === 1) ? 'mcgurkin.net' : ''}</span>
                    </Link>
                    <NavBarToggler onClick={() => { setNavMenuVisible(!navMenuVisible) }} isVisible={(cols === 0) ? true : false} />
                    <NavBarCollapse isVertical={(cols === 0) ? true : false} isVisible={navMenuVisible}>
                        <NavBarNav isVertical={(cols === 0) ? true : false}>
                            <Link to='/posts' title='Posts' style={s.NavLink} aria-current="page">POSTS</Link>
                            {
                                (process.env.NAME === "PROD")
                                    ? null
                                    : <Link to='/scratch' title='Scratch' style={s.NavLink} aria-current="page">SCRATCH</Link>
                            }
                        </NavBarNav>
                    </NavBarCollapse>
                </Container>
            </NavBar>
        </header>
    )
}

export default Header
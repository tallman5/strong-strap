import { Link } from 'gatsby'
import React, { useEffect, useState } from 'react'
import { Btn, CaretDownFill, Container, Dropdown, DropdownMenu, DropdownMenuItem, NavBar, NavBarCollapse, NavBarNav, NavBarToggler, PersonCircle, useMedia } from '../strong-strap'
import * as s from '../strong-strap/styles'

const Header = () => {
    const cols = useMedia(['(min-width: 475px)'], [1], 0)
    const [navMenuVisible, setNavMenuVisible] = useState(true)
    const [dropdownVisible, setDropdownVisible] = useState(false)

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
                        <img src='/icon.png' width={'24px'} alt='m' />
                        <span style={{ marginLeft: '10px' }}>{(cols > 0) ? 'mcgurkin.net' : ''}</span>
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
                        <Dropdown>
                            <Btn statedStyles={s.BtnSecondaryStates} type="button" onClick={(e) => { e.stopPropagation(); setDropdownVisible(!dropdownVisible); }}>
                                <div style={{ whiteSpace: 'nowrap', opacity: '0.5' }}>
                                    <PersonCircle />&nbsp;&nbsp;<CaretDownFill />
                                </div>
                            </Btn>
                            <DropdownMenu isExpanded={dropdownVisible} isRightAligned={true}>
                                <DropdownMenuItem>Action</DropdownMenuItem>
                                <hr style={{ margin: '0px' }} />
                                <DropdownMenuItem>Another Action</DropdownMenuItem>
                                <DropdownMenuItem>Something Else Here</DropdownMenuItem>
                            </DropdownMenu>
                        </Dropdown>
                    </NavBarCollapse>
                </Container>
            </NavBar>
        </header>
    )
}

export default Header
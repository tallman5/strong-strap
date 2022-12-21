import { Link } from 'gatsby'
import React, { useEffect, useState } from 'react'
import { isBrowser } from '../strong-strap'

const Header = () => {
    const [navMenuVisible, setNavMenuVisible] = useState(false)
    const [pathname, setPathname] = useState('')

    useEffect(() => {
        if (isBrowser) {
            setPathname(window.location.pathname.toLowerCase())
        }
    }, [])

    return (
        <header>
            <nav className="navbar navbar-expand-md  bg-light">
                <div className="container">
                    <Link className="navbar-brand" to='/'>
                        <img src='/icon.png' width={'24px'} alt='McGurkin' />
                        <span style={{ marginLeft: '5px' }}>strong-strap</span>
                    </Link>
                    <button className={"navbar-toggler"} type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation"
                        onClick={() => { setNavMenuVisible(!navMenuVisible) }}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div style={{ justifyContent: 'space-between' }} className={(navMenuVisible === true) ? 'collapse navbar-collapse show' : 'collapse navbar-collapse'} id="navbarNavAltMarkup">
                        <div className={'navbar-nav'}>
                            <Link className={(pathname.startsWith('/posts')) ? 'nav-link active' : 'nav-link'} to="/posts/">POSTS</Link>
                            <Link className={(pathname.startsWith('/scratch')) ? 'nav-link active' : 'nav-link'} to="/scratch/">SCRATCH</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header

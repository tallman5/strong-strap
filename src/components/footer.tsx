import { Link } from 'gatsby'
import React, { useEffect, useState } from 'react'

const Footer = () => {
    const [year, setYear] = useState(2022)

    useEffect(() => {
        setYear((new Date()).getFullYear())
    }, [])

    return (
        <div style={{ backgroundColor: '#fafafa', padding: '20px', marginTop: '20px' }}>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <br />
                    </div>
                    <div className='col-md-4'>
                        <br />
                    </div>
                    <div className='col-md-4'>
                        <h6>INFO</h6>
                        <Link to="/">Home</Link>
                        <br />
                        <br />
                        <span>© {year}</span>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
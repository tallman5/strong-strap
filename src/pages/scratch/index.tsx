import { Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/layout'

const ScratchIndex = () => {
    return (
        <Layout>
            <div className='container'>
                <div className='row'>
                    <div className='col'><h1>Scratch</h1></div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <Link to='./carouselSample/'>Carousel</Link><br />
                        <Link to='./horizScroll/'>Horizontal Scoll</Link><br />
                        <Link to='./iconsSample/'>Icons</Link><br />
                        <Link to='./infiniteScroll/'>Infinite Scroll</Link><br />
                        <Link to='./messages/'>Messages</Link><br />
                        <Link to='./motions/'>Motion</Link><br />
                        <Link to='./symbols/'>Symbols</Link><br />
                        <Link to='./walls/'>Walls</Link><br />
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default ScratchIndex

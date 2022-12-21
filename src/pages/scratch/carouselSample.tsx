import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../../components/layout'
import { Carousel } from '../../strong-strap'

const CarouselSample = () => {
    return (
        <Layout>
            <div className='container'>
                <div className='row'>
                    <div className='col'><h1>Carousel Sample</h1></div>
                </div>
                <br />
                <div className='row'>
                    <div className='col'>
                        <Carousel aspectRatio='40%'>
                            <StaticImage src='../../images/testimg-cover.jpg' alt={'Bear'} />
                            <StaticImage src='../../images/testimg1.jpg' alt={'Sunrise'} />
                            <StaticImage src='../../images/testimg2.jpg' alt={'Photographer'} />
                        </Carousel>
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default CarouselSample

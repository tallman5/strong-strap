import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../../components/layout'
import { AspectRatioContainer, Carousel, Col, Container, ImagePlaceholder, Row } from '../../strong-strap'
import * as s from '../../strong-strap/styles'

const CarouselSample = () => {
    return (
        <Layout>
            <Container>
                <Row>
                    <Col><h1>Carousel Sample</h1></Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Carousel aspectRatio='40%'>
                            <StaticImage style={s.AspectRatioItem} src='../../images/testimg-cover.jpg' alt={'Bear'} />
                            <StaticImage style={s.AspectRatioItem} src='../../images/testimg1.jpg' alt={'Sunrise'} />
                            <StaticImage style={s.AspectRatioItem} src='../../images/testimg2.jpg' alt={'Photographer'} />
                        </Carousel>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <AspectRatioContainer aspectRatio='100%'>
                            <StaticImage style={s.AspectRatioItem} src='../../images/testimg-cover.jpg' alt={'Bear'} />
                        </AspectRatioContainer>
                    </Col>
                    <Col>
                        <ImagePlaceholder aspectRatio='100%' src='https://image.tmdb.org/t/p/w185/uAeZI1JJbLPq7Bu5dziH7emHeu7.jpg' alt={'Lost Bullet 2'} />
                    </Col>
                </Row>
            </Container>
        </Layout >
    )
}

export default CarouselSample

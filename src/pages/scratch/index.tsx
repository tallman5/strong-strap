import { Link } from 'gatsby'
import React from 'react'
import Layout from '../../components/layout'
import { Col, Container, Row } from '../../strong-strap'

const ScratchIndex = () => {
    return (
        <Layout>
            <Container>
                <Row>
                    <Col><h1>Scratch</h1></Col>
                </Row>
                <Row>
                    <Col>
                        <Link to='./carouselSample'>Carousel</Link>
                    </Col>
                    <Col>
                        <Link to='./horizScroll'>Horizontal Scoll</Link>
                    </Col>
                    <Col>
                        <Link to='./iconsSample'>Icons</Link>
                    </Col>
                    <Col>
                        <Link to='./infiniteScroll'>Infinite Scroll</Link>
                    </Col>
                    <Col>
                        <Link to='./messages'>Messages</Link>
                    </Col>
                    <Col>
                        <Link to='./motions'>Motion</Link>
                    </Col>
                </Row>
            </Container>
        </Layout >
    )
}

export default ScratchIndex

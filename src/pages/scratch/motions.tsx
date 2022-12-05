import React, { useState } from 'react'
import Layout from '../../components/layout'
import { Btn, Carousel, Col, Container, Expander, Row } from '../../strong-strap'
import * as s from '../../strong-strap/styles'


const MotionSamples = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    const imageUrls: string[] = [
        'https://image.tmdb.org/t/p/w780/apBUC70udhxoLzXo7DqclQ6gcXo.jpg',
        'https://image.tmdb.org/t/p/w780/v3Mc67AUN77h0BR9GymiPs4x96H.jpg',
        'https://image.tmdb.org/t/p/w780/2Kz2sHM3NDl0EVDXHGwMT8UrknZ.jpg',
    ]

    return (
        <Layout>
            <Container>
                <Row>
                    <Col><h1>Motion Tests</h1></Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Expander isExpanded={isExpanded}>
                            <Carousel aspectRatio='40%'>
                                {
                                    imageUrls.map(m => {
                                        return (
                                            <img style={s.AspectRatioItem} key={m} src={m} />
                                        )
                                    })
                                }
                            </Carousel>
                        </Expander>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Btn statedStyles={s.BtnSuccessStates} onClick={() => { setIsExpanded(!isExpanded) }}>Toggle Item</Btn>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <div style={{ border: '1px solid red', padding: '50px' }}>Content Below</div>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Btn statedStyles={s.BtnSuccessStates} onClick={() => { setIsExpanded(!isExpanded) }}>Toggle Item</Btn>
                    </Col>
                </Row>
            </Container>
        </Layout >
    )
}

export default MotionSamples

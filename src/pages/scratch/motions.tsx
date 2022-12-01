import React, { useState } from 'react'
import Layout from '../../components/layout'
import { Btn, Col, Container, Expander, Row } from '../../strong-strap'
import * as s from '../../strong-strap/styles'


const MotionSamples = () => {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <Layout>
            <Container>
                <Row>
                    <Col><h1>Motion Tests</h1></Col>
                </Row>
                <br />
                <Row>
                    <Col><Btn statedStyles={s.BtnSuccessStates} onClick={() => { setIsExpanded(!isExpanded) }}>Toggle Item</Btn></Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Expander isExpanded={isExpanded}>
                            <div style={{ border: '1px solid red', padding: '20px' }}>My Content</div>
                        </Expander>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <div style={{ border: '1px solid red', padding: '20px' }}>Content Below</div>
                    </Col>
                </Row>
            </Container>
        </Layout >
    )
}

export default MotionSamples

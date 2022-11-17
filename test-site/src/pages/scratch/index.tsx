import React from 'react'
import { Btn, Col, Container, FloatingTextBox, Row, UiFunction } from '../../../../src/index'
import Layout from '../../components/layout'

const ScratchIndex = () => {
    return (
        <Layout>
            <Container>
                <Row>
                    <Col><h1>Scratch</h1></Col>
                </Row>
                <Row>
                    <Col colSpan={3}>
                        <FloatingTextBox label={'Email Address'} name={'email'} value={''} />
                    </Col>
                    <Col colSpan={3}></Col>
                    <Col colSpan={3}></Col>
                    <Col colSpan={3}></Col>
                </Row>
                <Row>
                    <Col colSpan={3}>
                        <Btn uiFunction={UiFunction.Success}>Testing</Btn>
                    </Col>
                    <Col colSpan={3}></Col>
                    <Col colSpan={3}></Col>
                    <Col colSpan={3}></Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default ScratchIndex
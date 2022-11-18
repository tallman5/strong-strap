import React from 'react'
import Layout from '../../components/layout'
import { CameraVideoFill, CameraVideoFillSlash, CaretDownFill, Col, Container, Eye, EyeFill, Film, MagnifyingGlass, PersonCircle, Row } from '../../strong-strap'

const ScratchIndex = () => {
    return (
        <Layout>
            <Container>
                <Row>
                    <Col><h1>Scratch</h1></Col>
                </Row>
                <Row>
                    <Col>
                        <h2>Icons</h2>
                        <CameraVideoFill />&nbsp;
                        <CameraVideoFillSlash />&nbsp;
                        <CaretDownFill />&nbsp;
                        <Eye />&nbsp;
                        <EyeFill />&nbsp;
                        <Film />&nbsp;
                        <MagnifyingGlass />&nbsp;
                        <PersonCircle />&nbsp;
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default ScratchIndex
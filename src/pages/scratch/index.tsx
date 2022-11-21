import React, { useState } from 'react'
import Layout from '../../components/layout'
import { Col, Container, FloatingTextBox, Icon, IconShape, Row } from '../../strong-strap'

const ScratchIndex = () => {
    const [email, setEmail] = useState('')

    return (
        <Layout>
            <Container>
                <Row>
                    <Col><h1>Scratch</h1></Col>
                </Row>
                <Row>
                    <Col colSpan={3}>
                        <h2>Icons</h2>
                        {
                            Object.keys(IconShape).filter(isNaN as any).map((is, index: number) => {
                                return (
                                    <span key={is}>
                                        <Icon size={32} iconShape={index as IconShape} />
                                        &nbsp;
                                    </span>
                                )
                            })
                        }
                    </Col>
                    <Col colSpan={6}>
                        <h2>Col 2</h2>
                    </Col>
                    <Col colSpan={3}>
                        <h2>Col 3</h2>
                    </Col>
                    <Col colSpan={5}>
                        <h2>Col 4</h2>
                        <FloatingTextBox onChange={(e) => { setEmail(e.target.value) }} label={'Email Address'} name={'email'} value={email} />
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default ScratchIndex
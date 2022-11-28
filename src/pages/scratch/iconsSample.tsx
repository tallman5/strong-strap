import React from 'react'
import Layout from '../../components/layout'
import { Col, Container, Icon, KnownIcon, Row } from '../../strong-strap'

const ScratchIndex = () => {
    return (
        <Layout>
            <Container>
                <Row>
                    <Col><h1>Icons</h1></Col>
                </Row>
                <Row>
                    {
                        Object.keys(KnownIcon).filter(isNaN as any).map((is, index: number) => {
                            return (
                                <Col key={is}>
                                    <div style={{ margin: '10px' }}>
                                        <Icon fill='#777' width={'32px'} knownIcon={index as KnownIcon} />
                                    </div>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        </Layout >
    )
}

export default ScratchIndex

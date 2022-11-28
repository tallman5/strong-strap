import React from 'react'
import Layout from '../../components/layout'
import { Col, Container, HorizontalScroll, Icon, KnownIcon, Row } from '../../strong-strap'

const HorizScroll = () => {
    return (
        <Layout>
            <Container>
                <Row>
                    <Col><h1>Horizontal Scroll</h1></Col>
                </Row>
                <Row>
                    <HorizontalScroll>
                        {
                            Object.keys(KnownIcon).filter(isNaN as any).map((is, index: number) => {
                                return (
                                    <div key={is} style={{ margin: '10px' }}>
                                        <Icon fill='#777' width={'32px'} knownIcon={index as KnownIcon} />
                                    </div>
                                )
                            })
                        }
                    </HorizontalScroll>
                </Row>
            </Container>
        </Layout >
    )
}

export default HorizScroll

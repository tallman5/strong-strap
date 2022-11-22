import React from 'react'
import Layout from '../../components/layout'
import { Col, Container, KnownIcon, Row } from '../../strong-strap'
import IconToggle from '../../strong-strap/components/iconToggle'

const ScratchIndex = () => {

    return (
        <Layout>
            <Container>
                <Row>
                    <Col><h1>Scratch</h1></Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <IconToggle checkedFill='#eee' uncheckedFill='#777' width='25%' id='testToggle' caption='Testing' checkedIcon={KnownIcon.ThumbUpFill} uncheckedIcon={KnownIcon.ThumbUp} title='My Title' />
                    </Col>
                </Row>
            </Container>
        </Layout >
    )
}

export default ScratchIndex
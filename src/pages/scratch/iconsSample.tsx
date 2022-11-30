import React, { useState } from 'react'
import Layout from '../../components/layout'
import { Col, Container, Icon, IconToggle, KnownIcon, Row } from '../../strong-strap'

const ScratchIndex = () => {
    const [isChecked, setIsChecked] = useState(false)

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
                <br />
                <Row>
                    <Col>
                        <IconToggle onClick={e => e.stopPropagation()} onChange={(e) => { setIsChecked(!isChecked) }}
                            checkedIcon={KnownIcon.ThumbUpFill} uncheckedIcon={KnownIcon.ThumbUp} width={'32px'} checkedFill='green'
                            checked={isChecked} title="I really liked this!" name={'twoThumbs'} />

                    </Col>
                </Row>
            </Container>
        </Layout >
    )
}

export default ScratchIndex

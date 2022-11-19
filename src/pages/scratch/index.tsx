import React, { useState } from 'react'
import Layout from '../../components/layout'
import { Btn, Col, Container, Dropdown, DropdownMenu, DropdownMenuItem, Icon, IconShape, Row } from '../../strong-strap'
import * as s from '../../strong-strap/styles'

const ScratchIndex = () => {
    const [isDdVisibible, setIsDdVisibible] = useState(false)

    return (
        <Layout>
            <Container>
                <Row>
                    <Col><h1>Scratch</h1></Col>
                </Row>
                <Row>
                    <Col>
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
                    <Col>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default ScratchIndex
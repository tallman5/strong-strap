import React, { useState } from 'react'
import Layout from '../../components/layout'
import { Btn, Col, Container, Dropdown, DropdownMenu, DropdownMenuItem, Expander, Icon, IconShape, Row } from '../../strong-strap'
import * as s from '../../strong-strap/styles'

const ScratchIndex = () => {
    const [isDdVisible, setIsDdVisible] = useState(false)

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
                        <div style={{ position: 'relative' }}>
                            <div>
                                <Btn statedStyles={s.BtnSecondaryStates} onClick={() => { setIsDdVisible(!isDdVisible) }}>Dropdown Menu</Btn>
                            </div>
                            <div style={{ position: 'absolute', border: '1px solid red' }}>
                                <Expander isExpanded={isDdVisible}>
                                    <div>Fred</div>
                                </Expander>
                            </div>
                        </div>
                        Ginger
                    </Col>
                    <Col>
                        <Dropdown>
                            <Btn statedStyles={s.BtnSecondaryStates} onClick={() => { setIsDdVisible(!isDdVisible) }}>Dropdown Menu</Btn>
                            <DropdownMenu isExpanded={isDdVisible} isRightAligned={true}>
                                <DropdownMenuItem>Item One</DropdownMenuItem>
                                <DropdownMenuItem>Item Two</DropdownMenuItem>
                                <DropdownMenuItem>Item with a longer title</DropdownMenuItem>
                            </DropdownMenu>
                        </Dropdown>
                        <br />
                        Fred
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default ScratchIndex
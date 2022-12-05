import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout'
import { Btn, Col, Container, FloatingTextBox, Row, Size } from '../../strong-strap'
import * as s from '../../strong-strap/styles'

interface ISymbol {
    index: number
}

const Symbol = ({ index }: ISymbol) => {
    const c = '&#' + index.toString() + ';'
    return (
        <div title={c} style={{ margin: '5px', fontSize: 'larger' }} dangerouslySetInnerHTML={{ __html: c }}></div>
    )
}

const SymbolsPage = () => {
    const pageSize = 500
    const [page, setPage] = useState(0)
    const [symbols, setSymbols] = useState<number[]>([])

    useEffect(() => {
        if (page < 0) setPage(0)
        const a: number[] = []
        const start = page * pageSize
        const end = start + pageSize
        for (let index = start; index < end; index++) {
            a.push(index)
        }
        setSymbols(a)
    }, [page])

    const changePage = (direction: number) => {
        let newPage = page + direction
        if (newPage < 0) newPage = 0
        setPage(newPage)
    }

    return (
        <Layout>
            <Container>
                <Row>
                    <Col>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <FloatingTextBox type='number' label={'Jump to Page'} value={page.toString()} onChange={(e) => { setPage(parseInt(e.target.value)) }} />&nbsp;&nbsp;
                            <Btn statedStyles={s.BtnSuccessStates} onClick={() => { changePage(-1) }}>Prev</Btn>&nbsp;&nbsp;
                            <Btn statedStyles={s.BtnSuccessStates} onClick={() => { changePage(1) }}>Next</Btn>&nbsp;&nbsp;
                            <span>{page * pageSize} - {((page * pageSize) + pageSize) - 1}</span>&nbsp;&nbsp;
                            <span style={{ fontSize: 'x-large' }}>&#127917;&#127902;&#127917;&nbsp;&nbsp;</span>
                        </div>
                    </Col>
                </Row>
            </Container>
            <br />
            <Container size={Size.fluid}>
                <Row>
                    <Col>
                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                            {
                                symbols.map(s => <Symbol key={s} index={s} />)
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default SymbolsPage
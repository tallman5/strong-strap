import React, { useReducer } from 'react'
import Layout from '../../components/layout'
import { Col, Container, InfiniteScroll, Row } from '../../strong-strap'

type Action = {
    type: string
    payload: any
}
const initialState = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function itemsReducer(state = initialState, action: Action) {
    switch (action.type) {
        case 'add':
            const start = state.length
            const end = start + 10
            const newItems = []
            for (let index = start; index < end; index++) {
                newItems.push(index)
            }
            return [...state, ...newItems]
        default:
            throw new Error();
    }
}

const ScratchIndex = () => {
    const [state, dispatch] = useReducer(itemsReducer, initialState)

    const loadMoreItems = () => {
        dispatch({
            type: 'add',
            payload: 0
        })
    }

    console.log('Length: ' + state.length)

    return (
        <Layout>
            <Container>
                <Row>
                    <Col><h1>Scratch</h1></Col>
                </Row>
                <Row>
                    <Col>
                        <InfiniteScroll hitBottom={loadMoreItems}>
                            {
                                state.map((i) => {
                                    return (
                                        <div key={i} style={{ margin: '40px', border: '1px solid red' }}>{i}</div>
                                    )
                                })
                            }
                        </InfiniteScroll>
                    </Col>
                </Row>
            </Container>
        </Layout >
    )
}

export default ScratchIndex
import React, { useReducer } from 'react'
import Layout from '../../components/layout'
import { InfiniteScroll } from '../../strong-strap'

type Action = {
    type: string
    payload: any
}
const initialState = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

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

const InfiniteScrollSample = () => {
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
            <div className='container'>
                <div className='row'>
                    <div className='col'><h1>Infinite Scroll Sample</h1></div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <InfiniteScroll hitBottom={loadMoreItems} padding={500}>
                            {
                                state.map((i) => {
                                    return (
                                        <div key={i} style={{ margin: '40px', border: '1px solid red' }}>{i}</div>
                                    )
                                })
                            }
                        </InfiniteScroll>
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default InfiniteScrollSample
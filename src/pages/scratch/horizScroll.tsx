import React from 'react'
import Layout from '../../components/layout'
import { HorizontalScroll, Icon, KnownIcon } from '../../strong-strap'

const HorizScroll = () => {
    return (
        <Layout>
            <div className='container'>
                <div className='row'>
                    <div className='col'><h1>Horizontal Scroll</h1></div>
                </div>
                <div className='row'>
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
                </div>
            </div>
        </Layout >
    )
}

export default HorizScroll

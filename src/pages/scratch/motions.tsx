import React, { useState } from 'react'
import Layout from '../../components/layout'
import { Carousel, Expander } from '../../strong-strap'


const MotionSamples = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    const imageUrls: string[] = [
        'https://image.tmdb.org/t/p/w780/apBUC70udhxoLzXo7DqclQ6gcXo.jpg',
        'https://image.tmdb.org/t/p/w780/v3Mc67AUN77h0BR9GymiPs4x96H.jpg',
        'https://image.tmdb.org/t/p/w780/2Kz2sHM3NDl0EVDXHGwMT8UrknZ.jpg',
    ]

    return (
        <Layout>
            <div className='container'>
                <div className='row'>
                    <div className='col'><h1>Motion Tests</h1></div>
                </div>
                <br />
                <div className='row'>
                    <div className='col'>
                        <Expander isExpanded={isExpanded}>
                            <Carousel aspectRatio='40%'>
                                {
                                    imageUrls.map(m => {
                                        return (
                                            <img key={m} src={m} />
                                        )
                                    })
                                }
                            </Carousel>
                        </Expander>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col'>
                        <button onClick={() => { setIsExpanded(!isExpanded) }}>Toggle Item</button>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col'>
                        <div style={{ border: '1px solid red', padding: '50px' }}>Content Below</div>
                    </div>
                </div>
                <br />
                <div className='row'>
                    <div className='col'>
                        <button onClick={() => { setIsExpanded(!isExpanded) }}>Toggle Item</button>
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default MotionSamples

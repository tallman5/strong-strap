import React, { useState } from 'react'
import Layout from '../../components/layout'
import { Icon, KnownIcon } from '../../strong-strap'

const ScratchIndex = () => {
    const [isChecked, setIsChecked] = useState(false)

    return (
        <Layout>
            <div className='container'>
                <div className='row'>
                    <div className='col'><h1>Icons</h1></div>
                </div>
                <div className='row'>
                    {
                        Object.keys(KnownIcon).filter(isNaN as any).map((is, index: number) => {
                            return (
                                <div key={is}>
                                    <div style={{ margin: '10px' }}>
                                        <Icon fill='#777' width={'32px'} knownIcon={index as KnownIcon} />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <br />
                <div className='row'>
                    <div className='col'>
                        {/* <IconToggle onClick={(e: { stopPropagation: () => any }) => e.stopPropagation()} onChange={(e: any) => { setIsChecked(!isChecked) }}
                            checkedIcon={KnownIcon.ThumbUpFill} uncheckedIcon={KnownIcon.ThumbUp} width={'32px'} checkedFill='green'
                            checked={isChecked} title="I really liked this!" name={'twoThumbs'} /> */}
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default ScratchIndex

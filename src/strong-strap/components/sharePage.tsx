import React, { useEffect, useState } from 'react'
import { isBrowser } from '../utilities'

export interface ISharePage {
    text: string
    title: string
    url: string
}

export const SharePage = ({ text, title, url }: ISharePage) => {
    const [divId] = useState('thisDivId')

    useEffect(() => {
        if (!isBrowser) return
        if (navigator.canShare()) {
            // console.log('Can share')
        }
        else {
            // console.log("Can't share")
        }

    }, [])

    return (
        <div id={divId}>(Sharing)</div>
    )
}

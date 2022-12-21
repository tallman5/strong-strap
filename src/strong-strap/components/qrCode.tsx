import React, { useEffect } from 'react';
import qrcode from 'qrcode'

export interface IQrCode {
    id: string
    text: string
    width?: number
}

export const QrCode = ({ id, width = 150, text }: IQrCode) => {

    useEffect(() => {
        if (text && text.length > 0) {
            const options: qrcode.QRCodeRenderersOptions = {
                width
            }
            qrcode.toCanvas(document.getElementById(id), text, options, function (error) {
                if (error) console.error(error)
            })
        }
    }, [id, width, text])

    if (text && text.length > 0) {
        return (<canvas id={id} />)
    }

    return null
}

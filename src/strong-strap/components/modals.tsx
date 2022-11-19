import React, { ComponentPropsWithoutRef, useEffect, useState } from "react"
import * as s from '../styles'
import { useMedia } from "../utilities"

interface IModalBody extends ComponentPropsWithoutRef<'div'> { }

export const ModalBody = ({ children }: IModalBody) => {
    return (
        <div style={s.ModalBody}>{children}</div>
    )
}

interface IModalContent extends ComponentPropsWithoutRef<'div'> { }

export const ModalContent = ({ children }: IModalContent) => {
    return (
        <div style={s.ModalContent}>{children}</div>
    )
}

interface IModalDialog extends ComponentPropsWithoutRef<'div'> { }

export const ModalDialog = ({ children }: IModalDialog) => {
    // TODO: Sizing doesn't go to full width when below 576px
    const [style, setStyle] = useState(s.ModalDialog)
    const width = useMedia(['(min-width: 576px)'], [1], 0)
    useEffect(() => {
        if (width === 0)
            setStyle({
                ...s.ModalDialog,
                width: '100%',
                margin: '.75rem'
            })
        else
            setStyle({
                ...s.ModalDialog,
                width: '500px'
            })
    }, [width])
    return (
        <div style={style}>{children}</div>
    )
}

interface IModalFooter extends ComponentPropsWithoutRef<'div'> { }

export const ModalFooter = ({ children }: IModalFooter) => {
    return (
        <div style={s.ModalFooter}>{children}</div>
    )
}

interface IModalHeader extends ComponentPropsWithoutRef<'div'> { }

export const ModalHeader = ({ children }: IModalHeader) => {
    return (
        <div style={s.ModalHeader}>{children}</div>
    )
}

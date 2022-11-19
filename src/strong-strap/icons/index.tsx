import React, { ComponentPropsWithoutRef } from 'react'

export enum IconShape {
    CameraVideoFill, CameraVideoFillSlash, CaretDownFill, Eye, EyeFill, Film, List, MagnifyingGlass, PersonCircle
}

interface IIcon extends ComponentPropsWithoutRef<'svg'> {
    iconShape: IconShape,
    size: number
}

export const Icon = ({ iconShape, size }: IIcon) => {
    switch (iconShape) {
        case IconShape.CameraVideoFill:
            return <CameraVideoFill height={size} width={size} />
        case IconShape.CameraVideoFillSlash:
            return <CameraVideoFillSlash height={size} width={size} />
        case IconShape.CaretDownFill:
            return <CaretDownFill height={size} width={size} />
        case IconShape.Eye:
            return <Eye height={size} width={size} />
        case IconShape.EyeFill:
            return <EyeFill height={size} width={size} />
        case IconShape.Film:
            return <Film height={size} width={size} />
        case IconShape.List:
            return <List height={size} width={size} />
        case IconShape.MagnifyingGlass:
            return <MagnifyingGlass height={size} width={size} />
        case IconShape.PersonCircle:
            return <PersonCircle height={size} width={size} />
    }

    return null
}

interface ISvg extends ComponentPropsWithoutRef<'svg'> { }

export const CameraVideoFill = ({ color = 'currentColor', height = 16, width = 16 }: ISvg) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={color} viewBox='0 0 16 16'>
            <path fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z" />
        </svg>
    )
}

export const CameraVideoFillSlash = ({ color = 'currentColor', height = 16, width = 16 }: ISvg) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={color} viewBox='0 0 16 16'>
            <path fillRule="evenodd" d="M10.961 12.365a1.99 1.99 0 0 0 .522-1.103l3.11 1.382A1 1 0 0 0 16 11.731V4.269a1 1 0 0 0-1.406-.913l-3.111 1.382A2 2 0 0 0 9.5 3H4.272l6.69 9.365zm-10.114-9A2.001 2.001 0 0 0 0 5v6a2 2 0 0 0 2 2h5.728L.847 3.366zm9.746 11.925-10-14 .814-.58 10 14-.814.58z" />
        </svg>
    )
}

export const CaretDownFill = ({ color = 'currentColor', height = 16, width = 16 }: ISvg) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={color} viewBox='0 0 16 16'>
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
    )
}

export const Eye = ({ color = 'currentColor', height = 16, width = 16 }: ISvg) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={color} viewBox='0 0 16 16'>
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
        </svg>
    )
}

export const EyeFill = ({ color = 'currentColor', height = 16, width = 16 }: ISvg) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={color} viewBox='0 0 16 16'>
            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
        </svg>
    )
}

export const Film = ({ color = 'currentColor', height = 16, width = 16 }: ISvg) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={color} viewBox='0 0 16 16'>
            <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z" />
        </svg>
    )
}

export const List = ({ color = 'currentColor', height = 16, width = 16 }: ISvg) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={color} viewBox='0 0 16 16'>
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg>
    )
}

export const MagnifyingGlass = ({ color = 'currentColor', height = 16, width = 16 }: ISvg) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={color} viewBox='0 0 16 16'>
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
    )
}

export const PersonCircle = ({ color = 'currentColor', height = 16, width = 16 }: ISvg) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill={color} viewBox='0 0 16 16'>
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
        </svg>
    )
}

import React, { ComponentPropsWithoutRef, useState } from "react";
import { Icon, KnownIcon } from "../icons";
import * as s from '../styles'
import { AspectRatioContainer } from "./aspectRatioContainer";

interface IImagePlaceholder extends ComponentPropsWithoutRef<'img'> {
    alt: string
    aspectRatio?: string
    backgroundColor?: string
    fillColor?: string
    knownIcon?: KnownIcon
    src: string
}

export const ImagePlaceholder = ({ alt, aspectRatio = '33%', backgroundColor = '#777',
    fillColor = '#888', knownIcon = KnownIcon.Film, src, ...rest }: IImagePlaceholder) => {

    const [imgLoaded, setImageLoaded] = useState(false)

    return (
        <AspectRatioContainer aspectRatio={aspectRatio}>
            <div style={{ ...s.AspectRatioItem, backgroundColor, padding: '10%' }}>
                <Icon knownIcon={knownIcon} fill={fillColor} />
            </div>
            <img hidden={!imgLoaded} src={src} alt={alt} style={s.AspectRatioItem}
                onLoad={() => { setImageLoaded(true) }} {...rest} />
        </AspectRatioContainer>
    )
}

import React, { useEffect } from 'react'

export type HeaderInfo = {
    baseUrl: string,
    description: string,
    imageAlt: string,
    relativeImageUrl: string,
    relativePageUrl: string,
    siteName: string,
    title: string,
    twitterName: string,
    type: string,
}

export function getHeaderTags(headerInfo: HeaderInfo) {
    const titleToUse = headerInfo.title + " | " + headerInfo.siteName
    const returnValue =
        <>
            <title data-ss-head={true}>{titleToUse}</title>
            <link data-ss-head={true} rel="canonical" href={headerInfo.baseUrl + headerInfo.relativePageUrl} />
            <meta data-ss-head={true} name="description" content={headerInfo.description} />
            <meta data-ss-head={true} name="image" content={headerInfo.baseUrl + headerInfo.relativeImageUrl} />

            <meta data-ss-head={true} property="og:url" content={headerInfo.baseUrl + headerInfo.relativePageUrl} />
            <meta data-ss-head={true} property="og:type" content={headerInfo.type} />
            <meta data-ss-head={true} property="og:title" content={titleToUse} />
            <meta data-ss-head={true} property="og:description" content={headerInfo.description} />
            <meta data-ss-head={true} property="og:image" content={headerInfo.baseUrl + headerInfo.relativeImageUrl} />

            <meta data-ss-head={true} name="twitter:card" content="summary_large_image" />
            <meta data-ss-head={true} name="twitter:creator" content={headerInfo.twitterName} />
            <meta data-ss-head={true} name="twitter:title" content={titleToUse} />
            <meta data-ss-head={true} name="twitter:description" content={headerInfo.description} />
            <meta data-ss-head={true} name="twitter:image" content={headerInfo.baseUrl + headerInfo.relativeImageUrl} />
        </>
    return returnValue
}

export interface ISeo {
    headerInfo: HeaderInfo
}

export const Seo = ({ headerInfo }: ISeo) => {
    const imageUrl = headerInfo.baseUrl + headerInfo.relativeImageUrl
    const pageUrl = headerInfo.baseUrl + headerInfo.relativePageUrl
    const titleToUse = headerInfo.title + " | " + headerInfo.siteName

    useEffect(() => {
        const tagsToAdd = [
            { tag: 'title', a1: undefined, a1v: undefined, a2: undefined, a2v: undefined, innerHtml: titleToUse },
            { tag: 'link', a1: 'rel', a1v: 'canonical', a2: 'href', a2v: pageUrl, innerHtml: undefined },
            { tag: 'meta', a1: 'name', a1v: 'description', a2: 'content', a2v: headerInfo.description, innerHtml: undefined },
            { tag: 'meta', a1: 'name', a1v: 'image', a2: 'content', a2v: imageUrl, innerHtml: undefined },

            { tag: 'meta', a1: 'property', a1v: 'og:description', a2: 'content', a2v: headerInfo.description, innerHtml: undefined },
            { tag: 'meta', a1: 'property', a1v: 'og:image', a2: 'content', a2v: imageUrl, innerHtml: undefined },
            { tag: 'meta', a1: 'property', a1v: 'og:title', a2: 'content', a2v: titleToUse, innerHtml: undefined },
            { tag: 'meta', a1: 'property', a1v: 'og:type', a2: 'content', a2v: headerInfo.type, innerHtml: undefined },
            { tag: 'meta', a1: 'property', a1v: 'og:url', a2: 'content', a2v: pageUrl, innerHtml: undefined },

            { tag: 'meta', a1: 'property', a1v: 'twitter:card', a2: 'content', a2v: headerInfo.description, innerHtml: undefined },
            { tag: 'meta', a1: 'property', a1v: 'twitter:creator', a2: 'content', a2v: headerInfo.twitterName, innerHtml: undefined },
            { tag: 'meta', a1: 'property', a1v: 'twitter:description', a2: 'content', a2v: headerInfo.description, innerHtml: undefined },
            { tag: 'meta', a1: 'property', a1v: 'twitter:title', a2: 'content', a2v: titleToUse, innerHtml: undefined },
        ]

        tagsToAdd.forEach(toAdd => {
            const query = '' + toAdd.tag + '[' + toAdd.a1 + '="' + toAdd.a1v + '"]';
            let ele = document.head.querySelector(query);
            if (null === ele) {
                ele = document.createElement(toAdd.tag)
                document.head.appendChild(ele)
            }
            if (toAdd.a1)
                ele.setAttribute(toAdd.a1, toAdd.a1v)
            if (toAdd.a2)
                ele.setAttribute(toAdd.a2, toAdd.a2v)
            if (toAdd.innerHtml)
                ele.innerHTML = toAdd.innerHtml
            ele.setAttribute('data-ss-head', 'true')
        });

        return () => {
            const tags = document.head.querySelectorAll('[data-ss-head="true"]')
            tags.forEach(tag => {
                document.head.removeChild(tag)
            });
        }

    }, [headerInfo])

    return (
        <></>
    )
}

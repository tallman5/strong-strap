import React, { useEffect } from 'react'

export interface ISeo {
    description: string
    imageUrl: string
    pageUrl: string
    title: string
}

export const Seo = ({ description, imageUrl, pageUrl, title }: ISeo) => {
    useEffect(() => {
        const titleToUse = title + ' | kixvu.com'

        const tagsToAdd = [
            { tag: 'title', a1: undefined, a1v: undefined, a2: undefined, a2v: pageUrl, innerHtml: titleToUse },
            { tag: 'link', a1: 'rel', a1v: 'canonical', a2: 'href', a2v: pageUrl, innerHtml: undefined },
            { tag: 'meta', a1: 'name', a1v: 'description', a2: 'content', a2v: description, innerHtml: undefined },
            { tag: 'meta', a1: 'name', a1v: 'image', a2: 'content', a2v: imageUrl, innerHtml: undefined },
            { tag: 'meta', a1: 'property', a1v: 'og:description', a2: 'content', a2v: description, innerHtml: undefined },
            { tag: 'meta', a1: 'property', a1v: 'og:image', a2: 'content', a2v: imageUrl, innerHtml: undefined },
            { tag: 'meta', a1: 'property', a1v: 'og:title', a2: 'content', a2v: titleToUse, innerHtml: undefined },
            { tag: 'meta', a1: 'property', a1v: 'og:type', a2: 'content', a2v: 'website', innerHtml: undefined },
            { tag: 'meta', a1: 'property', a1v: 'og:url', a2: 'content', a2v: pageUrl, innerHtml: undefined },
            { tag: 'meta', a1: 'property', a1v: 'twitter:card', a2: 'content', a2v: description, innerHtml: undefined },
            { tag: 'meta', a1: 'property', a1v: 'twitter:creator', a2: 'content', a2v: 'kixvu.com', innerHtml: undefined },
            { tag: 'meta', a1: 'property', a1v: 'twitter:description', a2: 'content', a2v: description, innerHtml: undefined },
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
            ele.setAttribute('data-kv-head', 'true')
        });

        return () => {
            const tags = document.head.querySelectorAll('[data-kv-head="true"]')
            tags.forEach(tag => {
                document.head.removeChild(tag)
            });
        }

    }, [description, imageUrl, pageUrl, title])

    return (
        <></>
    )
}

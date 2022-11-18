import React, { useState, useEffect, CSSProperties, useRef } from 'react'

export const defaultQueries = [
    '(min-width: 1400px)', '(min-width: 1200px)', '(min-width: 992px)', '(min-width: 768px)', '(min-width: 576px)'
]

export function getHeaderTags(hi: HeaderInfo) {
    const returnValue =
        <>
            <title>{hi.title}</title>
            <link rel="canonical" href={hi.baseUrl + hi.relativePageUrl} />
            <meta name="description" content={hi.description} />
            <meta name="image" content={hi.baseUrl + hi.relativeImageUrl} />

            <meta property="og:url" content={hi.baseUrl + hi.relativePageUrl} />
            <meta property="og:type" content={hi.type} />
            <meta property="og:title" content={hi.title} />
            <meta property="og:description" content={hi.description} />
            <meta property="og:image" content={hi.baseUrl + hi.relativeImageUrl} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={hi.twitterName} />
            <meta name="twitter:title" content={hi.title} />
            <meta name="twitter:description" content={hi.description} />
            <meta name="twitter:image" content={hi.baseUrl + hi.relativeImageUrl} />
        </>
    return returnValue
}

export type HeaderInfo = {
    baseUrl: string,
    description: string,
    imageAlt: string,
    relativeImageUrl: string,
    relativePageUrl: string,
    title: string,
    twitterName: string,
    type: string,
}

export const isBrowser = typeof window !== "undefined" && window;

export const masonryQueries = [
    '(min-width: 1650px)', '(min-width: 1375px)', '(min-width: 1100px)', '(min-width: 825px)', '(min-width: 550px)'
]

export enum Size {
    sm, md, lg, xl, xxl, fluid
}

export enum UiFunction {
    Primary, Secondary, Success, Danger, Warning, Info, Light, Dark, Link
}

export function useColumnSizes(size: Size, colSpan: number) {
    const collapsedStyle: CSSProperties = {
        flexShrink: 0
    }

    const expandedStyle: CSSProperties = {
        flex: (colSpan > 0) ? '0 0 auto' : '1 0 auto',
        width: (colSpan > 0) ? (colSpan / 12) * 100 + '%' : 'auto',
    }

    switch (size) {
        case Size.fluid:
            return useMedia(defaultQueries, [collapsedStyle, collapsedStyle, collapsedStyle, collapsedStyle, collapsedStyle], collapsedStyle)
        case Size.xxl:
            return useMedia(defaultQueries, [expandedStyle, collapsedStyle, collapsedStyle, collapsedStyle, collapsedStyle], collapsedStyle)
        case Size.xl:
            return useMedia(defaultQueries, [expandedStyle, expandedStyle, collapsedStyle, collapsedStyle, collapsedStyle], collapsedStyle)
        case Size.lg:
            return useMedia(defaultQueries, [expandedStyle, expandedStyle, expandedStyle, collapsedStyle, collapsedStyle], collapsedStyle)
        case Size.md:
            return useMedia(defaultQueries, [expandedStyle, expandedStyle, expandedStyle, expandedStyle, collapsedStyle], collapsedStyle)
        default:
            return useMedia(defaultQueries, [expandedStyle, expandedStyle, expandedStyle, expandedStyle, expandedStyle], collapsedStyle)
    }
}

// export function useEventListener(eventName: string, handler, element) {
//     const savedHandler = useRef();
//     console.log(handler)
//     console.log(element)

//     useEffect(() => {
//         savedHandler.current = handler;
//     }, [handler]);

//     useEffect(() => {
//         let eleToUse = null
//         if (element) {
//             eleToUse = element
//         }
//         else {
//             if (isBrowser) {
//                 eleToUse = window
//             }
//         }
//         const isSupported = eleToUse && eleToUse.addEventListener;
//         if (!isSupported) return;
//         const eventListener = event => savedHandler.current(event);
//         eleToUse.addEventListener(eventName, eventListener);
//         return () => {
//             eleToUse.removeEventListener(eventName, eventListener);
//         };
//     }, [eventName, element]);
// };

export function useContainerSizes(size: Size) {
    switch (size) {
        case Size.fluid:
            return useMedia(defaultQueries, ['100%', '100%', '100%', '100%', '100%'], '100%')
        case Size.xxl:
            return useMedia(defaultQueries, ['1320px', '100%', '100%', '100%', '100%'], '100%')
        case Size.xl:
            return useMedia(defaultQueries, ['1320px', '1140px', '100%', '100%', '100%'], '100%')
        case Size.lg:
            return useMedia(defaultQueries, ['1320px', '1140px', '960px', '100%', '100%'], '100%')
        case Size.md:
            return useMedia(defaultQueries, ['1320px', '1140px', '960px', '720px', '100%'], '100%')
        default:
            return useMedia(defaultQueries, ['1320px', '1140px', '960px', '720px', '540px'], '100%')
    }
}

export function useMasonryColumns() {
    return useMedia(masonryQueries, [6, 5, 4, 3, 2], 1)
}

export function useMedia<T>(queries: string[], values: T[], defaultValue: T) {
    if (!isBrowser) return defaultValue

    const mediaQueryLists = queries.map((q) => window?.matchMedia(q));

    const getValue = () => {
        const index = mediaQueryLists.findIndex((mql) => mql.matches);
        return values?.[index] || defaultValue;
    };

    const [value, setValue] = useState<T>(getValue);

    useEffect(
        () => {
            const handler = () => setValue(getValue);
            mediaQueryLists.forEach((mql) => mql.addEventListener("change", handler));
            return () => mediaQueryLists.forEach((mql) => mql.removeEventListener("change", handler));
        }, []);

    return value;
}

export function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: isBrowser ? window.innerWidth : 1200,
        height: isBrowser ? window.innerHeight : 800,
    });

    function changeWindowSize() {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }

    useEffect(() => {
        window.addEventListener("resize", changeWindowSize);
        return () => { window.removeEventListener("resize", changeWindowSize); };
    }, []);

    return windowSize;
}

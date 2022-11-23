import React, { useState, useEffect, CSSProperties } from 'react'

export const defaultQueries = [
    '(min-width: 1400px)', '(min-width: 1200px)', '(min-width: 992px)', '(min-width: 768px)', '(min-width: 576px)'
]

export const emptyGuid = "00000000-0000-0000-0000-000000000000"

export async function executeFetchAsync(url: string, data: any, bearerToken: string) {
    if (!isBrowser) return

    const headers = new Headers();
    headers.set('method', (data) ? 'POST' : 'GET')
    headers.set("Content-Type", 'application/json')
    headers.set("contentType", 'application/x-www-form-urlencoded')
    if (bearerToken && bearerToken.length > 0)
        headers.set('Authorization', 'Bearer ' + bearerToken)

    const requestInit: RequestInit = {
        method: (data) ? 'POST' : 'GET',
        headers,
    }
    if (data)
        requestInit.body = JSON.stringify(data)

    const result = await fetch(url, requestInit)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            else {
                console.warn(response.json())
                return null
            }
        })
        .then(data => {
            if (!data) {
                console.warn("Connected, however no data from " + url)
                return null
            }
            if (data.result) {
                return data.result
            }
            return data
        })
        .catch(error => {
            console.warn(error);
            return null
        })

    return result
}

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

export function getStorageItem(key: string) {
    let returnValue = null;
    if (isBrowser) {
        const storageItem = window.localStorage.getItem(key);
        if (storageItem) {
            returnValue = JSON.parse(storageItem);
        }
    }
    return returnValue;
}

export function getUniqueList(arr1: any[], arr2: any[]) {
    const arr = (arr2) ? arr1.concat(arr2) : arr1
    const result = [];
    const map = new Map();

    for (const item of arr) {
        if (!map.has(item)) {
            map.set(item, true);
            result.push(item);
        }
    }

    return result;
}

export function getUniqueListBy(key: string, arr1: any[], arr2: any[]) {
    const arr = (arr2) ? arr1.concat(arr2) : arr1
    const result = [];
    const map = new Map();

    for (const item of arr) {
        if (!map.has(item[key])) {
            map.set(item[key], true);
            result.push(item);
        }
    }

    return result;
}

export const getUniqueValues = (items: any[], prop: string, removeEmpties: boolean = true) => {
    let returnValue = [...new Set(items.map((item) => item[prop]))]
    console.log(returnValue)
    if (removeEmpties === true)
        returnValue = returnValue.filter(i => (i && i.length > 0))
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

export function setStorageItem(key: string, obj: any) {
    const serializedObj = JSON.stringify(obj);
    window.localStorage.setItem(key, serializedObj);
}

export enum Size {
    sm, md, lg, xl, xxl, fluid
}

export const sumPropertyValue = (items: any[], prop: string) => items.reduce((a, b) => a + b[prop], 0);

export enum UiFunction {
    Primary, Secondary, Success, Danger, Warning, Info, Light, Dark, Link
}

export function useColumnSizes(size: Size, colSpan: number) {
    const collapsedStyle: CSSProperties = {
        flexShrink: 0,
        flexBasis: 'auto'
    }

    const expandedStyle: CSSProperties = {
        ...collapsedStyle,
        flexGrow: (colSpan > 0) ? '0' : '1',
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

export function useColumnWidths(width: number) {
    const queries: string[] = []
    const values: string[] = []

    for (let index = 10; index > 1; index--) {
        queries.push('(min-width: ' + index * width + 'px)')
        values.push(100 / index + '%')
    }

    return useMedia(queries, values, '100%')
}

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

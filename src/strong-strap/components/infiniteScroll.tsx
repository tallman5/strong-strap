import React, { ComponentPropsWithoutRef, useEffect } from "react";

interface IInfiniteScroll extends ComponentPropsWithoutRef<'div'> {
    hitBottom: any
    padding?: number
}

export const InfiniteScroll = ({ children, hitBottom, padding = 0 }: IInfiniteScroll) => {
    const timeToLoad = 'timeToLoad'

    useEffect(() => {
        function handleScroll(e: any) {
            const ttlDiv = document.getElementById(timeToLoad)
            if (!ttlDiv) return

            if (ttlDiv.offsetTop < (window.scrollY + window.innerHeight + padding)) {
                hitBottom()
            }
        }

        window.addEventListener('scroll', (e) => handleScroll(e))
        return window.removeEventListener('scroll', (e) => handleScroll(e))
    }, [])

    return (
        <div>
            <div>{children}</div>
            <div id={timeToLoad} style={{ textAlign: 'center' }}>&nbsp;</div>
        </div>
    )
}

export default InfiniteScroll
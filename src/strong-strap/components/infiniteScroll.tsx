import React, { ComponentPropsWithoutRef, useEffect } from "react";

interface IInfiniteScroll extends ComponentPropsWithoutRef<'div'> {
    hitBottom: any
}

export const InfiniteScroll = ({ children, hitBottom }: IInfiniteScroll) => {
    const timeToLoad = 'timeToLoad'

    useEffect(() => {
        function handleScroll(e: any) {
            const ttlDiv = document.getElementById(timeToLoad)
            if (!ttlDiv) return

            if (ttlDiv.offsetTop < (window.scrollY + window.innerHeight)) {
                hitBottom()
            }
        }

        window.addEventListener('scroll', (e) => handleScroll(e))
        return window.removeEventListener('scroll', (e) => handleScroll(e))
    }, [])

    return (
        <div>
            <div>{children}</div>
            <div id={timeToLoad} style={{ textAlign: 'center' }}>{timeToLoad}</div>
        </div>
    )
}

export default InfiniteScroll
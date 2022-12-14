import React, { ComponentPropsWithoutRef } from "react"

export interface IStringify extends ComponentPropsWithoutRef<'pre'> {
    o: any
}

export const Stringify = ({ o }: IStringify) => {
    return (
        <pre>{JSON.stringify(o, null, 2)}</pre>
    )
}

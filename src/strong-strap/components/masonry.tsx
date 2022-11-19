import React, { ComponentPropsWithoutRef, CSSProperties, ReactElement, useEffect, useState } from "react"
import * as s from '../styles'
import { useMasonryColumns } from "../utilities"

interface IMasonry extends ComponentPropsWithoutRef<'div'> { }

export const Masonry = ({ children }: IMasonry) => {
    const columnCount = useMasonryColumns()
    const [columns, setColumns] = useState<ReactElement[]>([])

    useEffect(() => {
        const newCols: ReactElement[] = []
        const colWidth = (100 / columnCount) + '%'
        const colStyle: CSSProperties = {
            ...s.MasonryCol,
            width: colWidth,
        }

        if (children) {
            const childArray = children as Array<ReactElement>

            for (let i = 0; i < columnCount; i++) {
                const rows: ReactElement[] = [];
                for (let j = i; j < childArray.length; j += columnCount) {
                    rows.push(
                        <div key={j} style={s.MasonryBrick}>
                            {childArray[j]}
                        </div>
                    )
                }
                newCols.push(<div key={i} style={colStyle}>{rows}</div>);
            }
            setColumns(newCols)
        }
        else {
            setColumns([])
        }
    }, [children, columnCount])

    return (
        <div style={s.Masonry}>
            {columns}
        </div>
    )
}

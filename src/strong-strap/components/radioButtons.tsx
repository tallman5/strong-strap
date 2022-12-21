import React, { useState } from 'react'
import { UiFunction } from '../utilities'

export interface IRadioButtons {
    defSelectedIndex: number
    description?: string
    groupName: string
    labels: string[]
    selectedIndexChanged?(newIndex: number): any
    uiFunction?: UiFunction
}

export const RadioButtons = ({ selectedIndexChanged, defSelectedIndex, description = "", groupName, labels, uiFunction = UiFunction.Info }: IRadioButtons) => {
    const [selectedIndex, setSelectedIndex] = useState(defSelectedIndex)

    const handleChange = (i: number) => {
        console.log('clicked: ' + groupName)
        setSelectedIndex(i)
        if (selectedIndexChanged)
            selectedIndexChanged(i)
    }

    return (
        <div className="btn-group" role="group" aria-label={description}>
            {
                labels.map((l, index) => {
                    const id = 'radioButton' + groupName + index
                    return (
                        <React.Fragment key={l}>
                            <input onChange={() => { handleChange(index) }} type="radio" className="btn-check" name={groupName} id={id} autoComplete="off" checked={index === selectedIndex} />
                            <label className={"btn btn-outline-" + uiFunction} htmlFor={id}>{l}</label>
                        </React.Fragment>
                    )
                })
            }
        </div>
    )
}

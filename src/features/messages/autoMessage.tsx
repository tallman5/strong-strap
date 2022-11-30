import React, { ComponentPropsWithoutRef, useEffect, useState } from "react";
import { deleteMessage, Message } from "./messageSlice";
import { useAppDispatch } from "../../context/store";
import { Alert, Btn, Expander, Icon, KnownIcon, TimeoutBar } from "../../strong-strap";

interface IAutoMessage extends ComponentPropsWithoutRef<'div'> {
    message: Message
}

const AutoMessage = ({ message }: IAutoMessage) => {
    const dispatch = useAppDispatch()
    const [isExpanded, setIsExpanded] = useState(true)

    const collapse = () => {
        setIsExpanded(false)
        window.setTimeout(() => {
            dispatch(deleteMessage(message.id))
        }, 200)
    }

    useEffect(() => {
        if (!message) return
        window.setTimeout(collapse, 5000)
    }, [message])

    return (
        <Expander isExpanded={isExpanded}>
            <Alert uiFunction={message.uiFunction}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ minWidth: '150px', flexGrow: 1, marginRight: '10px' }}>{message.title}</div>
                    <Btn type='button' onClick={() => { collapse() }} aria-label="Close" data-bs-dismiss="modal">
                        <Icon knownIcon={KnownIcon.XSquare} fill='#777' width={'32px'} />
                    </Btn>
                </div>
                {
                    (message.details)
                        ? <>
                            <hr />
                            <div>{message.details}</div>
                            <hr />
                        </>
                        : null
                }
                <TimeoutBar />
            </Alert>
        </Expander>
    )
}

export default AutoMessage
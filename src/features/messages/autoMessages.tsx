import React from "react";
import { useAppSelector } from "../../context/store";
import AutoMessage from "./autoMessage";
import { selectMessages } from "./messageSlice";

const AutoMessages = () => {
    const messageList = useAppSelector(selectMessages)
    if (messageList && messageList.length > 0)
        return (
            <div style={{ position: "fixed", zIndex: 999999, bottom: "20px", right: "20px" }}>
                {messageList.map(message => (
                    <AutoMessage key={message.id} message={message} />
                ))}
            </div>
        )

    return null
}

export default AutoMessages

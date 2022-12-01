import React from "react";
import { useAppSelector } from "../../context/store";
import AutoMessage from "./autoMessage";
import { selectMessages } from "./messageSlice";

const AutoMessages = () => {
    const messageList = useAppSelector(selectMessages)
    return (
        <div style={{ position: "fixed", zIndex: 999999, bottom: "20px", right: "20px" }}>
            {messageList.map(message => (
                <AutoMessage key={message.id} message={message} />
            ))}
        </div>
    )
}

export default AutoMessages

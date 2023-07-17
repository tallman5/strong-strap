import React from "react";
import Layout from "../../components/layout";
import { addMessage, clearMessages, deleteMessage, Message } from "../../features/messages/messageSlice";
import { useAppDispatch } from "../../context/store";
import {  UiFunction } from "../../strong-strap";
import AutoMessages from "../../features/messages/autoMessages";

const MessagesPage = () => {
    const dispatch = useAppDispatch()

    const addClicked = () => {
        const msg: Message = {
            uiFunction: UiFunction.Success,
            details: "These are some longer details to show",
            displayTimeout: 5000,
            id: 0,
            title: "Success!"
        }
        dispatch(addMessage(msg))
    }

    return (
        <Layout>
            <div className='container'>
                <div className='row'>
                    <div className='col'><h1>Messages</h1></div>
                </div>
                <br />
                <div className='row'>
                    <div className='col'>
                        <h2>All Messages</h2>
                        <button className="btn btn-primary" onClick={() => { addClicked() }}>Add</button><br /><br />
                        <button className="btn btn-danger" onClick={() => { dispatch(deleteMessage(1)) }}>Delete #1</button><br /><br />
                        <button className="btn btn-warning" onClick={() => { dispatch(clearMessages()) }}>Clear All</button><br /><br />
                    </div>
                </div>
            </div>
            <AutoMessages />
        </Layout>
    )
}

export default MessagesPage
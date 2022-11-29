import React from "react";
import Layout from "../../components/layout";
import { addMessage, clearMessages, deleteMessage, Message, selectMessages } from "../../features/messages/messageSlice";
import { useAppDispatch, useAppSelector } from "../../context/store";
import { Btn, Col, Container, Row, Stringify, UiFunction } from "../../strong-strap";
import * as s from '../../strong-strap/styles'
import AutoMessages from "../../features/messages/autoMessages";

const MessagesPage = () => {
    const dispatch = useAppDispatch()
    const allMessages = useAppSelector(selectMessages)

    const addClicked = () => {
        const msg: Message = {
            uiFunction: UiFunction.Success,
            details: "These are some longer details to show",
            displayTimeout: 500,
            id: 0,
            title: "Success!"
        }
        dispatch(addMessage(msg))
    }

    return (
        <Layout>
            <Container>
                <Row>
                    <Col><h1>Messages</h1></Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <h2>All Messages</h2>
                        <Stringify o={allMessages} />
                    </Col>
                    <Col>
                        <Btn statedStyles={s.BtnSuccessStates} onClick={() => { addClicked() }}>Add</Btn><br /><br />
                        <Btn statedStyles={s.BtnSuccessStates} onClick={() => { dispatch(deleteMessage(1)) }}>Delete #1</Btn><br /><br />
                        <Btn statedStyles={s.BtnSuccessStates} onClick={() => { dispatch(clearMessages()) }}>Clear All</Btn><br /><br />
                    </Col>
                </Row>
            </Container>
            <AutoMessages />
        </Layout>
    )
}

export default MessagesPage
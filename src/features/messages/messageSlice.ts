import { createSelector, createSlice } from "@reduxjs/toolkit"
import { UiFunction } from "../../strong-strap"
import { RootState } from "../../context/store"

export type Message = {
    uiFunction: UiFunction
    details: string
    displayTimeout: number
    id: number
    title: string
}

export type MessagesState = {
    list: Message[]
}

const initialState: MessagesState = {
    list: []
}

export const messagesSlice = createSlice({
    name: 'messages',
    initialState,
    reducers: {
        addMessage: (state: MessagesState, action) => {
            let newId = Math.max(...state.list.map(o => o.id), 0)
            newId++
            action.payload.id = newId
            state.list.push(action.payload)
        },
        clearMessages: (state) => {
            state.list = [];
        },
        deleteMessage: (state: MessagesState, action) => {
            state.list = state.list.filter(message => action.payload !== message.id)
        },
    },
});

// Base selectors
export const selectMessagesBase = (state: RootState) => state.messages.list;

// Reselectors
export const selectMessages = createSelector(selectMessagesBase, (items) => items)

// Main Exports
export const { addMessage, clearMessages, deleteMessage } = messagesSlice.actions;
export default messagesSlice.reducer;

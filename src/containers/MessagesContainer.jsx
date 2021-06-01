import React, {useRef, useEffect} from 'react';
import {connect} from "react-redux";

import {Messages} from "../components";
import {messagesActions} from "../redux/actions";
import socket from "../core/socket";

const MessagesContainer = ({messages = [], scrollViewRef, currentDialogId, fetchMessages, addMessage, isLoading, currentUser}) => {
    useEffect(() => {
        if (currentDialogId) {
            fetchMessages(currentDialogId);
        }
    }, [currentDialogId, fetchMessages]);

    const onNewMessage = (messageJSON) => {
        const message = JSON.parse(messageJSON);
        addMessage(message);
    }

    useEffect(() => {
        socket.on("SERVER:MESSAGE_CREATED", (messageJson) => onNewMessage(messageJson));
        return  () => {
            socket.removeAllListeners('SERVER:MESSAGE_CREATED');
        };
    }, [addMessage]);

    return (
        <Messages items={messages} user={currentUser} scrollViewRef={scrollViewRef} />
    );
}

export default connect(({messages, dialogs, users}) => ({
    currentDialogId: dialogs.currentDialogId,
    messages: messages.items,
    isLoading: messages.isLoading,
    currentUser: users.data
}), messagesActions)(MessagesContainer);

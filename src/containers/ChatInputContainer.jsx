import React, {useRef, useState} from 'react';
import {connect} from "react-redux";
import {Keyboard} from 'react-native';
import {ChatInput} from "../components";
import {messagesActions} from "../redux/actions";

const ChatInputContainer = ({fetchSendMessage, currentDialogId, scrollViewRef, inputRef}) => {
    const [messageValue, setMessageValue] = useState("");
    return (
        <ChatInput messageValue={messageValue}
                   setMessageValue={setMessageValue}
                   inputRef={inputRef}
                   scrollViewRef={scrollViewRef}
                   onSendMessage={() => {
                       if (messageValue) {
                           const messageData = {
                               text: messageValue,
                               dialog_id: currentDialogId
                           };
                           fetchSendMessage(messageData).then(() => {
                               setMessageValue("");
                               Keyboard.dismiss();
                           });
                       }
                   }}/>
    );
}

export default connect(({dialogs}) => ({currentDialogId: dialogs.currentDialogId}), messagesActions)(ChatInputContainer);

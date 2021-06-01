import React, {useEffect, useRef} from 'react';
import {KeyboardAvoidingView} from "react-native"
import {connect} from "react-redux";
import {Status, Messages, ChatInput} from "../containers";
import {messagesActions} from "../redux/actions";

const MessageScreen = ({navigation, setMessages}) => {
    const scrollViewRef = useRef();
    const inputRef = useRef();
    useEffect(() =>
            navigation.addListener('beforeRemove', () => {
                setMessages([]);
            }),
        [navigation]
    );
    return (
        <KeyboardAvoidingView behavior="height" keyboardVerticalOffset={0}>
            <Status/>
            <Messages scrollViewRef={scrollViewRef}/>
            <ChatInput inputRef={inputRef} scrollViewRef={scrollViewRef}/>
        </KeyboardAvoidingView>
    );
}

export default connect(({dialogs}) => ({currentDialogId: dialogs.currentDialogId}), messagesActions)(MessageScreen);

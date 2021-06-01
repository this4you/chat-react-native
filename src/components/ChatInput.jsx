import React, {useRef} from 'react';
import {StyleSheet, TextInput} from "react-native";
import {Item, Input} from 'native-base';
import {IconButton, Colors} from "react-native-paper";
import styled from "styled-components/native";
import SyncStorage from 'sync-storage';

const ChatInput = ({messageValue, setMessageValue, onSendMessage, inputRef, scrollViewRef}) => {
    return (
        <ChatInputContainer>
            <IconButton
                icon="file"
                size={27}
                color={Colors.grey600}
                onPress={() => {
                    SyncStorage.set('foo', 'bar');
                }}
            />
            <Item rounded style={styles.inputText}>
                <Input ref={inputRef} placeholder='Сообщение...' value={messageValue} onFocus={()=> {
                    this.scrollViewRef = scrollViewRef;
                    setTimeout(() => {
                        this.scrollViewRef.current.scrollToEnd({animated: false})
                    }, 100);
                }}
                       onChangeText={(message) => setMessageValue(message)}/>
            </Item>
            <IconButton
                icon="send"
                size={27}
                color={Colors.blueA200}
                onPress={() => {
                    onSendMessage();
                }}
            />
        </ChatInputContainer>
    );
}
const styles = StyleSheet.create({
    inputText: {
        width: '76%'
    }
});

const ChatInputContainer = styled.TouchableOpacity`
    padding-top: 10px;
    justify-content: space-around;
    flex-direction: row;
`;

export default ChatInput;

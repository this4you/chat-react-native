import React, {useRef} from 'react';
import {StyleSheet, KeyboardAvoidingView} from "react-native";
import { Item, Input } from 'native-base';
import {IconButton, Colors } from "react-native-paper";
import {Message} from "../components";
import styled from "styled-components/native";
const MessageScreen = () => {
    const scrollViewRef = useRef();
    return (
        <KeyboardAvoidingView behavior="height" keyboardVerticalOffset={5}>
            <HeaderContainer>
                <HeaderView/>
                <InfoContainer>
                    <FullName>Влад Мертвиченко</FullName>
                    <Status>онлайн</Status>
                </InfoContainer>
                <AvatarContainer>
                    <Avatar source={{
                        uri: 'https://png.pngtree.com/png-vector/20191018/ourlarge/pngtree-cute-dolphin-avatar-with-a-yellow-background-png-image_1770344.jpg'
                    }}/>
                </AvatarContainer>
            </HeaderContainer>
                <MessagesContainer ref={scrollViewRef}
                                   onContentSizeChange={() => scrollViewRef.current.scrollToEnd({animated: true})}>
                    <Message text={"Привет, как твои дела? Что будешь делать на выходные, может сходим в кино?=)"}
                             isMe/>
                    <Message text={"Ты тут?"} isMe/>
                    <Message text={"Привет! Я супер, очень рад тебя слышать!"}/>
                    <Message text={"Кончено, буду рад тебя видеть!"}/>
                    <Message text={"Как тебе последние Мстители?"} isMe/>
                    <Message text={"Что думаешь на счет Железного человека?"} isMe/>
                    <Message
                        text={"Мне очень понравилось, круты реплики главных актеров и очень офигенная игра, все супер!!"}/>
                    <Message text={"А как тебе Шерлок?"}/>
                    <Message text={"ОФИГЕННО!"} isMe/>
                </MessagesContainer>
                <ChatInputContainer>
                    <IconButton
                        icon="file"
                        size={27}
                        color={Colors.grey600}
                        onPress={() => console.log('Pressed')}
                    />
                    <Item rounded style={styles.inputText}>
                        <Input placeholder='Сообщение...'/>
                    </Item>
                    <IconButton
                        icon="send"
                        size={27}
                        color={Colors.blueA200}
                        onPress={() => console.log('Pressed')}
                    />
                </ChatInputContainer>
        </KeyboardAvoidingView>

    );
}
const styles = StyleSheet.create({
    inputText: {
        width: '76%'
    }
});

const ChatInputContainer = styled.View`
    padding-top: 10px;
    justify-content: space-around;
    flex-direction: row;
`;

const MessagesContainer = styled.ScrollView`
    max-height: 80%;
`;
const InfoContainer = styled.View`
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`;

const AvatarContainer = styled.View`
    width: 23%;
    justify-content: flex-end;
    flex-direction: row;
`;

const Avatar = styled.Image`
    margin-right: 10px;
    border-radius: 50px;
    width: 40px;
    height: 40px;
`;

const Status = styled.Text``;
const FullName = styled.Text`
    font-size: 17px;
    font-weight: 600;
`;
const HeaderContainer = styled.View`
    background: white;
    height: 90px
    padding-top: 45px;
    justify-content: space-between;
    flex-direction: row;
`;
const HeaderView = styled.View`
    width: 23%;
`;

export default MessageScreen;

import React from 'react';
import {Text, View, ScrollView} from "react-native";
import {Message} from "../components";

const MessageScreen = () => {
    return (
        <ScrollView style={{ marginTop: 100 }}>
            <Message text={"Привет, как твои дела? Что будешь делать на выходные, может сходим в кино?=)"} isMe />
            <Message text={"Ты тут?"} isMe />
            <Message text={"Привет! Я супер, очень рад тебя слышать!"}/>
            <Message text={"Кончено, буду рад тебя видеть!"}/>
            <Message text={"Как тебе последние Мстители?"} isMe />
            <Message text={"Что думаешь на счет Железного человека?"} isMe />
            <Message text={"Мне очень понравилось, круты реплики главных актеров и очень офигенная игра, все супер!!"}/>
            <Message text={"А как тебе Шерлок?"}/>
            <Message text={"ОФИГЕННО!"} isMe />
        </ScrollView>
    );
}

export default MessageScreen;

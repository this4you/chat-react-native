import React, {Component, useState} from 'react';
import {Alert, Button, TextInput, View, StyleSheet, Text} from 'react-native';
import styled from 'styled-components/native';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';
import parseISO from 'date-fns/parseISO';

const getMessageTime = createdAt => {
    if (createdAt) {
        createdAt = parseISO(createdAt);
        if (isToday(createdAt)) {
            return format(createdAt, 'HH:mm');
        } else {
            return format(createdAt, 'dd.MM.yyyy');
        }
    }
};


const DialogItem = ({_id, isMe, currentDialogId, partner, lastMessage, userId, onSelect}) => {
    return (
        <DialogItemComponent>
            <Avatar source={{
                // uri: 'https://png.pngtree.com/png-vector/20191018/ourlarge/pngtree-cute-dolphin-avatar-with-a-yellow-background-png-image_1770344.jpg'
                uri: partner.avatar
            }}/>
            <View>
                <FullName>{partner.fullName}</FullName>
                <GrayText>{lastMessage.text}</GrayText>
            </View>
            <DialogInfo>
                <DialogDate>{getMessageTime(lastMessage && lastMessage.createdAt)}</DialogDate>
                <MessagesCount><MessagesCountText>2</MessagesCountText></MessagesCount>
            </DialogInfo>
        </DialogItemComponent>
    );
}
export default DialogItem;

const DialogItemComponent = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    padding: 20px 0;
    border-bottom-width: 1px;
    border-bottom-color: #f3f3f3;
`;

const DialogInfo = styled.View`
    flex: 1;
    align-items: flex-end;
    margin-right: 4px
`;
const DialogDate = styled.Text`
    font-size: 13px
    `;
const MessagesCountText = styled.Text`
    text-align: center;
    height: 100%;
    width: 100%;
    line-height: 25px;
    color: white;
`;
const MessagesCount = styled.View`
    margin-top: 10px;
    border-radius: 20px;
    background: #418fff;
    font-weight: 600;
    font-size: 14px;
    width: 25px;
    height: 25px
`;
const GrayText = styled.Text`
    font-size: 16px;
    color: #8b979f;
`;

const FullName = styled.Text`
    font-weight: 600;
    font-size: 16px;
`;

const Avatar = styled.Image`
    margin-right: 11px;
    margin-left: 11px;
    border-radius: 50px;
    width: 60px;
    height: 60px;
`;

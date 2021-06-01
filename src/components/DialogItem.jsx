import React, {Component, useState} from 'react';
import {Alert, Button, TextInput, View, StyleSheet, Text} from 'react-native';
import styled from 'styled-components/native';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';
import parseISO from 'date-fns/parseISO';
import getAvatarColor from '../utils/getAvatarColor';
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


const DialogItem = ({_id, isMe, partner, lastMessage, onOpenDialog}) => {
    const avatarColors = getAvatarColor(partner.fullName[0].toUpperCase());
    return (
        <DialogItemComponent onPress={onOpenDialog}>
            <Avatar
                style={{
                    backgroundColor: avatarColors.background
                }}
            >
                <Letter style={{ color: avatarColors.color }}>
                    {partner.fullName[0].toUpperCase()}
                </Letter>
                {partner.isOnline && <Online/>}
            </Avatar>
            <LastMessage>
                <FullName>{partner.fullName}</FullName>
                <GrayText>{isMe ? `Вы: ${lastMessage.text}` : lastMessage.text}</GrayText>
            </LastMessage>
            <DialogInfo>
                <DialogDate>{getMessageTime(lastMessage && lastMessage.createdAt)}</DialogDate>
                <MessagesCount><MessagesCountText>1</MessagesCountText></MessagesCount>
            </DialogInfo>
        </DialogItemComponent>
    );
}
export default DialogItem;
const Online = styled.View`
    width: 20px;
    height: 20px;
    bottom: -1px;
    right: 0;
    border: 3px solid #fff;
    position: absolute;
    background: #00c980;
    border-radius: 20px;
`;
const DialogItemComponent = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    padding: 20px 0;
    border-bottom-width: 1px;
    border-bottom-color: #f3f3f3;
`;
const LastMessage = styled.View`
    max-width: 225px;
`;
const DialogInfo = styled.View`
    flex: 1;
    align-items: flex-end;
    margin-right: 4px
`;
const DialogDate = styled.Text`
    font-size: 12px
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
    max-height: 30px;
`;

const FullName = styled.Text`
    font-weight: 600;
    font-size: 16px;
`;

const Avatar = styled.View`
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    margin-right: 11px;
    margin-left: 11px;
    border-radius: 50px;
    width: 60px;
    height: 60px;
`;

const Letter = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-top: -1px;
`;

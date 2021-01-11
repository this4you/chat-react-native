import React from 'react';
import {Text, View} from "react-native";
import styled from "styled-components/native";

const Message = ({text, isMe}) => {
    return (
        <MessageContainer isMe={isMe}>
            <BubbleContainer isMe={isMe}>
                <MessageText isMe={isMe}>{text}</MessageText>
            </BubbleContainer>
        </MessageContainer>
    );
}
const MessageText = styled.Text`
    color: ${props => props.isMe ? "white" : "black"};
    font-size: 17px;
`;
const MessageContainer = styled.View`
     alignSelf: ${props => props.isMe ? "flex-start" : "flex-end"};
`;
const BubbleContainer = styled.View`
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1220444);
    margin-left: ${props => props.isMe ? "10px" : "0"};
    margin-right: ${props => props.isMe ? "0" : "10px"};
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 15px;
    background: ${props => props.isMe ? "#418fff" : "#ffffff"};
    max-width: 75%;
    alignSelf: flex-start;
    border: 1px solid #ececec;
    border-radius: 25px;
    borderBottomLeftRadius: ${props => props.isMe ? "0" : "25px"};
    borderBottomRightRadius: ${props => props.isMe ? "25px" : "0"};
`;

export default Message;

import React from 'react';
import {Text, View} from "react-native";
import styled from "styled-components/native";

const Message = ({text, isMe}) => {
    if (isMe) {
        return (
            <MessageContainer>
                <BubbleContainer>
                    <MessageText>{text}</MessageText>
                </BubbleContainer>
            </MessageContainer>
        );
    } else {
        return (
            <MessageRContainer>
                <BubbleRContainer>
                    <MessageRText>{text}</MessageRText>
                </BubbleRContainer>
            </MessageRContainer>
        );
    }
}
const MessageText = styled.Text`
    color: white;
    font-size: 17px;
`;
const MessageContainer = styled.View`

`;
const BubbleContainer = styled.View`
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1220444);
    margin-left: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 15px;
    background: #418fff;
    max-width: 75%;
    alignSelf: flex-start;
    border: 1px solid #ececec;
    border-radius: 25px;
    borderBottomLeftRadius: 0;    
`;
const MessageRText = styled.Text`
    color: black;
    font-size: 17px;
`;
const MessageRContainer = styled.View`
    alignSelf: flex-end;
`;
const BubbleRContainer = styled.View`
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1220444);
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 15px;
    background: #ffffff;
    max-width: 75%;
    alignSelf: flex-start;
    border: 1px solid #ececec;
    border-radius: 25px;
    borderBottomRightRadius: 0;    
`;

export default Message;

import React from 'react';
import styled from "styled-components/native";
import distanceInWordsToNow from 'date-fns/formatDistanceToNowStrict';
import ruLocale from "date-fns/esm/locale/uk";
const Message = ({text, isMe, date}) => {
    return (
        <MessageContainer isMe={isMe}>
            <BubbleContainer isMe={isMe}>
                <MessageText isMe={isMe}>{text}</MessageText>
            </BubbleContainer>
            <DateContainer  isMe={isMe}>
                {distanceInWordsToNow(new Date(date), {addSuffix: true, locale: ruLocale})}
            </DateContainer>
        </MessageContainer>
    );
}
const DateContainer= styled.Text`
    text-align: ${props => props.isMe ? "left": "right"};
    margin-left: ${props => props.isMe ? "15px": 0};
    margin-right: ${props => props.isMe ? 0: "15px"};
`;
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

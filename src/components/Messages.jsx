import React from 'react';
import {Message} from "../components";
import styled from "styled-components/native";

const Messages = ({items, isLoading, user, onRemoveMessage, scrollViewRef}) => {
    return (
        <MessagesContainer ref={scrollViewRef}
                           onContentSizeChange={() => scrollViewRef.current.scrollToEnd({animated: false})}>
            {items && items.length > 0 && (
                items.map(item => <Message text={item.text} isMe={user._id !== item.user._id} date={item.createdAt} key={item._id}/>)
            )}
        </MessagesContainer>
    );
}
const MessagesContainer = styled.ScrollView`
    height: 79%;
`;

export default Messages;

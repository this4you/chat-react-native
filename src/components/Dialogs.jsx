import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import DialogItem from "./DialogItem";
import {StyleSheet, Text} from "react-native";
import {Searchbar} from 'react-native-paper';
import {connect} from "react-redux";
import {dialogsActions} from "../redux/actions";
import socket from "../core/socket";

const sortyByLastMessage = (b, a) => {
    if (!a.lastMessage || !b.lastMessage) {
        return 0;
    }
    return new Date(a.lastMessage.createdAt) - new Date(b.lastMessage.createdAt);
}

const Dialogs = ({onChangeSearch, searchQuery, currentUserId, filtered, onOpenMessages}) => {
    return (
        <Container>
            <HeaderContainer>
                <Header>Чаты</Header>
            </HeaderContainer>
            <SearchContainer>
                <Searchbar
                    placeholder="Search"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style={styles.search}
                />
            </SearchContainer>
            <Dialog>
                {filtered && filtered.length ? filtered.sort(sortyByLastMessage).map(item => {
                        const dialogPartner = item.partner._id !== currentUserId ? item.partner : item.author;
                        return (
                            <DialogItem
                                onOpenDialog={onOpenMessages}
                                _id={item._id}
                                key={item._id}
                                isMe={item.lastMessage && item.lastMessage.user._id === currentUserId}
                                {...item}
                                partner={dialogPartner}
                            />
                        )
                    }) :
                    <Text>Ничего не найдено</Text>
                }
            </Dialog>
        </Container>
    );
}
export default connect(({dialogs, users}) => ({
    dialogs: dialogs,
    currentUserId: users.data && users.data._id
}), dialogsActions)(Dialogs);

Dialogs.defaultProps = {
    items: []
};

const styles = StyleSheet.create({
    search: {
        shadowOpacity: 0,
        backgroundColor: '#f9f9f9',
        marginTop: 15,
        borderRadius: 30,
        width: '90%'
    }
});
const SearchContainer = styled.View`
    align-items: center;
`;
const Header = styled.Text`
    font-weight: 800;
    font-size: 20px;
`;
const HeaderContainer = styled.View`
    justify-content: center;
    align-items: center;
`;
const Dialog = styled.ScrollView``;
const Container = styled.View`
   flex: 1;
   margin-top: 50px;
`;

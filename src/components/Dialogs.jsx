import React from 'react';
import styled from 'styled-components/native';
import DialogItem from "./DialogItem";
import {StyleSheet} from "react-native";
import {IconButton, Colors} from "react-native-paper";
import {Searchbar} from 'react-native-paper';
import {connect} from "react-redux";
import {dialogsActions} from "../redux/actions";
import SyncStorage from "sync-storage";

const sortyByLastMessage = (b, a) => {
    if (!a.lastMessage || !b.lastMessage) {
        return 0;
    }
    return new Date(a.lastMessage.createdAt) - new Date(b.lastMessage.createdAt);
}

const Dialogs = ({onChangeSearch, searchQuery, currentUserId, filtered, onOpenMessages, navigation}) => {
    return (
        <Container>
            <HeaderContainer>
                <Header>Чати</Header>
            </HeaderContainer>
            <SearchContainer>
                <Searchbar
                    placeholder="Пошук"
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style={styles.search}
                />
                <IconButton
                    icon="comment"
                    size={27}
                    color={Colors.grey600}
                    onPress={() => {
                        navigation.navigate("CreateDialogPage");
                    }}
                />
            </SearchContainer>
            <Dialog>
                {filtered && filtered.length ? filtered.sort(sortyByLastMessage).map(item => {
                        const dialogPartner = item.partner._id !== currentUserId ? item.partner : item.author;
                        return (
                            <DialogItem
                                onOpenDialog={() => onOpenMessages(item._id)}
                                _id={item._id}
                                key={item._id}
                                isMe={item.lastMessage && item.lastMessage.user._id === currentUserId}
                                {...item}
                                partner={dialogPartner}
                            />
                        )
                    }) :
                    <NeedCreateDialog>
                        <NeedCreateDialogText>Створіть перший діалог</NeedCreateDialogText>
                    </NeedCreateDialog>
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
        width: '80%'
    }
});
const SearchContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
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

const NeedCreateDialog = styled.View`
    margin-top: 70%;
    justify-content: center;
    align-items: center;    
`;
const NeedCreateDialogText = styled.Text``;

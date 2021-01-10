import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import DialogItem from "./DialogItem";
import {StyleSheet, Text} from "react-native";
import {Searchbar} from 'react-native-paper';

const sortyByLastMessage = (b, a) => {
    if (!a.lastMessage || !b.lastMessage) {
        return 0;
    }
    return new Date(a.lastMessage.createdAt) - new Date(b.lastMessage.createdAt);
}

const Dialogs = ({items, userId, onSearch, inputValue}) => {
    items = [{
        _id: "12331sdaw2",
        lastMessage: {text: "Привет, как дела?", createdAt: "2020-12-18T21:23:53.937+00:00"},
        partner: {
            fullName: "Влад Мертиченко",
            avatar: "https://png.pngtree.com/png-vector/20191018/ourlarge/pngtree-cute-dolphin-avatar-with-a-yellow-background-png-image_1770344.jpg"
        },
        author: {
            fullName: "",
            avatar: ""
        }
    },
        {
            _id: "92331sdaw2",
            lastMessage: {text: "Хорошего вечера!", createdAt: "2021-01-07T20:24:34.543+00:00"},
            partner: {
                fullName: "Leo Messi",
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS70lvsiyLkVpJQre89k0CHpTqbuaVGL5DZaw&usqp=CAU"
            },
            author: {
                fullName: "",
                avatar: ""
            }
        }];
    const [searchQuery, setSearchQuery] = useState('');
    const [filtered, setFilteredItems] = useState(items);
    const onChangeSearch = value => {
        setFilteredItems(
            items.filter(
                dialog =>
                    dialog.author.fullName.toLowerCase().indexOf(value.toLowerCase()) >= 0 ||
                    dialog.partner.fullName.toLowerCase().indexOf(value.toLowerCase()) >= 0,
            ));
        setSearchQuery(value);
    };
    return (
        <Container>
            <HeaderContainer>
                <Header>Чаты</Header>
            </HeaderContainer>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={styles.search}
            />
            <Dialog>
                {filtered && filtered.length ? filtered.sort(sortyByLastMessage).map(item => {
                        // const dialogPartner = item.partner._id !== userId ? item.partner : item.author;
                        return (
                            <DialogItem
                                _id={item._id}
                                // onSelect={onSelectDialog}
                                key={item._id}
                                // isMe={item.lastMessage && item.lastMessage.user._id === userId}
                                // userId={userId}
                                {...item}
                                // partner={dialogPartner}
                            />
                        )
                    }) :
                    <Text>Ничего не найдено</Text>
                }
            </Dialog>
        </Container>
    );
}
export default Dialogs;

Dialogs.defaultProps = {
    items: [{
        _id: "12331sdaw2",
        lastMessage: {text: "Привет, как дела?", createdAt: "2020-12-18T21:23:53.937+00:00"},
        partner: {
            fullName: "Влад Мертиченко",
            avatar: "https://png.pngtree.com/png-vector/20191018/ourlarge/pngtree-cute-dolphin-avatar-with-a-yellow-background-png-image_1770344.jpg"
        },
        author: {
            fullName: "",
            avatar: ""
        }
    },
        {
            _id: "92331sdaw2",
            lastMessage: {text: "Хорошего вечера!", createdAt: "2021-01-07T20:24:34.543+00:00"},
            partner: {
                fullName: "Leo Messi",
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS70lvsiyLkVpJQre89k0CHpTqbuaVGL5DZaw&usqp=CAU"
            },
            author: {
                fullName: "",
                avatar: ""
            }
        }]
};

const styles = StyleSheet.create({
    search: {
        marginTop: 15,
        shadowOpacity: 0,
        backgroundColor: '#f9f9f9'
    }
});

const Header = styled.Text`
    font-weight: 800;
    font-size: 20px;
`;
const HeaderContainer = styled.View`
    justify-content: center;
    align-items: center;
`;
const Dialog = styled.View``;
const Container = styled.ScrollView`
   flex: 1;
   margin-top: 50px;
`;

import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";


import {dialogsActions} from "../redux/actions";
import socket from "../core/socket";
import {Dialogs} from "../components";

const DialogsContainer = ({dialogs, navigation, fetchDialogs, currentUserId}) => {
    const {items = []} = dialogs;
    const onOpenMessages = () => {
        navigation.push('Message');
    };
    useEffect(() => {
        fetchDialogs();
        socket.on('SERVER:MESSAGE_CREATED', () => {
            fetchDialogs();
        });
    }, []);

    useEffect(() => {
        if (items.length) {
            onChangeSearch('');
        }
    }, [items]);

    const [searchQuery, setSearchQuery] = useState('');
    const [filtered, setFilteredItems] = useState(items);
    const onChangeSearch = value => {
        setFilteredItems(
            items.filter(
                dialog => {
                    const dialogPartner = dialog.partner._id !== currentUserId ? dialog.partner : dialog.author;
                    return dialogPartner.fullName.toLowerCase().indexOf(value.toLowerCase()) >= 0;
                }
            ));
        setSearchQuery(value);
    };
    return (
        <Dialogs onChangeSearch={onChangeSearch} searchQuery={searchQuery} currentUserId={currentUserId}
                 filtered={filtered} onOpenMessages={onOpenMessages}/>
    );
}
export default connect(({dialogs, users}) => ({
    dialogs: dialogs,
    currentUserId: users.data && users.data._id
}), dialogsActions)(DialogsContainer);

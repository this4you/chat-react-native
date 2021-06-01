import React from 'react';
import {Status} from "../components";
import {connect} from "react-redux";

const StatusContainer = ({currentDialogId, user, dialogs}) => {
    if (!dialogs.length || !currentDialogId) {
        return null;
    }

    const currentDialogObj = dialogs.filter(
        dialog => dialog._id === currentDialogId
    )[0];

    let partner = {};

    if (currentDialogObj.author._id === user._id) {
        partner = currentDialogObj.partner;
    } else {
        partner = currentDialogObj.author;
    }
    return (
        <Status online={partner.isOnline} fullName={partner.fullName}/>
    );
}

export default connect(({dialogs, users}) => ({
    dialogs: dialogs.items,
    currentDialogId: dialogs.currentDialogId,
    user: users.data
}))(StatusContainer);

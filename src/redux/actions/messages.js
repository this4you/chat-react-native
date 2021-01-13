import {messageApi} from "../../utils/api";

const actions = {
    fetchSendMessage: ({ text, dialog_id, attachments }) => dispatch => {
        return messageApi.send(text, dialog_id, attachments);
    },
    addMessage: message => (dispatch, getState) => {
        const { dialogs } = getState();
        const { currentDialogId } = dialogs;

        if (currentDialogId === message.dialog._id) {
            dispatch({
                type: "MESSAGES:ADD_MESSAGE",
                payload: message
            });
        }
    },
    setMessages: items => ({
        type: 'MESSAGES:SET_ITEMS',
        payload: items
    }),
    setIsLoading: bool => ({
        type: 'MESSAGES:SET_IS_LOADING',
        payload: bool
    }),
    fetchMessages: (dialogId) => dispatch => {
        dispatch(actions.setIsLoading(true));
        messageApi.getAllByDialogId(dialogId).then(({data}) => {
            dispatch(actions.setMessages(data));
        }).catch(() => {
            dispatch(actions.setIsLoading(false));
        });
    },
    removeMessageById: id => dispatch => {
        if (window.confirm("Вы действительно хотите удалить сообщение?")) {
            messageApi
                .removeById(id)
                .then(({ data }) => {
                    dispatch({
                        type: "MESSAGES:REMOVE_MESSAGE",
                        payload: id
                    });
                })
                .catch(() => {
                    dispatch(actions.setIsLoading(false));
                });
        }
    }
}
export default actions;
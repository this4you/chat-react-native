import SyncStorage from 'sync-storage';

const initialState = {
    data: null,
    token: SyncStorage.get('token') || "",
    isAuth: false
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case "USER:SET_DATA":
            return {
                ...state,
                data: payload,
                isAuth: true,
                token: SyncStorage.get('token')
            };
        case "USER:SET_IS_AUTH":
            return {
                ...state,
                isAuth: payload
            };
        default:
            return state;
    }
};
